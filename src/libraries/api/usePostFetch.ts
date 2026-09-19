"use client";

import { useMemo, useState, useRef } from "react";
import * as swr from "swr";

const useSWR = swr.default || swr;

import { cns } from "./cns";

class CacheAnalytics {
  hits = 0;
  misses = 0;
  bg = 0;

  hit() {
    this.hits++;
  }

  miss() {
    this.misses++;
  }

  background() {
    this.bg++;
  }

  stats() {
    const total = this.hits + this.misses;

    return {
      hits: this.hits,
      misses: this.misses,
      hitRate: total ? ((this.hits / total) * 100).toFixed(1) + "%" : "0%",
      backgroundRefresh: this.bg,
    };
  }
}

const analytics = new CacheAnalytics();

class IDBStore {
  private db: IDBDatabase | null = null;

  constructor(private name: string) {}

  async init() {
    if (this.db) {
      return;
    }

    this.db = await new Promise<IDBDatabase>((resolve, reject) => {
      const req = indexedDB.open(this.name, 1);

      req.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains("cache")) {
          db.createObjectStore("cache", {
            keyPath: "key",
          });
        }
      };

      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async get(key: string) {
    await this.init();

    return new Promise<any | null>((resolve) => {
      const tx = this.db!.transaction("cache", "readonly");
      const req = tx.objectStore("cache").get(key);

      req.onsuccess = () => {
        const value = req.result;

        if (!value || Date.now() > value.expiry) {
          return resolve(null);
        }

        resolve(value.data);
      };

      req.onerror = () => resolve(null);
    });
  }

  async set(key: string, data: any, ttl: number) {
    await this.init();

    return new Promise<void>((resolve) => {
      const tx = this.db!.transaction("cache", "readwrite");

      tx.objectStore("cache").put({
        key,
        data,
        expiry: Date.now() + ttl,
      });

      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  }

  async clear() {
    await this.init();

    return new Promise<void>((resolve) => {
      const tx = this.db!.transaction("cache", "readwrite");

      tx.objectStore("cache").clear();

      tx.oncomplete = () => resolve();
    });
  }

  async getAllKeys() {
    await this.init();

    return new Promise<string[]>((resolve) => {
      const tx = this.db!.transaction("cache", "readonly");
      const store = tx.objectStore("cache");
      const keys: string[] = [];

      const req = store.openCursor();

      req.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;

        if (cursor) {
          keys.push(cursor.key.toString());
          cursor.continue();
        } else {
          resolve(keys);
        }
      };

      req.onerror = () => resolve([]);
    });
  }
}

class SmartCache {
  private mem = new Map<string, { data: any; ts: number }>();

  private tabDB = new IDBStore("tab-cache");
  private refreshDB = new IDBStore("refresh-cache");

  constructor() {
    if (typeof window !== "undefined") {
      this.warmup();
    }
  }

  async warmup() {
    const tabKeys = await this.tabDB.getAllKeys();
    const refreshKeys = await this.refreshDB.getAllKeys();

    const keys = Array.from(new Set([...tabKeys, ...refreshKeys]));

    await Promise.all(
      keys.map(async (key) => {
        const [refresh, tab] = await Promise.all([
          this.refreshDB.get(key),
          this.tabDB.get(key),
        ]);

        const data = refresh || tab;

        if (data) {
          this.mem.set(key, {
            data,
            ts: Date.now(),
          });
        }
      }),
    );
  }

  async get(key: string) {
    const mem = this.mem.get(key);

    if (mem && Date.now() - mem.ts < 30_000) {
      analytics.hit();

      return mem;
    }

    const [refresh, tab] = await Promise.all([
      this.refreshDB.get(key),
      this.tabDB.get(key),
    ]);

    const data = refresh || tab;

    if (data) {
      const obj = {
        data,
        ts: Date.now(),
      };

      this.mem.set(key, obj);

      analytics.hit();

      return obj;
    }

    analytics.miss();

    return null;
  }

  async set(key: string, data: any) {
    const obj = {
      data,
      ts: Date.now(),
    };

    this.mem.set(key, obj);

    this.tabDB.set(key, data, 1 * 1);
    this.refreshDB.set(key, data, 1 * 1);
  }

  async invalidate() {
    this.mem.clear();

    await Promise.all([
      this.tabDB.clear(),
      this.refreshDB.clear(),
    ]);
  }

  stats() {
    return analytics.stats();
  }
}

const cache = new SmartCache();

interface Params<T = any> {
  endPoint: string;
  body?: T;
  route?: string;
}

interface Config extends RTCConfiguration {
  manual?: boolean;
}

const isFormData = (value: unknown): value is FormData => {
  return typeof FormData !== "undefined" && value instanceof FormData;
};

const appendFormDataValue = (
  formData: FormData,
  key: string,
  value: unknown,
) => {
  if (value === undefined || value === null) {
    return;
  }

  if (value instanceof Blob) {
    formData.append(key, value);
    return;
  }

  if (typeof value === "object") {
    formData.append(key, JSON.stringify(value));
    return;
  }

  formData.append(key, String(value));
};

const mergeBodies = (
  baseBody: any,
  overrideBody: any,
): Record<string, any> | FormData => {
  if (!isFormData(baseBody) && !isFormData(overrideBody)) {
    return {
      ...(baseBody || {}),
      ...(overrideBody || {}),
    };
  }

  const formData = new FormData();

  if (isFormData(baseBody)) {
    for (const [key, value] of baseBody.entries()) {
      formData.append(key, value);
    }
  } else if (baseBody && typeof baseBody === "object") {
    Object.entries(baseBody).forEach(([key, value]) => {
      appendFormDataValue(formData, key, value);
    });
  }

  if (isFormData(overrideBody)) {
    for (const [key, value] of overrideBody.entries()) {
      formData.append(key, value);
    }
  } else if (overrideBody && typeof overrideBody === "object") {
    Object.entries(overrideBody).forEach(([key, value]) => {
      appendFormDataValue(formData, key, value);
    });
  }

  return formData;
};

const makeKey = (params: Params<any>) => {
  if (isFormData(params.body)) {
    return `${params.endPoint}|${params.route || ""}|form-data`;
  }

  return `${params.endPoint}|${params.route || ""}|${JSON.stringify(
    params.body || {},
  )}`;
};

export const usePostFetch = <T = any>(
  params: Params<any>,
  config?: Config,
) => {
  const key = useMemo(() => makeKey(params), [params]);

  const [loading, setLoading] = useState(false);

  const revalidateLock = useRef(false);
  const mutateRef = useRef<any>(null);

  const fetchAndCache = async (p = params) => {
    const responseBody = p.body;

    const res = await cns({
      method: "post",
      endPoint: p.endPoint,
      body: responseBody,
      route: p.route,
    });

    if (!isFormData(responseBody)) {
      await cache.set(key, res);
    }

    return res;
  };

  const revalidate = async (p = params) => {
    if (revalidateLock.current) {
      return;
    }

    revalidateLock.current = true;

    try {
      analytics.background();

      const fresh = await fetchAndCache(p);

      mutateRef.current?.(fresh, false);
    } finally {
      revalidateLock.current = false;
    }
  };

  const fetcher = async (overrideBody?: any) => {
    const finalBody = mergeBodies(
      params.body,
      overrideBody,
    );

    const finalParams = {
      ...params,
      body: finalBody,
    };

    setLoading(true);

    try {
      const res = await fetchAndCache(finalParams);

      return res;
    } finally {
      setLoading(false);
    }
  };

  const {
    data,
    error,
    mutate,
    isValidating,
  } = useSWR<T>(key, fetcher, {
    ...config,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 10_000,
    isPaused: () => config?.manual === true,
  });

  mutateRef.current = mutate;

  return {
    data,
    error,
    isLoading: loading || isValidating,
    mutate,
    fetcher,
    revalidate,
    invalidateCache: () => cache.invalidate(),
    cacheStats: cache.stats(),
  };
};