"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var require_cookies = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports2 = {};
    __export2(src_exports2, {
      RequestCookies: () => RequestCookies,
      ResponseCookies: () => ResponseCookies,
      parseCookie: () => parseCookie,
      parseSetCookie: () => parseSetCookie,
      stringifyCookie: () => stringifyCookie
    });
    module2.exports = __toCommonJS2(src_exports2);
    function stringifyCookie(c) {
      var _a;
      const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
      ].filter(Boolean);
      const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
      return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
    }
    function parseCookie(cookie) {
      const map = /* @__PURE__ */ new Map();
      for (const pair of cookie.split(/; */)) {
        if (!pair)
          continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
          map.set(pair, "true");
          continue;
        }
        const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
        try {
          map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch {
        }
      }
      return map;
    }
    function parseSetCookie(setCookie2) {
      if (!setCookie2) {
        return void 0;
      }
      const [[name, value], ...attributes] = parseCookie(setCookie2);
      const {
        domain,
        expires,
        httponly,
        maxage,
        path,
        samesite,
        secure,
        partitioned,
        priority
      } = Object.fromEntries(
        attributes.map(([key, value2]) => [
          key.toLowerCase().replace(/-/g, ""),
          value2
        ])
      );
      const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && { expires: new Date(expires) },
        ...httponly && { httpOnly: true },
        ...typeof maxage === "string" && { maxAge: Number(maxage) },
        path,
        ...samesite && { sameSite: parseSameSite(samesite) },
        ...secure && { secure: true },
        ...priority && { priority: parsePriority(priority) },
        ...partitioned && { partitioned: true }
      };
      return compact(cookie);
    }
    function compact(t) {
      const newT = {};
      for (const key in t) {
        if (t[key]) {
          newT[key] = t[key];
        }
      }
      return newT;
    }
    var SAME_SITE = ["strict", "lax", "none"];
    function parseSameSite(string) {
      string = string.toLowerCase();
      return SAME_SITE.includes(string) ? string : void 0;
    }
    var PRIORITY = ["low", "medium", "high"];
    function parsePriority(string) {
      string = string.toLowerCase();
      return PRIORITY.includes(string) ? string : void 0;
    }
    function splitCookiesString(cookiesString) {
      if (!cookiesString)
        return [];
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    var RequestCookies = class {
      constructor(requestHeaders) {
        this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
          const parsed = parseCookie(header);
          for (const [name, value] of parsed) {
            this._parsed.set(name, { name, value });
          }
        }
      }
      [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
      }
      /**
       * The amount of cookies received from the client
       */
      get size() {
        return this._parsed.size;
      }
      get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
      }
      getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
          return all.map(([_, value]) => value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n]) => n === name).map(([_, value]) => value);
      }
      has(name) {
        return this._parsed.has(name);
      }
      set(...args) {
        const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
        const map = this._parsed;
        map.set(name, { name, value });
        this._headers.set(
          "cookie",
          Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; ")
        );
        return this;
      }
      /**
       * Delete the cookies matching the passed name or names in the request.
       */
      delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
        this._headers.set(
          "cookie",
          Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; ")
        );
        return result;
      }
      /**
       * Delete all the cookies in the cookies in the request.
       */
      clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
      }
      /**
       * Format the cookies in the request as a string for logging
       */
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
      }
    };
    var ResponseCookies = class {
      constructor(responseHeaders) {
        this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie2 = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie2) ? setCookie2 : splitCookiesString(setCookie2);
        for (const cookieString of cookieStrings) {
          const parsed = parseSetCookie(cookieString);
          if (parsed)
            this._parsed.set(parsed.name, parsed);
        }
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
       */
      get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
       */
      getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
          return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c) => c.name === key);
      }
      has(name) {
        return this._parsed.has(name);
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
       */
      set(...args) {
        const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({ name, value, ...cookie }));
        replace(map, this._headers);
        return this;
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
       */
      delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0]];
        return this.set({ ...options, name, value: "", expires: /* @__PURE__ */ new Date(0) });
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map(stringifyCookie).join("; ");
      }
    };
    function replace(bag, headers) {
      headers.delete("set-cookie");
      for (const [, value] of bag) {
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
      }
    }
    function normalizeCookie(cookie = { name: "", value: "" }) {
      if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
      }
      if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
      }
      if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
      }
      return cookie;
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/cookies.js
var require_cookies2 = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      RequestCookies: function() {
        return _cookies.RequestCookies;
      },
      ResponseCookies: function() {
        return _cookies.ResponseCookies;
      },
      stringifyCookie: function() {
        return _cookies.stringifyCookie;
      }
    });
    var _cookies = require_cookies();
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js
var require_reflect = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ReflectAdapter", {
      enumerable: true,
      get: function() {
        return ReflectAdapter;
      }
    });
    var ReflectAdapter = class {
      static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
          return value.bind(target);
        }
        return value;
      }
      static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
      }
      static has(target, prop) {
        return Reflect.has(target, prop);
      }
      static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
      }
    };
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/async-local-storage.js
var require_async_local_storage = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/async-local-storage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      bindSnapshot: function() {
        return bindSnapshot;
      },
      createAsyncLocalStorage: function() {
        return createAsyncLocalStorage;
      },
      createSnapshot: function() {
        return createSnapshot;
      }
    });
    var sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: false,
      configurable: true
    });
    var FakeAsyncLocalStorage = class {
      disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      getStore() {
        return void 0;
      }
      run() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      static bind(fn) {
        return fn;
      }
    };
    var maybeGlobalAsyncLocalStorage = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
    function createAsyncLocalStorage() {
      if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
      }
      return new FakeAsyncLocalStorage();
    }
    function bindSnapshot(fn) {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
      }
      return FakeAsyncLocalStorage.bind(fn);
    }
    function createSnapshot() {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
      }
      return function(fn, ...args) {
        return fn(...args);
      };
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/work-async-storage-instance.js
var require_work_async_storage_instance = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/work-async-storage-instance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "workAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/work-async-storage.external.js
var require_work_async_storage_external = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/work-async-storage.external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "workAsyncStorage", {
      enumerable: true,
      get: function() {
        return _workasyncstorageinstance.workAsyncStorageInstance;
      }
    });
    var _workasyncstorageinstance = require_work_async_storage_instance();
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/action-revalidation-kind.js
var require_action_revalidation_kind = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/action-revalidation-kind.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ActionDidNotRevalidate: function() {
        return ActionDidNotRevalidate;
      },
      ActionDidRevalidateDynamicOnly: function() {
        return ActionDidRevalidateDynamicOnly;
      },
      ActionDidRevalidateStaticAndDynamic: function() {
        return ActionDidRevalidateStaticAndDynamic;
      }
    });
    var ActionDidNotRevalidate = 0;
    var ActionDidRevalidateStaticAndDynamic = 1;
    var ActionDidRevalidateDynamicOnly = 2;
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js
var require_request_cookies = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
      },
      ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
      },
      RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
      },
      appendMutableCookies: function() {
        return appendMutableCookies;
      },
      areCookiesMutableInCurrentPhase: function() {
        return areCookiesMutableInCurrentPhase;
      },
      createCookiesWithMutableAccessCheck: function() {
        return createCookiesWithMutableAccessCheck;
      },
      getModifiedCookieValues: function() {
        return getModifiedCookieValues;
      },
      responseCookiesToRequestCookies: function() {
        return responseCookiesToRequestCookies;
      }
    });
    var _cookies = require_cookies2();
    var _reflect = require_reflect();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _actionrevalidationkind = require_action_revalidation_kind();
    var ReadonlyRequestCookiesError = class _ReadonlyRequestCookiesError extends Error {
      constructor() {
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
          value: "E1180",
          enumerable: false,
          configurable: true
        });
      }
      static callable() {
        throw new _ReadonlyRequestCookiesError();
      }
    };
    var RequestCookiesAdapter = class {
      static seal(cookies2) {
        return new Proxy(cookies2, {
          get(target, prop, receiver) {
            switch (prop) {
              case "clear":
              case "delete":
              case "set":
                return ReadonlyRequestCookiesError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
      /**
      * @param cookies
      * @returns A fresh object identity backed by the original value
      */
      static fresh(cookies2) {
        return new Proxy(cookies2, {
          get(target, prop, receiver) {
            return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
        });
      }
    };
    var SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
    function getModifiedCookieValues(cookies2) {
      const modified = cookies2[SYMBOL_MODIFY_COOKIE_VALUES];
      if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
      }
      return modified;
    }
    function appendMutableCookies(headers, mutableCookies) {
      const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
      if (modifiedCookieValues.length === 0) {
        return false;
      }
      const resCookies = new _cookies.ResponseCookies(headers);
      const returnedCookies = resCookies.getAll();
      for (const cookie of modifiedCookieValues) {
        resCookies.set(cookie);
      }
      for (const cookie of returnedCookies) {
        resCookies.set(cookie);
      }
      return true;
    }
    var MutableRequestCookiesAdapter = class {
      static wrap(cookies2, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies2.getAll()) {
          responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = /* @__PURE__ */ new Set();
        const updateResponseCookies = () => {
          const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
          if (workStore) {
            workStore.pathWasRevalidated = _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic;
          }
          const allCookies = responseCookies.getAll();
          modifiedValues = allCookies.filter((c) => modifiedCookies.has(c.name));
          if (onUpdateCookies) {
            const serializedCookies = [];
            for (const cookie of modifiedValues) {
              const tempCookies = new _cookies.ResponseCookies(new Headers());
              tempCookies.set(cookie);
              serializedCookies.push(tempCookies.toString());
            }
            onUpdateCookies(serializedCookies);
          }
        };
        const wrappedCookies = new Proxy(responseCookies, {
          get(target, prop, receiver) {
            switch (prop) {
              case SYMBOL_MODIFY_COOKIE_VALUES:
                return modifiedValues;
              case "delete":
                return function(...args) {
                  modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                  try {
                    target.delete(...args);
                    return wrappedCookies;
                  } finally {
                    updateResponseCookies();
                  }
                };
              case "set":
                return function(...args) {
                  modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                  try {
                    target.set(...args);
                    return wrappedCookies;
                  } finally {
                    updateResponseCookies();
                  }
                };
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
        return wrappedCookies;
      }
    };
    function createCookiesWithMutableAccessCheck(requestStore) {
      const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get(target, prop, receiver) {
          switch (prop) {
            case "delete":
              return function(...args) {
                ensureCookiesAreStillMutable(requestStore, "cookies().delete");
                target.delete(...args);
                return wrappedCookies;
              };
            case "set":
              return function(...args) {
                ensureCookiesAreStillMutable(requestStore, "cookies().set");
                target.set(...args);
                return wrappedCookies;
              };
            default:
              return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
        }
      });
      return wrappedCookies;
    }
    function areCookiesMutableInCurrentPhase(requestStore) {
      return requestStore.phase === "action";
    }
    function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
      if (!areCookiesMutableInCurrentPhase(requestStore)) {
        throw new ReadonlyRequestCookiesError();
      }
    }
    function responseCookiesToRequestCookies(responseCookies) {
      const requestCookies = new _cookies.RequestCookies(new Headers());
      for (const cookie of responseCookies.getAll()) {
        requestCookies.set(cookie);
      }
      return requestCookies;
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js
var require_work_unit_async_storage_instance = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "workUnitAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workUnitAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/invariant-error.js
var require_invariant_error = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/invariant-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "InvariantError", {
      enumerable: true,
      get: function() {
        return InvariantError;
      }
    });
    var InvariantError = class extends Error {
      constructor(message, options) {
        super(`Invariant: ${message.endsWith(".") ? message : message + "."} This is a bug in Next.js.`, options);
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
          value: "E1179",
          enumerable: false,
          configurable: true
        });
        this.name = "InvariantError";
      }
    };
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js
var require_work_unit_async_storage_external = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      getCacheSignal: function() {
        return getCacheSignal;
      },
      getDraftModeProviderForCacheScope: function() {
        return getDraftModeProviderForCacheScope;
      },
      getHmrRefreshHash: function() {
        return getHmrRefreshHash;
      },
      getResumeDataCache: function() {
        return getResumeDataCache;
      },
      getServerComponentsHmrCache: function() {
        return getServerComponentsHmrCache;
      },
      getStagedRenderingController: function() {
        return getStagedRenderingController;
      },
      getVaryParamsAccumulator: function() {
        return getVaryParamsAccumulator;
      },
      isHmrRefresh: function() {
        return isHmrRefresh;
      },
      throwForMissingRequestStore: function() {
        return throwForMissingRequestStore;
      },
      throwInvariantForMissingStore: function() {
        return throwInvariantForMissingStore;
      },
      workUnitAsyncStorage: function() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
      }
    });
    var _workunitasyncstorageinstance = require_work_unit_async_storage_instance();
    var _invarianterror = require_invariant_error();
    function throwForMissingRequestStore(callingExpression) {
      throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
      });
    }
    function throwInvariantForMissingStore() {
      throw Object.defineProperty(new _invarianterror.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
      });
    }
    function getResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
        case "prerender":
        case "prerender-runtime":
        case "prerender-client":
        case "validation-client":
        case "prerender-ppr":
          return workUnitStore.resumeDataCache;
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "prerender-legacy":
        case "generate-static-params":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getHmrRefreshHash(workUnitStore) {
      if (process.env.__NEXT_DEV_SERVER) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "prerender":
          case "prerender-runtime":
          case "request":
            return workUnitStore.hmrRefreshHash;
          case "prerender-client":
          case "validation-client":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function isHmrRefresh(workUnitStore) {
      if (process.env.__NEXT_DEV_SERVER) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.isHmrRefresh ?? false;
          case "prerender":
          case "prerender-client":
          case "validation-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return false;
    }
    function getServerComponentsHmrCache(workUnitStore) {
      if (process.env.__NEXT_DEV_SERVER) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.serverComponentsHmrCache;
          case "prerender":
          case "prerender-client":
          case "validation-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
      if (workStore.isDraftMode) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-runtime":
          case "request":
            return workUnitStore.draftMode;
          case "prerender":
          case "prerender-client":
          case "validation-client":
          case "prerender-ppr":
          case "prerender-legacy":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function getStagedRenderingController(workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
        case "prerender-runtime":
        case "prerender":
          return workUnitStore.stagedRendering ?? null;
        case "prerender-client":
        case "validation-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "generate-static-params":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getCacheSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-client":
        case "validation-client":
        case "prerender-runtime":
          return workUnitStore.cacheSignal;
        case "request": {
          if (workUnitStore.cacheSignal) {
            return workUnitStore.cacheSignal;
          }
        }
        case "prerender-ppr":
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "generate-static-params":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getVaryParamsAccumulator(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
        case "request": {
          return workUnitStore.varyParamsAccumulator ?? null;
        }
        case "prerender-ppr":
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "prerender-client":
        case "validation-client":
        case "unstable-cache":
        case "generate-static-params":
          return null;
        default:
          workUnitStore;
          return null;
      }
    }
  }
});

// node_modules/.pnpm/react@19.2.8/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/.pnpm/react@19.2.8/node_modules/react/cjs/react.development.js"(exports, module2) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type)
          return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type)
          return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE)
          return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning)
            return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type)
          children = null;
        var invokeCallback = false;
        if (null === children)
          invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children)
          return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module2 && module2[requireString]).call(
              module2,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else
            ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else
                  break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event))
            return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else
                    resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName)
          props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength)
          i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create2, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create2, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create2, deps);
      };
      exports.useInsertionEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create2, deps);
      };
      exports.useLayoutEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create2, deps);
      };
      exports.useMemo = function(create2, deps) {
        return resolveDispatcher().useMemo(create2, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.2.8";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/.pnpm/react@19.2.8/node_modules/react/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_development();
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/hooks-server-context.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      DynamicServerError: function() {
        return DynamicServerError;
      },
      isDynamicServerError: function() {
        return isDynamicServerError;
      }
    });
    var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
    var DynamicServerError = class extends Error {
      constructor(description) {
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
      }
    };
    function isDynamicServerError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
      }
      return err.digest === DYNAMIC_ERROR_CODE;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module2.exports = exports.default;
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/static-generation-bailout.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      StaticGenBailoutError: function() {
        return StaticGenBailoutError;
      },
      isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
      }
    });
    var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
    var StaticGenBailoutError = class extends Error {
      constructor(...args) {
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
      }
    };
    function isStaticGenBailoutError(error) {
      if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
      }
      return error.code === NEXT_STATIC_GEN_BAILOUT;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module2.exports = exports.default;
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/promise-with-resolvers.js
var require_promise_with_resolvers = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/promise-with-resolvers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "createPromiseWithResolvers", {
      enumerable: true,
      get: function() {
        return createPromiseWithResolvers;
      }
    });
    function createPromiseWithResolvers() {
      let resolve;
      let reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return {
        resolve,
        reject,
        promise
      };
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/staged-rendering.js
var require_staged_rendering = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/staged-rendering.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      RENDER_STAGE_ADVANCE_ORDER: function() {
        return RENDER_STAGE_ADVANCE_ORDER;
      },
      RenderStage: function() {
        return RenderStage;
      },
      StagedRenderingController: function() {
        return StagedRenderingController;
      },
      SyncIOMode: function() {
        return SyncIOMode;
      },
      getNextStage: function() {
        return getNextStage;
      },
      isAdvanceableRenderStage: function() {
        return isAdvanceableRenderStage;
      }
    });
    var _invarianterror = require_invariant_error();
    var _promisewithresolvers = require_promise_with_resolvers();
    var RenderStage = /* @__PURE__ */ function(RenderStage2) {
      RenderStage2[RenderStage2["Before"] = 1] = "Before";
      RenderStage2[RenderStage2["ShellStatic"] = 11] = "ShellStatic";
      RenderStage2[RenderStage2["Static"] = 13] = "Static";
      RenderStage2[RenderStage2["ShellRuntime"] = 21] = "ShellRuntime";
      RenderStage2[RenderStage2["Runtime"] = 23] = "Runtime";
      RenderStage2[RenderStage2["Dynamic"] = 30] = "Dynamic";
      RenderStage2[RenderStage2["Abandoned"] = 40] = "Abandoned";
      return RenderStage2;
    }({});
    var RENDER_STAGE_ADVANCE_ORDER = [
      11,
      13,
      21,
      23,
      30
    ];
    function getNextStage(stage) {
      return RENDER_STAGE_ADVANCE_ORDER[RENDER_STAGE_ADVANCE_ORDER.indexOf(stage) + 1];
    }
    function isAdvanceableRenderStage(stage) {
      return 1 < stage && stage <= 30;
    }
    var SyncIOMode = /* @__PURE__ */ function(SyncIOMode2) {
      SyncIOMode2[SyncIOMode2["Untracked"] = 1] = "Untracked";
      SyncIOMode2[SyncIOMode2["AllowedInRuntimeOrDynamic"] = 2] = "AllowedInRuntimeOrDynamic";
      SyncIOMode2[SyncIOMode2["AllowedInDynamic"] = 3] = "AllowedInDynamic";
      return SyncIOMode2;
    }({});
    var StagedRenderingController = class {
      constructor({ abortSignal, abandonController, syncIO, finalStage }) {
        this.currentStage = 1;
        this.syncInterruptReason = null;
        this.triggers = {
          [11]: createStageTrigger(),
          [13]: createStageTrigger(),
          //
          [21]: createStageTrigger(),
          [23]: createStageTrigger(),
          //
          [30]: createStageTrigger()
        };
        this.abortSignal = abortSignal;
        this.abandonController = abandonController;
        this.syncIOMode = syncIO;
        this.finalStage = finalStage;
        if (abortSignal) {
          abortSignal.addEventListener("abort", () => {
            const { reason } = abortSignal;
            for (const trigger of Object.values(this.triggers)) {
              cancelStageTrigger(trigger, reason);
            }
          }, {
            once: true
          });
        }
        if (abandonController) {
          abandonController.signal.addEventListener("abort", () => {
            this.abandonRender();
          }, {
            once: true
          });
        }
      }
      onStage(stage, callback) {
        addSyncTriggerListener(this.triggers[stage], callback);
      }
      shouldTrackSyncInterrupt() {
        if (this.syncIOMode === 1) {
          return false;
        }
        switch (this.currentStage) {
          case 1:
            return false;
          case 11:
          case 13:
            return true;
          case 21:
          case 23: {
            switch (this.syncIOMode) {
              case 2: {
                return false;
              }
              case 3: {
                return true;
              }
            }
          }
          case 30:
          case 40:
            return false;
          default:
            this.currentStage;
            return false;
        }
      }
      /** Note: only call this if `shouldTrackSyncInterrupt()` returned true */
      syncInterruptCurrentStageWithReason(reason) {
        const { currentStage } = this;
        if (currentStage === 1 || currentStage === 30 || currentStage === 40) {
          return;
        }
        if (this.abandonController) {
          this.abandonController.abort();
          return;
        }
        if (this.abortSignal) {
          this.syncInterruptReason = reason;
          this.currentStage = 40;
          return;
        }
        this.syncInterruptReason = reason;
        this.advanceStage(30);
      }
      getSyncInterruptReason() {
        return this.syncInterruptReason;
      }
      getStageEndTime(stage) {
        return this.triggers[getNextStage(stage)].triggeredAt ?? Infinity;
      }
      abandonRender() {
        const { currentStage } = this;
        if (currentStage === 1) {
          throw Object.defineProperty(new _invarianterror.InvariantError("A render that hasn't started yet cannot be abandoned"), "__NEXT_ERROR_CODE", {
            value: "E1300",
            enumerable: false,
            configurable: true
          });
        }
        if (currentStage === 30 || currentStage === 40) {
          return;
        }
        const nextStageIx = RENDER_STAGE_ADVANCE_ORDER.indexOf(currentStage) + 1;
        const dynamicStageIx = RENDER_STAGE_ADVANCE_ORDER.indexOf(30);
        for (let i = nextStageIx; i < dynamicStageIx; i++) {
          this.resolveStage(RENDER_STAGE_ADVANCE_ORDER[i]);
        }
        this.currentStage = 40;
      }
      advanceStage(targetStage) {
        if (this.finalStage !== null && targetStage > this.finalStage) {
          throw Object.defineProperty(new _invarianterror.InvariantError(`Attempted to advance to stage ${RenderStage[targetStage]} but the render is limited to ${RenderStage[this.finalStage]}`), "__NEXT_ERROR_CODE", {
            value: "E1302",
            enumerable: false,
            configurable: true
          });
        }
        const { currentStage } = this;
        if (currentStage === 30 || currentStage === 40) {
          return;
        }
        if (targetStage <= currentStage) {
          return;
        }
        this.currentStage = targetStage;
        const nextStageIx = currentStage === 1 ? 0 : RENDER_STAGE_ADVANCE_ORDER.indexOf(currentStage) + 1;
        const targetStageIx = RENDER_STAGE_ADVANCE_ORDER.indexOf(targetStage);
        for (let i = nextStageIx; i <= targetStageIx; i++) {
          this.resolveStage(RENDER_STAGE_ADVANCE_ORDER[i]);
        }
      }
      resolveStage(stage) {
        fireStageTrigger(this.triggers[stage]);
      }
      getStagePromise(stage) {
        return this.triggers[stage].promise;
      }
      waitForStage(stage) {
        return this.getStagePromise(stage);
      }
      delayUntilStage(stage, displayName, resolvedValue) {
        const stagePromise = this.getStagePromise(stage);
        const promise = true ? makeDevtoolsIOPromiseFromIOTrigger(stagePromise, displayName, resolvedValue) : stagePromise.then(() => resolvedValue);
        if (this.abortSignal) {
          promise.catch(ignoreReject);
        }
        return promise;
      }
    };
    function ignoreReject() {
    }
    function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
      const promise = new Promise((resolve, reject) => {
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
      });
      if (displayName !== void 0) {
        promise.displayName = displayName;
      }
      return promise;
    }
    function addSyncTriggerListener(trigger, listener) {
      if (trigger.state === "pending") {
        trigger._listeners.push(listener);
      } else {
        listener();
      }
    }
    function createStageTrigger() {
      const { promise, resolve, reject } = (0, _promisewithresolvers.createPromiseWithResolvers)();
      return {
        state: "pending",
        triggeredAt: null,
        promise,
        _listeners: [],
        _resolvePromise: resolve,
        _rejectPromise: reject
      };
    }
    function fireStageTrigger(trigger) {
      if (trigger.state !== "pending") {
        return;
      }
      trigger.state = "triggered";
      trigger.triggeredAt = performance.now() + performance.timeOrigin;
      try {
        const { _listeners: listeners } = trigger;
        for (let i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
        listeners.length = 0;
      } finally {
        trigger._resolvePromise();
      }
    }
    function cancelStageTrigger(trigger, reason) {
      if (trigger.state !== "pending") {
        return;
      }
      trigger.state = "cancelled";
      trigger._listeners.length = 0;
      trigger.promise.catch(ignoreReject);
      trigger._rejectPromise(reason);
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/runtime-reacts.external.js
var require_runtime_reacts_external = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/runtime-reacts.external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      getClientReact: function() {
        return getClientReact;
      },
      getServerReact: function() {
        return getServerReact;
      },
      registerClientReact: function() {
        return registerClientReact;
      },
      registerServerReact: function() {
        return registerServerReact;
      }
    });
    var ClientReact = null;
    function registerClientReact(react) {
      ClientReact = react;
    }
    function getClientReact() {
      return ClientReact;
    }
    var ServerReact = null;
    function registerServerReact(react) {
      ServerReact = react;
    }
    function getServerReact() {
      return ServerReact;
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/dynamic-rendering-utils.js
var require_dynamic_rendering_utils = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/dynamic-rendering-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ClientHookDynamicError: function() {
        return ClientHookDynamicError;
      },
      RENDER_STAGES_BY_DATA_KIND: function() {
        return RENDER_STAGES_BY_DATA_KIND;
      },
      applyOwnerStack: function() {
        return applyOwnerStack;
      },
      isClientHookDynamicError: function() {
        return isClientHookDynamicError;
      },
      isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
      },
      makeClientHookHangingPromise: function() {
        return makeClientHookHangingPromise;
      },
      makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
      },
      makeDynamicHangingPromise: function() {
        return makeDynamicHangingPromise;
      },
      makeFallbackParamsHangingPromise: function() {
        return makeFallbackParamsHangingPromise;
      },
      makePromiseFromTrigger: function() {
        return makePromiseFromTrigger;
      },
      makeRuntimeHangingPromise: function() {
        return makeRuntimeHangingPromise;
      },
      makeStageHangingPromise: function() {
        return makeStageHangingPromise;
      },
      makeUntrackedHangingPromise: function() {
        return makeUntrackedHangingPromise;
      },
      trackFallbackParamsAccessed: function() {
        return trackFallbackParamsAccessed;
      },
      trackRuntimeDataAccessed: function() {
        return trackRuntimeDataAccessed;
      }
    });
    var _stagedrendering = require_staged_rendering();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _runtimereactsexternal = require_runtime_reacts_external();
    function isHangingPromiseRejectionError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === HANGING_PROMISE_REJECTION;
    }
    var HANGING_PROMISE_REJECTION = "HANGING_PROMISE_REJECTION";
    var HangingPromiseRejectionError = class extends Error {
      constructor(route, expression) {
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
      }
    };
    var CLIENT_HOOK_DYNAMIC = "CLIENT_HOOK_DYNAMIC";
    var ClientHookDynamicError = class extends Error {
      constructor(route, expression) {
        super(`Route "${route}": Next.js encountered URL data \`${expression}\` in a Client Component outside of \`<Suspense>\`.

This blocks prerendering because the value is only available at runtime.

Ways to fix this:
  - [stream] Wrap the component in \`<Suspense fallback={...}>\` so the hook value streams in after prerendering
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-client-hook`), this.digest = CLIENT_HOOK_DYNAMIC;
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
          value: "E1433",
          enumerable: false,
          configurable: true
        });
      }
    };
    function isClientHookDynamicError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === CLIENT_HOOK_DYNAMIC;
    }
    var abortListenersBySignal = /* @__PURE__ */ new WeakMap();
    function makeDynamicHangingPromise(signal, route, expression) {
      return makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
    }
    function makeUntrackedHangingPromise(signal, route, expression) {
      return makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
    }
    function makeRuntimeHangingPromise(signal, route, expression, workUnitStore) {
      if (workUnitStore !== null) {
        trackRuntimeDataAccessed(workUnitStore);
      }
      return makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
    }
    function makeFallbackParamsHangingPromise(signal, route, expression, workUnitStore) {
      if (workUnitStore !== null) {
        trackFallbackParamsAccessed(workUnitStore);
      }
      return makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
    }
    function makeStageHangingPromise(signal, route, expression, workUnitStore) {
      trackRuntimeDataAccessed(workUnitStore);
      return makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
    }
    function trackRuntimeDataAccessed(workUnitStore) {
      trackRuntimeDataAccessedImpl(workUnitStore, false);
    }
    function trackFallbackParamsAccessed(workUnitStore) {
      trackRuntimeDataAccessedImpl(workUnitStore, true);
    }
    function trackRuntimeDataAccessedImpl(workUnitStore, isFallbackParamAccess) {
      switch (workUnitStore.type) {
        case "prerender": {
          var _workUnitStore_runtimeDataAccessed;
          (_workUnitStore_runtimeDataAccessed = workUnitStore.runtimeDataAccessed) == null ? void 0 : _workUnitStore_runtimeDataAccessed.resolve(true);
          const hintCell = workUnitStore.shouldAttemptStaticPrefetch;
          if (hintCell !== null && (!isFallbackParamAccess || !workUnitStore.isFallbackUpgradeable)) {
            hintCell.current = false;
          }
          break;
        }
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "prerender-runtime":
        case "validation-client":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "generate-static-params":
          break;
        default:
          workUnitStore;
      }
    }
    function makeClientHookHangingPromise(signal, error) {
      return makeHangingPromiseWithError(signal, error);
    }
    function makeHangingPromiseWithError(signal, error) {
      if (signal.aborted) {
        return Promise.reject(error);
      } else {
        const hangingPromise = new Promise((_, reject) => {
          const boundRejection = reject.bind(null, error);
          let currentListeners = abortListenersBySignal.get(signal);
          if (currentListeners) {
            currentListeners.push(boundRejection);
          } else {
            const listeners = [
              boundRejection
            ];
            abortListenersBySignal.set(signal, listeners);
            signal.addEventListener("abort", () => {
              for (let i = 0; i < listeners.length; i++) {
                listeners[i]();
              }
            }, {
              once: true
            });
          }
        });
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
      }
    }
    function ignoreReject() {
    }
    function makePromiseFromTrigger(trigger, value) {
      const promise = trigger.then(() => value);
      promise.catch(ignoreReject);
      return promise;
    }
    function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
      if (requestStore.stagedRendering) {
        return requestStore.stagedRendering.delayUntilStage(stage, void 0, underlying);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(underlying);
        }, 0);
      });
    }
    var RENDER_STAGES_BY_DATA_KIND = {
      sessionData: _stagedrendering.RenderStage.ShellRuntime,
      staticLinkData: _stagedrendering.RenderStage.Static,
      runtimeLinkData: _stagedrendering.RenderStage.Runtime
    };
    function applyOwnerStack(error) {
      if (true) {
        var _getClientReact_captureOwnerStack, _getClientReact, _getServerReact_captureOwnerStack, _getServerReact;
        let ownerStack;
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        const innerOwnerStack = ((_getClientReact = (0, _runtimereactsexternal.getClientReact)()) == null ? void 0 : (_getClientReact_captureOwnerStack = _getClientReact.captureOwnerStack) == null ? void 0 : _getClientReact_captureOwnerStack.call(_getClientReact)) ?? ((_getServerReact = (0, _runtimereactsexternal.getServerReact)()) == null ? void 0 : (_getServerReact_captureOwnerStack = _getServerReact.captureOwnerStack) == null ? void 0 : _getServerReact_captureOwnerStack.call(_getServerReact));
        switch (workUnitStore == null ? void 0 : workUnitStore.type) {
          case "cache":
          case "private-cache":
            ownerStack = (innerOwnerStack || "") + (workUnitStore.outerOwnerStack || "") || void 0;
            break;
          case "unstable-cache":
          case "request":
          case "prerender":
          case "prerender-ppr":
          case "prerender-legacy":
          case "prerender-runtime":
          case "prerender-client":
          case "validation-client":
          case "generate-static-params":
          case void 0:
            ownerStack = innerOwnerStack;
            break;
          default:
            workUnitStore;
        }
        if (ownerStack) {
          let stack = ownerStack;
          if (error.stack) {
            const frames = [];
            for (const frame of error.stack.split("\n").slice(1)) {
              if (frame.includes("react_stack_bottom_frame")) {
                break;
              }
              frames.push(frame);
            }
            stack = "\n" + frames.join("\n") + stack;
          }
          error.stack = error.name + ": " + error.message + stack;
        }
      }
      return error;
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/framework/boundary-constants.js
var require_boundary_constants = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/framework/boundary-constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
      },
      OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
      },
      ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
      },
      VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
      }
    });
    var METADATA_BOUNDARY_NAME = "__next_metadata_boundary__";
    var VIEWPORT_BOUNDARY_NAME = "__next_viewport_boundary__";
    var OUTLET_BOUNDARY_NAME = "__next_outlet_boundary__";
    var ROOT_LAYOUT_BOUNDARY_NAME = "__next_root_layout_boundary__";
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/scheduler.js
var require_scheduler = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/scheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      atLeastOneTask: function() {
        return atLeastOneTask;
      },
      scheduleImmediate: function() {
        return scheduleImmediate;
      },
      scheduleOnNextTick: function() {
        return scheduleOnNextTick;
      },
      waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
      }
    });
    var scheduleOnNextTick = (cb) => {
      Promise.resolve().then(() => {
        if (process.env.NEXT_RUNTIME === "edge") {
          setTimeout(cb, 0);
        } else {
          process.nextTick(cb);
        }
      });
    };
    var scheduleImmediate = (cb) => {
      if (process.env.NEXT_RUNTIME === "edge") {
        setTimeout(cb, 0);
      } else {
        setImmediate(cb);
      }
    };
    function atLeastOneTask() {
      return new Promise((resolve) => scheduleImmediate(resolve));
    }
    function waitAtLeastOneReactRenderTask() {
      if (process.env.NEXT_RUNTIME === "edge") {
        return new Promise((r) => setTimeout(r, 0));
      } else {
        return new Promise((r) => setImmediate(r));
      }
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js
var require_bailout_to_csr = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      BailoutToCSRError: function() {
        return BailoutToCSRError;
      },
      isBailoutToCSRError: function() {
        return isBailoutToCSRError;
      }
    });
    var BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    var BailoutToCSRError = class extends Error {
      constructor(reason) {
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
      }
    };
    function isBailoutToCSRError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === BAILOUT_TO_CSR;
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/blocking-route-messages.js
var require_blocking_route_messages = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/blocking-route-messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      createDynamicBodyError: function() {
        return createDynamicBodyError;
      },
      createDynamicBodyErrorInNavigation: function() {
        return createDynamicBodyErrorInNavigation;
      },
      createDynamicMetadataError: function() {
        return createDynamicMetadataError;
      },
      createDynamicOrRuntimeBodyError: function() {
        return createDynamicOrRuntimeBodyError;
      },
      createDynamicOrRuntimeMetadataError: function() {
        return createDynamicOrRuntimeMetadataError;
      },
      createDynamicOrRuntimeViewportError: function() {
        return createDynamicOrRuntimeViewportError;
      },
      createDynamicViewportError: function() {
        return createDynamicViewportError;
      },
      createLinkBodyErrorInNavigation: function() {
        return createLinkBodyErrorInNavigation;
      },
      createLinkMetadataError: function() {
        return createLinkMetadataError;
      },
      createLinkViewportError: function() {
        return createLinkViewportError;
      },
      createRuntimeBodyError: function() {
        return createRuntimeBodyError;
      },
      createRuntimeBodyErrorInNavigation: function() {
        return createRuntimeBodyErrorInNavigation;
      },
      createRuntimeMetadataError: function() {
        return createRuntimeMetadataError;
      },
      createRuntimeViewportError: function() {
        return createRuntimeViewportError;
      },
      logBuildDebugHint: function() {
        return logBuildDebugHint;
      }
    });
    function createRuntimeBodyError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered runtime data during prerendering.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-runtime`), "__NEXT_ERROR_CODE", {
        value: "E1427",
        enumerable: false,
        configurable: true
      });
    }
    function createDynamicBodyError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered uncached data during prerendering.

\`fetch(...)\` or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`), "__NEXT_ERROR_CODE", {
        value: "E1440",
        enumerable: false,
        configurable: true
      });
    }
    function createRuntimeBodyErrorInNavigation(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered runtime data during prerendering or a navigation.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed outside of \`<Suspense>\` prevents the route from being prerendered or the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-runtime`), "__NEXT_ERROR_CODE", {
        value: "E1430",
        enumerable: false,
        configurable: true
      });
    }
    function createLinkBodyErrorInNavigation(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered URL data during prerendering or a navigation.

\`params\` or \`searchParams\` accessed outside of \`<Suspense>\` may prevent the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/instant-shell-url-data`), "__NEXT_ERROR_CODE", {
        value: "E1439",
        enumerable: false,
        configurable: true
      });
    }
    function createDynamicBodyErrorInNavigation(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered uncached data during prerendering or a navigation.

\`fetch(...)\` or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered or the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`), "__NEXT_ERROR_CODE", {
        value: "E1437",
        enumerable: false,
        configurable: true
      });
    }
    function createDynamicOrRuntimeBodyError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered uncached or runtime data during prerendering.

\`fetch(...)\`, \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] For uncached data (\`fetch\`, database calls): cache the access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`), "__NEXT_ERROR_CODE", {
        value: "E1428",
        enumerable: false,
        configurable: true
      });
    }
    function createLinkMetadataError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered URL data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prefetched. \`params\` or \`searchParams\` accessed in \`generateMetadata()\` prevent it from being prefetched.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`), "__NEXT_ERROR_CODE", {
        value: "E1429",
        enumerable: false,
        configurable: true
      });
    }
    function createRuntimeMetadataError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered runtime data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered. \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed in \`generateMetadata()\` cause it to run dynamically.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`), "__NEXT_ERROR_CODE", {
        value: "E1423",
        enumerable: false,
        configurable: true
      });
    }
    function createDynamicMetadataError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered uncached data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered. \`fetch(...)\` or \`connection()\` accessed in \`generateMetadata()\` cause it to run dynamically.

Ways to fix this:
  - [cache] Cache the metadata with \`"use cache"\` in \`generateMetadata()\` (does not apply to \`connection()\`)
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-dynamic`), "__NEXT_ERROR_CODE", {
        value: "E1425",
        enumerable: false,
        configurable: true
      });
    }
    function createLinkViewportError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered URL data in \`generateViewport()\`.

\`params\` or \`searchParams\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`), "__NEXT_ERROR_CODE", {
        value: "E1431",
        enumerable: false,
        configurable: true
      });
    }
    function createRuntimeViewportError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered runtime data in \`generateViewport()\`.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`), "__NEXT_ERROR_CODE", {
        value: "E1424",
        enumerable: false,
        configurable: true
      });
    }
    function createDynamicViewportError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered uncached data in \`generateViewport()\`.

\`fetch(...)\` or \`connection()\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [cache] Cache the viewport data with \`"use cache"\` in \`generateViewport()\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-dynamic`), "__NEXT_ERROR_CODE", {
        value: "E1438",
        enumerable: false,
        configurable: true
      });
    }
    function createDynamicOrRuntimeViewportError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered uncached or runtime data in \`generateViewport()\`.

This prevents the page from being prerendered, leading to a slower user experience. Unlike metadata, viewport cannot be streamed behind \`<Suspense>\` because it affects the initial page load.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [cache] For uncached data (\`fetch\`, database calls): cache the viewport with \`"use cache"\` in \`generateViewport()\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`), "__NEXT_ERROR_CODE", {
        value: "E1436",
        enumerable: false,
        configurable: true
      });
    }
    function createDynamicOrRuntimeMetadataError(route) {
      return Object.defineProperty(new Error(`Route "${route}": Next.js encountered uncached or runtime data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [cache] Cache the metadata with \`"use cache"\` in \`generateMetadata()\` (does not apply to \`connection()\`)
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`), "__NEXT_ERROR_CODE", {
        value: "E1426",
        enumerable: false,
        configurable: true
      });
    }
    function logBuildDebugHint(route) {
      if (false) {
        console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
      } else if (!process.env.__NEXT_DEV_SERVER) {
        console.error(`To debug the issue, start the app in development mode by running \`next dev\`, then open "${route}" in your browser to investigate the error.`);
      }
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js
var require_boundary_constants2 = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      INSTANT_SLOT_MARKER_PREFIX: function() {
        return INSTANT_SLOT_MARKER_PREFIX;
      },
      INSTANT_SLOT_MARKER_SUFFIX: function() {
        return INSTANT_SLOT_MARKER_SUFFIX;
      },
      INSTANT_VALIDATION_BOUNDARY_NAME: function() {
        return INSTANT_VALIDATION_BOUNDARY_NAME;
      }
    });
    var INSTANT_VALIDATION_BOUNDARY_NAME = "__next_instant_validation_boundary__";
    var INSTANT_SLOT_MARKER_PREFIX = "__next_instant_slot_";
    var INSTANT_SLOT_MARKER_SUFFIX = "__";
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/instant-validation/boundary-tracking.js
var require_boundary_tracking = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/instant-validation/boundary-tracking.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      allRequiredBoundariesRendered: function() {
        return allRequiredBoundariesRendered;
      },
      createValidationBoundaryTracking: function() {
        return createValidationBoundaryTracking;
      }
    });
    function createValidationBoundaryTracking() {
      return {
        requiredIds: /* @__PURE__ */ new Map(),
        renderedIds: /* @__PURE__ */ new Set()
      };
    }
    function allRequiredBoundariesRendered(state) {
      for (const id of state.requiredIds.keys()) {
        if (!state.renderedIds.has(id)) {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/instant-messages.js
var require_instant_messages = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/instant-messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      createLinkPrefetchPartialError: function() {
        return createLinkPrefetchPartialError;
      },
      createUnrenderedSegmentError: function() {
        return createUnrenderedSegmentError;
      }
    });
    function createUnrenderedSegmentError(route, missingFiles) {
      let message = `Route "${route}": Could not validate that a segment in your UI has instant navigation.`;
      if (missingFiles.length > 0) {
        const label = missingFiles.length === 1 ? "Dropped segment" : "Dropped segments";
        message += `

This segment was dropped from rendering. Issues that would prevent instant navigation will go undetected.

${label}:
${missingFiles.map((p) => `  ${p}`).join("\n")}

Ways to fix this:
  - [render] Render the dropped segment
  - [ignore] Set \`export const instant = false\` to opt the dropped segment out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-unrendered-segment`;
      }
      return Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E1286",
        enumerable: false,
        configurable: true
      });
    }
    function createLinkPrefetchPartialError(pathname) {
      return Object.defineProperty(new Error(`Next.js encountered dynamic data during prefetching for "${pathname}".

This will lead to slower, more expensive prefetches.

Ways to fix this:
  - [upgrade] Opt into Partial Prefetching by exporting \`const prefetch = 'partial'\` from the page or layout, or by setting \`partialPrefetching: true\` in next.config to opt the whole app in
  - [disable] Remove \`prefetch={true}\` from the <Link> to use the default prefetch
  - [ignore] Set \`export const instant = false\` to opt the route out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-link-prefetch-partial`), "__NEXT_ERROR_CODE", {
        value: "E1435",
        enumerable: false,
        configurable: true
      });
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/dynamic-rendering.js
var require_dynamic_rendering = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/dynamic-rendering.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      DynamicHoleKind: function() {
        return DynamicHoleKind;
      },
      Postpone: function() {
        return Postpone;
      },
      PreludeState: function() {
        return PreludeState;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
      },
      accessedDynamicData: function() {
        return accessedDynamicData;
      },
      annotateDynamicAccess: function() {
        return annotateDynamicAccess;
      },
      consumeDynamicAccess: function() {
        return consumeDynamicAccess;
      },
      createDynamicTrackingState: function() {
        return createDynamicTrackingState;
      },
      createDynamicValidationState: function() {
        return createDynamicValidationState;
      },
      createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
      },
      createInstantValidationState: function() {
        return createInstantValidationState;
      },
      createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
      },
      formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
      },
      getFirstDynamicReason: function() {
        return getFirstDynamicReason;
      },
      getNavigationDisallowedDynamicReasons: function() {
        return getNavigationDisallowedDynamicReasons;
      },
      getStaticShellDisallowedDynamicReasons: function() {
        return getStaticShellDisallowedDynamicReasons;
      },
      isDynamicPostpone: function() {
        return isDynamicPostpone;
      },
      isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
      },
      logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
      },
      markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
      },
      postponeWithTracking: function() {
        return postponeWithTracking;
      },
      throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
      },
      throwIfSyncIOUsed: function() {
        return throwIfSyncIOUsed;
      },
      throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
      },
      trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
      },
      trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
      },
      trackDynamicHoleInNavigation: function() {
        return trackDynamicHoleInNavigation;
      },
      trackDynamicHoleInRuntimeShell: function() {
        return trackDynamicHoleInRuntimeShell;
      },
      trackDynamicHoleInStaticShell: function() {
        return trackDynamicHoleInStaticShell;
      },
      trackThrownErrorInNavigation: function() {
        return trackThrownErrorInNavigation;
      },
      useDynamicRouteParams: function() {
        return useDynamicRouteParams;
      },
      useDynamicSearchParams: function() {
        return useDynamicSearchParams;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    var _hooksservercontext = require_hooks_server_context();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _boundaryconstants = require_boundary_constants();
    var _scheduler = require_scheduler();
    var _bailouttocsr = require_bailout_to_csr();
    var _blockingroutemessages = require_blocking_route_messages();
    var _invarianterror = require_invariant_error();
    var _boundaryconstants1 = require_boundary_constants2();
    var _boundarytracking = require_boundary_tracking();
    var _instantmessages = require_instant_messages();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasPostpone = typeof _react.default.unstable_postpone === "function";
    function createDynamicTrackingState(isDebugDynamicAccesses) {
      return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null,
        syncDynamicErrorWithStackPostMicrotask: false
      };
    }
    function createDynamicValidationState() {
      return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
      };
    }
    function getPendingClientSyncDynamicError(clientDynamic) {
      return clientDynamic.syncDynamicErrorWithStackPostMicrotask ? null : clientDynamic.syncDynamicErrorWithStack;
    }
    function getFirstDynamicReason(trackingState) {
      var _trackingState_dynamicAccesses_;
      return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
    }
    function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "cache":
          case "unstable-cache":
            return;
          case "private-cache":
            return;
          case "prerender-legacy":
          case "prerender-ppr":
          case "request":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      if (store.forceDynamic || store.forceStatic)
        return;
      if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-ppr":
            return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
          case "prerender-legacy":
            workUnitStore.revalidate = 0;
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: false,
              configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
          case "request":
            if (true) {
              workUnitStore.usedDynamic = true;
            }
            break;
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
    }
    function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
      const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
      });
      prerenderStore.revalidate = 0;
      store.dynamicUsageDescription = expression;
      store.dynamicUsageStack = err.stack;
      throw err;
    }
    function trackDynamicDataInDynamicRender(workUnitStore) {
      switch (workUnitStore.type) {
        case "cache":
        case "unstable-cache":
          return;
        case "private-cache":
          return;
        case "prerender":
        case "prerender-runtime":
        case "prerender-legacy":
        case "prerender-ppr":
        case "prerender-client":
        case "validation-client":
        case "generate-static-params":
          break;
        case "request":
          if (true) {
            workUnitStore.usedDynamic = true;
          }
          break;
        default:
          workUnitStore;
      }
    }
    function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
      const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
      const error = createPrerenderInterruptedError(reason);
      prerenderStore.controller.abort(error);
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking && dynamicTracking.syncDynamicErrorWithStack === null) {
        dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        queueMicrotask(() => {
          dynamicTracking.syncDynamicErrorWithStackPostMicrotask = true;
        });
      }
      abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    }
    function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
      (0, _dynamicrenderingutils.trackRuntimeDataAccessed)(prerenderStore);
      const prerenderSignal = prerenderStore.controller.signal;
      if (prerenderSignal.aborted === false) {
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
          if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
          }
        }
      }
      throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
    }
    function Postpone({ reason, route }) {
      const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      const dynamicTracking = prerenderStore && prerenderStore.type === "prerender-ppr" ? prerenderStore.dynamicTracking : null;
      postponeWithTracking(route, reason, dynamicTracking);
    }
    function postponeWithTracking(route, expression, dynamicTracking) {
      assertPostpone();
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
      _react.default.unstable_postpone(createPostponeReason(route, expression));
    }
    function createPostponeReason(route, expression) {
      return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function isDynamicPostpone(err) {
      if (typeof err === "object" && err !== null && typeof err.message === "string") {
        return isDynamicPostponeReason(err.message);
      }
      return false;
    }
    function isDynamicPostponeReason(reason) {
      return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (isDynamicPostponeReason(createPostponeReason("%%%", "^^^")) === false) {
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
      });
    }
    var NEXT_PRERENDER_INTERRUPTED = "NEXT_PRERENDER_INTERRUPTED";
    function createPrerenderInterruptedError(message) {
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = NEXT_PRERENDER_INTERRUPTED;
      return error;
    }
    function isPrerenderInterruptedError(error) {
      return typeof error === "object" && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && "name" in error && "message" in error && error instanceof Error;
    }
    function accessedDynamicData(dynamicAccesses) {
      return dynamicAccesses.length > 0;
    }
    function consumeDynamicAccess(serverDynamic, clientDynamic) {
      serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
      return serverDynamic.dynamicAccesses;
    }
    function formatDynamicAPIAccesses(dynamicAccesses) {
      return dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
        stack = stack.split("\n").slice(4).filter((line) => {
          if (line.includes("node_modules/next/")) {
            return false;
          }
          if (line.includes(" (<anonymous>)")) {
            return false;
          }
          if (line.includes(" (node:")) {
            return false;
          }
          return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:
${stack}`;
      });
    }
    function assertPostpone() {
      if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: false,
          configurable: true
        });
      }
    }
    function createRenderInBrowserAbortSignal() {
      const controller = new AbortController();
      controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
      }));
      return controller.signal;
    }
    function createHangingInputAbortSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
          const controller = new AbortController();
          if (workUnitStore.cacheSignal) {
            workUnitStore.cacheSignal.inputReady().then(() => {
              controller.abort();
            });
          } else {
            const stagedRendering = (0, _workunitasyncstorageexternal.getStagedRenderingController)(workUnitStore);
            if (stagedRendering && stagedRendering.finalStage !== null) {
              stagedRendering.waitForStage(stagedRendering.finalStage).then(() => (0, _scheduler.scheduleOnNextTick)(() => controller.abort()), noop);
            } else {
              (0, _scheduler.scheduleOnNextTick)(() => controller.abort());
            }
          }
          return controller.signal;
        case "prerender-client":
        case "validation-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "generate-static-params":
          return void 0;
        default:
          workUnitStore;
      }
    }
    function noop() {
    }
    function annotateDynamicAccess(expression, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function useDynamicRouteParams(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore && workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-client": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              _react.default.use((0, _dynamicrenderingutils.makeClientHookHangingPromise)(workUnitStore.renderSignal, new _dynamicrenderingutils.ClientHookDynamicError(workStore.route, expression)));
            }
            break;
          }
          case "prerender":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E795",
              enumerable: false,
              configurable: true
            });
          case "prerender-ppr": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
            }
            break;
          }
          case "validation-client": {
            break;
          }
          case "prerender-runtime":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E771",
              enumerable: false,
              configurable: true
            });
          case "cache":
          case "private-cache":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: false,
              configurable: true
            });
          case "generate-static-params":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called in \`generateStaticParams\`. Next.js should be preventing ${expression} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E1130",
              enumerable: false,
              configurable: true
            });
          case "prerender-legacy":
          case "request":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
    }
    function useDynamicSearchParams(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!workStore) {
        return;
      }
      if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
      }
      switch (workUnitStore.type) {
        case "validation-client":
          return;
        case "prerender-client": {
          _react.default.use((0, _dynamicrenderingutils.makeClientHookHangingPromise)(workUnitStore.renderSignal, new _dynamicrenderingutils.ClientHookDynamicError(workStore.route, expression)));
          break;
        }
        case "prerender-legacy":
        case "prerender-ppr": {
          if (workStore.forceStatic) {
            return;
          }
          throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
          });
        }
        case "prerender":
        case "prerender-runtime":
          throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E795",
            enumerable: false,
            configurable: true
          });
        case "cache":
        case "unstable-cache":
        case "private-cache":
          throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E745",
            enumerable: false,
            configurable: true
          });
        case "generate-static-params":
          throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called in \`generateStaticParams\`. Next.js should be preventing ${expression} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E1130",
            enumerable: false,
            configurable: true
          });
        case "request":
          return;
        default:
          workUnitStore;
      }
    }
    var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
    var bodyAndImplicitTags = "body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6";
    var hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
    var hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
    var hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
    var hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    var hasInstantValidationBoundaryRegex = new RegExp(`\\n\\s+at ${_boundaryconstants1.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
    var slotMarkerRegex = new RegExp(`\\n\\s+at ${_boundaryconstants1.INSTANT_SLOT_MARKER_PREFIX}(\\d+)${_boundaryconstants1.INSTANT_SLOT_MARKER_SUFFIX}[\\n\\s]`);
    function resolveInstantStack(componentStack, dynamicValidation) {
      const { slotStacks } = dynamicValidation;
      if (slotStacks.length > 1) {
        const match = slotMarkerRegex.exec(componentStack);
        if (match) {
          const slotIndex = parseInt(match[1], 10) + 1;
          const slotStack = slotStacks[slotIndex];
          if (slotStack != null) {
            return slotStack;
          }
        }
      }
      return slotStacks[0] ?? null;
    }
    function trackOutletSuspenseAboveBody(componentStack, dynamicValidation) {
      if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasSuspenseAboveBody = true;
      }
    }
    function trackAllowedDynamicAccess(dynamicReason, workStore, componentStack, dynamicValidation, clientDynamic) {
      const syncDynamicError = getPendingClientSyncDynamicError(clientDynamic);
      if (hasOutletRegex.test(componentStack)) {
        trackOutletSuspenseAboveBody(componentStack, dynamicValidation);
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (syncDynamicError) {
        dynamicValidation.dynamicErrors.push(syncDynamicError);
        return;
      }
      if ((0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(dynamicReason, componentStack, null));
        return;
      }
      const error = addErrorContext((0, _blockingroutemessages.createDynamicOrRuntimeBodyError)(workStore.route), componentStack, null);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
    var DynamicHoleKind = /* @__PURE__ */ function(DynamicHoleKind2) {
      DynamicHoleKind2[DynamicHoleKind2["Link"] = 1] = "Link";
      DynamicHoleKind2[DynamicHoleKind2["Runtime"] = 2] = "Runtime";
      DynamicHoleKind2[DynamicHoleKind2["Dynamic"] = 3] = "Dynamic";
      return DynamicHoleKind2;
    }({});
    function createInstantValidationState(slotStacks) {
      return {
        hasDynamicMetadata: false,
        hasAllowedClientDynamicAboveBoundary: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: [],
        validationPreventingErrors: [],
        thrownErrorsOutsideBoundary: [],
        slotStacks
      };
    }
    function trackDynamicHoleInNavigation(dynamicReason, workStore, componentStack, dynamicValidation, clientDynamic, kind, boundaryState) {
      const syncDynamicError = getPendingClientSyncDynamicError(clientDynamic);
      if (hasOutletRegex.test(componentStack)) {
        return;
      }
      const effectiveCreateInstantStack = resolveInstantStack(componentStack, dynamicValidation);
      if (hasMetadataRegex.test(componentStack)) {
        const error2 = addErrorContext(kind === 1 ? (0, _blockingroutemessages.createLinkMetadataError)(workStore.route) : kind === 2 ? (0, _blockingroutemessages.createRuntimeMetadataError)(workStore.route) : (0, _blockingroutemessages.createDynamicMetadataError)(workStore.route), componentStack, effectiveCreateInstantStack);
        dynamicValidation.dynamicMetadata = error2;
        return;
      }
      if (hasViewportRegex.test(componentStack)) {
        const error2 = addErrorContext(kind === 1 ? (0, _blockingroutemessages.createLinkViewportError)(workStore.route) : kind === 2 ? (0, _blockingroutemessages.createRuntimeViewportError)(workStore.route) : (0, _blockingroutemessages.createDynamicViewportError)(workStore.route), componentStack, effectiveCreateInstantStack);
        dynamicValidation.dynamicErrors.push(error2);
        return;
      }
      const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
      if (!boundaryLocation) {
        if ((0, _boundarytracking.allRequiredBoundariesRendered)(boundaryState)) {
          dynamicValidation.hasAllowedClientDynamicAboveBoundary = true;
          dynamicValidation.hasAllowedDynamic = true;
          return;
        } else {
          const message = `Route "${workStore.route}": Could not validate \`instant\` because a Client Component in a parent segment prevented the page from rendering.`;
          const error2 = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1331",
            enumerable: false,
            configurable: true
          }), componentStack, effectiveCreateInstantStack);
          dynamicValidation.validationPreventingErrors.push(error2);
          return;
        }
      } else {
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
          if (suspenseLocation.index < boundaryLocation.index) {
            dynamicValidation.hasAllowedDynamic = true;
            return;
          } else {
          }
        }
      }
      if (syncDynamicError) {
        if (effectiveCreateInstantStack !== null && syncDynamicError.cause === void 0) {
          syncDynamicError.cause = effectiveCreateInstantStack();
        }
        dynamicValidation.dynamicErrors.push(syncDynamicError);
        return;
      }
      if ((0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(dynamicReason, componentStack, effectiveCreateInstantStack));
        return;
      }
      const error = addErrorContext(kind === 1 ? (0, _blockingroutemessages.createLinkBodyErrorInNavigation)(workStore.route) : kind === 2 ? (0, _blockingroutemessages.createRuntimeBodyErrorInNavigation)(workStore.route) : (0, _blockingroutemessages.createDynamicBodyErrorInNavigation)(workStore.route), componentStack, effectiveCreateInstantStack);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
    function trackThrownErrorInNavigation(workStore, dynamicValidation, thrownValue, componentStack) {
      const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
      if (!boundaryLocation) {
        const error = addErrorContext(Object.defineProperty(new Error("An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.", {
          cause: thrownValue
        }), "__NEXT_ERROR_CODE", {
          value: "E1118",
          enumerable: false,
          configurable: true
        }), componentStack, null);
        dynamicValidation.thrownErrorsOutsideBoundary.push(error);
      } else {
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
          if (suspenseLocation.index < boundaryLocation.index) {
            return;
          } else {
          }
        }
        const message = `Route "${workStore.route}": Could not validate \`instant\` because an error prevented the target segment from rendering.`;
        const error = addErrorContext(
          Object.defineProperty(new Error(message, {
            cause: thrownValue
          }), "__NEXT_ERROR_CODE", {
            value: "E1338",
            enumerable: false,
            configurable: true
          }),
          componentStack,
          null
          // TODO(instant-validation-build): conflicting use of cause
        );
        dynamicValidation.validationPreventingErrors.push(error);
      }
    }
    function trackDynamicHoleInRuntimeShell(dynamicReason, workStore, componentStack, dynamicValidation, clientDynamic) {
      const syncDynamicError = getPendingClientSyncDynamicError(clientDynamic);
      if (hasOutletRegex.test(componentStack)) {
        trackOutletSuspenseAboveBody(componentStack, dynamicValidation);
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        const error2 = addErrorContext((0, _blockingroutemessages.createDynamicMetadataError)(workStore.route), componentStack, null);
        dynamicValidation.dynamicMetadata = error2;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        const error2 = addErrorContext((0, _blockingroutemessages.createDynamicViewportError)(workStore.route), componentStack, null);
        dynamicValidation.dynamicErrors.push(error2);
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (syncDynamicError) {
        dynamicValidation.dynamicErrors.push(syncDynamicError);
        return;
      }
      if ((0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(dynamicReason, componentStack, null));
        return;
      }
      const error = addErrorContext((0, _blockingroutemessages.createDynamicBodyError)(workStore.route), componentStack, null);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
    function trackDynamicHoleInStaticShell(dynamicReason, workStore, componentStack, dynamicValidation, clientDynamic) {
      const syncDynamicError = getPendingClientSyncDynamicError(clientDynamic);
      if (hasOutletRegex.test(componentStack)) {
        trackOutletSuspenseAboveBody(componentStack, dynamicValidation);
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        const error2 = addErrorContext((0, _blockingroutemessages.createRuntimeMetadataError)(workStore.route), componentStack, null);
        dynamicValidation.dynamicMetadata = error2;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        const error2 = addErrorContext((0, _blockingroutemessages.createRuntimeViewportError)(workStore.route), componentStack, null);
        dynamicValidation.dynamicErrors.push(error2);
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (syncDynamicError) {
        dynamicValidation.dynamicErrors.push(syncDynamicError);
        return;
      }
      if ((0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(dynamicReason, componentStack, null));
        return;
      }
      const error = addErrorContext((0, _blockingroutemessages.createRuntimeBodyError)(workStore.route), componentStack, null);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
    function addErrorContext(error, componentStack, createInstantStack) {
      const ownerStack = _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
      if (createInstantStack !== null) {
        error.cause = createInstantStack();
      }
      error.stack = error.name + ": " + error.message + (ownerStack || componentStack);
      return error;
    }
    var PreludeState = /* @__PURE__ */ function(PreludeState2) {
      PreludeState2[PreludeState2["Full"] = 0] = "Full";
      PreludeState2[PreludeState2["Empty"] = 1] = "Empty";
      PreludeState2[PreludeState2["Errored"] = 2] = "Errored";
      return PreludeState2;
    }({});
    function logDisallowedDynamicError(workStore, error) {
      console.error(error);
      (0, _blockingroutemessages.logBuildDebugHint)(workStore.route);
    }
    function throwIfSyncIOUsed(workStore, serverDynamic) {
      if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
      }
    }
    function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic, allowEmptyStaticShell) {
      throwIfSyncIOUsed(workStore, serverDynamic);
      if (prelude === 0 && dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
        console.error((0, _blockingroutemessages.createDynamicOrRuntimeMetadataError)(workStore.route).message);
        throw new _staticgenerationbailout.StaticGenBailoutError();
      }
      if (allowEmptyStaticShell || dynamicValidation.hasSuspenseAboveBody) {
        return;
      }
      if (prelude !== 0) {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          for (let i = 0; i < dynamicErrors.length; i++) {
            logDisallowedDynamicError(workStore, dynamicErrors[i]);
          }
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (dynamicValidation.hasDynamicViewport) {
          console.error((0, _blockingroutemessages.createDynamicOrRuntimeViewportError)(workStore.route).message);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
          console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      }
    }
    function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation, allowEmptyStaticShell) {
      if (prelude === 0 && dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
        return [
          dynamicValidation.dynamicMetadata
        ];
      }
      if (allowEmptyStaticShell || dynamicValidation.hasSuspenseAboveBody) {
        return [];
      }
      if (prelude !== 0) {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          return dynamicErrors;
        }
        if (prelude === 1) {
          return [
            Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
              value: "E936",
              enumerable: false,
              configurable: true
            })
          ];
        }
      }
      return [];
    }
    function getNavigationDisallowedDynamicReasons(workStore, prelude, dynamicValidation, validationSampleTracking, boundaryState, devRenderDidError) {
      if (validationSampleTracking) {
        const { missingSampleErrors } = validationSampleTracking;
        if (missingSampleErrors.length > 0) {
          return missingSampleErrors;
        }
      }
      const { validationPreventingErrors } = dynamicValidation;
      if (validationPreventingErrors.length > 0) {
        if (process.env.__NEXT_DEV_SERVER && devRenderDidError) {
          return [];
        }
        return validationPreventingErrors;
      }
      if (prelude !== 0) {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          return dynamicErrors;
        }
        if (prelude === 1 && !dynamicValidation.hasAllowedClientDynamicAboveBoundary && (0, _boundarytracking.allRequiredBoundariesRendered)(boundaryState)) {
          return Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
            value: "E1055",
            enumerable: false,
            configurable: true
          });
        }
      } else {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          return dynamicErrors;
        }
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicMetadata) {
          return [
            dynamicValidation.dynamicMetadata
          ];
        }
      }
      if (!(0, _boundarytracking.allRequiredBoundariesRendered)(boundaryState)) {
        const { thrownErrorsOutsideBoundary } = dynamicValidation;
        const rootInstantStack = dynamicValidation.slotStacks[0];
        if (thrownErrorsOutsideBoundary.length === 0) {
          const missingFiles = [];
          for (const [id, filePaths] of boundaryState.requiredIds) {
            if (!boundaryState.renderedIds.has(id)) {
              for (const filePath of filePaths) {
                let normalized = filePath.replace(/^\[project\][\\/]?/, "").replace(process.cwd() + "/", "").replace(process.cwd() + "\\", "");
                missingFiles.push(normalized);
              }
            }
          }
          missingFiles.sort();
          return (0, _instantmessages.createUnrenderedSegmentError)(workStore.route, missingFiles);
        } else if (process.env.__NEXT_DEV_SERVER && devRenderDidError) {
          return [];
        } else if (thrownErrorsOutsideBoundary.length === 1) {
          const message = `Route "${workStore.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to the following error.`;
          const error = rootInstantStack !== null ? rootInstantStack() : new Error();
          error.name = "Error";
          error.message = message;
          return new AggregateError([
            error,
            thrownErrorsOutsideBoundary[0]
          ]);
        } else {
          const message = `Route "${workStore.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`;
          const error = rootInstantStack !== null ? rootInstantStack() : new Error();
          error.name = "Error";
          error.message = message;
          return new AggregateError([
            error,
            ...thrownErrorsOutsideBoundary
          ]);
        }
      }
      return [];
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js
var require_create_deduped_by_callsite_server_error_logger = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
      enumerable: true,
      get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_wildcard(require_react());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache2 = _getRequireWildcardCache(nodeInterop);
      if (cache2 && cache2.has(obj)) {
        return cache2.get(obj);
      }
      var newObj = {
        __proto__: null
      };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache2) {
        cache2.set(obj, newObj);
      }
      return newObj;
    }
    var errorRef = {
      current: null
    };
    var cache = typeof _react.cache === "function" ? _react.cache : (fn) => fn;
    var logErrorOrWarn = process.env.__NEXT_CACHE_COMPONENTS ? console.error : console.warn;
    var flushCurrentErrorIfNew = cache(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars -- cache key
      (key) => {
        try {
          logErrorOrWarn(errorRef.current);
        } finally {
          errorRef.current = null;
        }
      }
    );
    function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
      return function logDedupedError(...args) {
        const message = getMessage(...args);
        if (true) {
          var _stack;
          const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split("\n");
          if (callStackFrames === void 0 || callStackFrames.length < 4) {
            logErrorOrWarn(message);
          } else {
            const key = callStackFrames[4];
            errorRef.current = message;
            flushCurrentErrorIfNew(key);
          }
        } else {
          logErrorOrWarn(message);
        }
      };
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/action-async-storage-instance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "actionAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return actionAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/action-async-storage.external.js
var require_action_async_storage_external = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/action-async-storage.external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return _actionasyncstorageinstance.actionAsyncStorageInstance;
      }
    });
    var _actionasyncstorageinstance = require_action_async_storage_instance();
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js
var require_after_task_async_storage_instance = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return afterTaskAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/after-task-async-storage.external.js
var require_after_task_async_storage_external = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/app-render/after-task-async-storage.external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "afterTaskAsyncStorage", {
      enumerable: true,
      get: function() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
      }
    });
    var _aftertaskasyncstorageinstance = require_after_task_async_storage_instance();
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/request/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/request/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      isRequestApiAllowedInCurrentPhase: function() {
        return isRequestApiAllowedInCurrentPhase;
      },
      throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
      },
      throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
      }
    });
    var _staticgenerationbailout = require_static_generation_bailout();
    var _actionasyncstorageexternal = require_action_async_storage_external();
    var _aftertaskasyncstorageexternal = require_after_task_async_storage_external();
    function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
      throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
      });
    }
    function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
      const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
      });
      Error.captureStackTrace(error, constructorOpt);
      workStore.invalidDynamicUsageError ?? (workStore.invalidDynamicUsageError = error);
      throw error;
    }
    function isRequestApiAllowedInCurrentPhase(workUnitStore) {
      switch (workUnitStore.phase) {
        case "action":
        case "render": {
          return true;
        }
        case "after": {
          const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
          if (actionStore && (actionStore.isAppRoute || actionStore.isAction)) {
            return true;
          }
          const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
          if (afterTaskStore) {
            return afterTaskStore.rootTaskSpawnPhase === "action";
          }
          return false;
        }
      }
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/request/cookies.js
var require_cookies3 = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/request/cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "cookies", {
      enumerable: true,
      get: function() {
        return cookies2;
      }
    });
    var _requestcookies = require_request_cookies();
    var _cookies = require_cookies2();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
    var _utils = require_utils();
    var _invarianterror = require_invariant_error();
    function cookies2() {
      const callingExpression = "cookies";
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore) {
        if (workUnitStore && !(0, _utils.isRequestApiAllowedInCurrentPhase)(workUnitStore)) {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside \`after()\` while rendering. This is not supported. If you need this data inside an \`after()\` callback, use \`cookies()\` outside of the callback. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E1381",
            enumerable: false,
            configurable: true
          });
        }
        if (workStore.forceStatic) {
          const underlyingCookies = createEmptyCookies();
          return makeUntrackedCookies(underlyingCookies);
        }
        if (workStore.dynamicShouldError) {
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E849",
            enumerable: false,
            configurable: true
          });
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "cache":
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E831",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, cookies2);
              (0, _dynamicrenderingutils.applyOwnerStack)(error);
              workStore.invalidDynamicUsageError ?? (workStore.invalidDynamicUsageError = error);
              throw error;
            case "unstable-cache":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E846",
                enumerable: false,
                configurable: true
              });
            case "generate-static-params":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
                value: "E1123",
                enumerable: false,
                configurable: true
              });
            case "prerender":
              return makeHangingCookies(workStore, workUnitStore);
            case "prerender-client":
            case "validation-client":
              const exportName = "`cookies`";
              throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E1037",
                enumerable: false,
                configurable: true
              });
            case "prerender-ppr":
              return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
            case "prerender-legacy":
              return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
            case "prerender-runtime": {
              const { stagedRendering } = workUnitStore;
              if (stagedRendering) {
                return stagedRendering.delayUntilStage(_dynamicrenderingutils.RENDER_STAGES_BY_DATA_KIND.sessionData, "cookies", workUnitStore.cookies);
              } else {
                return makeUntrackedCookies(workUnitStore.cookies);
              }
            }
            case "private-cache":
              return makeUntrackedCookies(workUnitStore.cookies);
            case "request":
              (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
              let underlyingCookies;
              if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(workUnitStore)) {
                underlyingCookies = workUnitStore.userspaceMutableCookies;
              } else {
                underlyingCookies = workUnitStore.cookies;
              }
              if (true) {
                return makeUntrackedCookiesWithDevWarnings(workUnitStore, underlyingCookies, workStore == null ? void 0 : workStore.route);
              } else if (workUnitStore.asyncApiPromises) {
                if (underlyingCookies === workUnitStore.mutableCookies) {
                  return workUnitStore.asyncApiPromises.mutableCookies;
                } else {
                  return workUnitStore.asyncApiPromises.cookies;
                }
              } else {
                return makeUntrackedCookies(underlyingCookies);
              }
            default:
              workUnitStore;
          }
        }
      }
      (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    function createEmptyCookies() {
      return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
    }
    var CachedCookies = /* @__PURE__ */ new WeakMap();
    function makeHangingCookies(workStore, prerenderStore) {
      const cachedPromise = CachedCookies.get(prerenderStore);
      if (cachedPromise) {
        return cachedPromise;
      }
      const promise = (0, _dynamicrenderingutils.makeRuntimeHangingPromise)(prerenderStore.renderSignal, workStore.route, "`cookies()`", prerenderStore);
      CachedCookies.set(prerenderStore, promise);
      return promise;
    }
    function makeUntrackedCookies(underlyingCookies) {
      const cachedCookies = CachedCookies.get(underlyingCookies);
      if (cachedCookies) {
        return cachedCookies;
      }
      const promise = Promise.resolve(underlyingCookies);
      CachedCookies.set(underlyingCookies, promise);
      return promise;
    }
    function makeUntrackedCookiesWithDevWarnings(requestStore, underlyingCookies, route) {
      if (requestStore.asyncApiPromises) {
        let promise2;
        if (underlyingCookies === requestStore.mutableCookies) {
          promise2 = requestStore.asyncApiPromises.mutableCookies;
        } else if (underlyingCookies === requestStore.cookies) {
          promise2 = requestStore.asyncApiPromises.cookies;
        } else {
          throw Object.defineProperty(new _invarianterror.InvariantError("Received an underlying cookies object that does not match either `cookies` or `mutableCookies`"), "__NEXT_ERROR_CODE", {
            value: "E890",
            enumerable: false,
            configurable: true
          });
        }
        return instrumentCookiesPromiseWithDevWarnings(promise2, route);
      }
      const cachedCookies = CachedCookies.get(underlyingCookies);
      if (cachedCookies) {
        return cachedCookies;
      }
      const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies, requestStore, _dynamicrenderingutils.RENDER_STAGES_BY_DATA_KIND.sessionData);
      const proxiedPromise = instrumentCookiesPromiseWithDevWarnings(promise, route);
      CachedCookies.set(underlyingCookies, proxiedPromise);
      return proxiedPromise;
    }
    var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
    function instrumentCookiesPromiseWithDevWarnings(promise, route) {
      Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        size: replaceableWarningDescriptor(promise, "size", route),
        get: replaceableWarningDescriptor(promise, "get", route),
        getAll: replaceableWarningDescriptor(promise, "getAll", route),
        has: replaceableWarningDescriptor(promise, "has", route),
        set: replaceableWarningDescriptor(promise, "set", route),
        delete: replaceableWarningDescriptor(promise, "delete", route),
        clear: replaceableWarningDescriptor(promise, "clear", route),
        toString: replaceableWarningDescriptor(promise, "toString", route)
      });
      return promise;
    }
    function replaceableWarningDescriptor(target, prop, route) {
      return {
        enumerable: false,
        get() {
          warnForSyncAccess(route, `\`cookies().${prop}\``);
          return void 0;
        },
        set(value) {
          Object.defineProperty(target, prop, {
            value,
            writable: true,
            configurable: true
          });
        },
        configurable: true
      };
    }
    function replaceableWarningDescriptorForSymbolIterator(target, route) {
      return {
        enumerable: false,
        get() {
          warnForSyncAccess(route, "`...cookies()` or similar iteration");
          return void 0;
        },
        set(value) {
          Object.defineProperty(target, Symbol.iterator, {
            value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        },
        configurable: true
      };
    }
    function createCookiesAccessError(route, expression) {
      const prefix = route ? `Route "${route}" ` : "This route ";
      return Object.defineProperty(new Error(`${prefix}used ${expression}. \`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E830",
        enumerable: false,
        configurable: true
      });
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/headers.js
var require_headers = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      HeadersAdapter: function() {
        return HeadersAdapter;
      },
      ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
      }
    });
    var _reflect = require_reflect();
    var ReadonlyHeadersError = class _ReadonlyHeadersError extends Error {
      constructor() {
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
          value: "E1176",
          enumerable: false,
          configurable: true
        });
      }
      static callable() {
        throw new _ReadonlyHeadersError();
      }
    };
    var HeadersAdapter = class _HeadersAdapter extends Headers {
      constructor(headers) {
        super();
        this.headers = new Proxy(headers, {
          get(target, prop, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined")
              return;
            return _reflect.ReflectAdapter.get(target, original, receiver);
          },
          set(target, prop, value, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.set(target, prop, value, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
          },
          has(target, prop) {
            if (typeof prop === "symbol")
              return _reflect.ReflectAdapter.has(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined")
              return false;
            return _reflect.ReflectAdapter.has(target, original);
          },
          deleteProperty(target, prop) {
            if (typeof prop === "symbol")
              return _reflect.ReflectAdapter.deleteProperty(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined")
              return true;
            return _reflect.ReflectAdapter.deleteProperty(target, original);
          }
        });
      }
      /**
      * Seals a Headers instance to prevent modification by throwing an error when
      * any mutating method is called.
      */
      static seal(headers) {
        return new Proxy(headers, {
          get(target, prop, receiver) {
            switch (prop) {
              case "append":
              case "delete":
              case "set":
                return ReadonlyHeadersError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
      /**
      * @param headers
      * @returns A fresh object identity backed by the original value
      */
      static fresh(headers) {
        return new Proxy(headers, {
          get(target, prop, receiver) {
            return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
        });
      }
      /**
      * Merges a header value into a string. This stores multiple values as an
      * array, so we need to merge them into a string.
      *
      * @param value a header value
      * @returns a merged header value (a string)
      */
      merge(value) {
        if (Array.isArray(value))
          return value.join(", ");
        return value;
      }
      /**
      * Creates a Headers instance from a plain object or a Headers instance.
      *
      * @param headers a plain object or a Headers instance
      * @returns a headers instance
      */
      static from(headers) {
        if (headers instanceof Headers)
          return headers;
        return new _HeadersAdapter(headers);
      }
      append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
          this.headers[name] = [
            existing,
            value
          ];
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          this.headers[name] = value;
        }
      }
      delete(name) {
        delete this.headers[name];
      }
      get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined")
          return this.merge(value);
        return null;
      }
      has(name) {
        return typeof this.headers[name] !== "undefined";
      }
      set(name, value) {
        this.headers[name] = value;
      }
      forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()) {
          callbackfn.call(thisArg, value, name, this);
        }
      }
      *entries() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          const value = this.get(name);
          yield [
            name,
            value
          ];
        }
      }
      *keys() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          yield name;
        }
      }
      *values() {
        for (const key of Object.keys(this.headers)) {
          const value = this.get(key);
          yield value;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/request/headers.js
var require_headers2 = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/request/headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "headers", {
      enumerable: true,
      get: function() {
        return headers;
      }
    });
    var _headers = require_headers();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
    var _utils = require_utils();
    var _invarianterror = require_invariant_error();
    function headers() {
      const callingExpression = "headers";
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore) {
        if (workUnitStore && !(0, _utils.isRequestApiAllowedInCurrentPhase)(workUnitStore)) {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside \`after()\` while rendering. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E1378",
            enumerable: false,
            configurable: true
          });
        }
        if (workStore.forceStatic) {
          const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
          return makeUntrackedHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "cache": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E833",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, headers);
              (0, _dynamicrenderingutils.applyOwnerStack)(error);
              workStore.invalidDynamicUsageError ?? (workStore.invalidDynamicUsageError = error);
              throw error;
            }
            case "unstable-cache":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E838",
                enumerable: false,
                configurable: true
              });
            case "generate-static-params":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
                value: "E1134",
                enumerable: false,
                configurable: true
              });
            case "prerender":
            case "prerender-client":
            case "validation-client":
            case "private-cache":
            case "prerender-runtime":
            case "prerender-ppr":
            case "prerender-legacy":
            case "request":
              break;
            default:
              workUnitStore;
          }
        }
        if (workStore.dynamicShouldError) {
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E828",
            enumerable: false,
            configurable: true
          });
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "prerender":
              return makeHangingHeaders(workStore, workUnitStore);
            case "prerender-client":
            case "validation-client":
              const exportName = "`headers`";
              throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E1017",
                enumerable: false,
                configurable: true
              });
            case "prerender-ppr":
              return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
            case "prerender-legacy":
              return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
            case "prerender-runtime": {
              const { stagedRendering } = workUnitStore;
              if (stagedRendering) {
                return stagedRendering.delayUntilStage(_dynamicrenderingutils.RENDER_STAGES_BY_DATA_KIND.sessionData, "headers", workUnitStore.headers);
              } else {
                return makeUntrackedHeaders(workUnitStore.headers);
              }
            }
            case "private-cache":
              return makeUntrackedHeaders(workUnitStore.headers);
            case "request":
              (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
              if (true) {
                return makeUntrackedHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route, workUnitStore);
              } else if (workUnitStore.asyncApiPromises) {
                return workUnitStore.asyncApiPromises.headers;
              } else {
                return makeUntrackedHeaders(workUnitStore.headers);
              }
              break;
            default:
              workUnitStore;
          }
        }
      }
      (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    var CachedHeaders = /* @__PURE__ */ new WeakMap();
    function makeHangingHeaders(workStore, prerenderStore) {
      const cachedHeaders = CachedHeaders.get(prerenderStore);
      if (cachedHeaders) {
        return cachedHeaders;
      }
      const promise = (0, _dynamicrenderingutils.makeRuntimeHangingPromise)(prerenderStore.renderSignal, workStore.route, "`headers()`", prerenderStore);
      CachedHeaders.set(prerenderStore, promise);
      return promise;
    }
    function makeUntrackedHeaders(underlyingHeaders) {
      const cachedHeaders = CachedHeaders.get(underlyingHeaders);
      if (cachedHeaders) {
        return cachedHeaders;
      }
      const promise = Promise.resolve(underlyingHeaders);
      CachedHeaders.set(underlyingHeaders, promise);
      return promise;
    }
    function makeUntrackedHeadersWithDevWarnings(underlyingHeaders, route, requestStore) {
      if (requestStore.asyncApiPromises) {
        return instrumentHeadersPromiseWithDevWarnings(requestStore.asyncApiPromises.headers, route);
      }
      const cachedHeaders = CachedHeaders.get(underlyingHeaders);
      if (cachedHeaders) {
        return cachedHeaders;
      }
      const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders, requestStore, _dynamicrenderingutils.RENDER_STAGES_BY_DATA_KIND.sessionData);
      const proxiedPromise = instrumentHeadersPromiseWithDevWarnings(promise, route);
      CachedHeaders.set(underlyingHeaders, proxiedPromise);
      return proxiedPromise;
    }
    var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
    function instrumentHeadersPromiseWithDevWarnings(promise, route) {
      Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        append: replaceableWarningDescriptor(promise, "append", route),
        delete: replaceableWarningDescriptor(promise, "delete", route),
        get: replaceableWarningDescriptor(promise, "get", route),
        has: replaceableWarningDescriptor(promise, "has", route),
        set: replaceableWarningDescriptor(promise, "set", route),
        getSetCookie: replaceableWarningDescriptor(promise, "getSetCookie", route),
        forEach: replaceableWarningDescriptor(promise, "forEach", route),
        keys: replaceableWarningDescriptor(promise, "keys", route),
        values: replaceableWarningDescriptor(promise, "values", route),
        entries: replaceableWarningDescriptor(promise, "entries", route)
      });
      return promise;
    }
    function replaceableWarningDescriptor(target, prop, route) {
      return {
        enumerable: false,
        get() {
          warnForSyncAccess(route, `\`headers().${prop}\``);
          return void 0;
        },
        set(value) {
          Object.defineProperty(target, prop, {
            value,
            writable: true,
            configurable: true
          });
        },
        configurable: true
      };
    }
    function replaceableWarningDescriptorForSymbolIterator(target, route) {
      return {
        enumerable: false,
        get() {
          warnForSyncAccess(route, "`...headers()` or similar iteration");
          return void 0;
        },
        set(value) {
          Object.defineProperty(target, Symbol.iterator, {
            value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        },
        configurable: true
      };
    }
    function createHeadersAccessError(route, expression) {
      const prefix = route ? `Route "${route}" ` : "This route ";
      return Object.defineProperty(new Error(`${prefix}used ${expression}. \`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E836",
        enumerable: false,
        configurable: true
      });
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/request/draft-mode.js
var require_draft_mode = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/request/draft-mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "draftMode", {
      enumerable: true,
      get: function() {
        return draftMode;
      }
    });
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _hooksservercontext = require_hooks_server_context();
    var _invarianterror = require_invariant_error();
    var _reflect = require_reflect();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    function draftMode() {
      const callingExpression = "draftMode";
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!workStore || !workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
      }
      switch (workUnitStore.type) {
        case "prerender-runtime": {
          const { stagedRendering } = workUnitStore;
          if (stagedRendering) {
            return stagedRendering.delayUntilStage(_dynamicrenderingutils.RENDER_STAGES_BY_DATA_KIND.sessionData, "draftMode", new DraftMode(workUnitStore.draftMode));
          } else {
            return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
          }
        }
        case "request":
          return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
        case "cache":
        case "private-cache":
        case "unstable-cache":
          const draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
          if (draftModeProvider) {
            return createOrGetCachedDraftMode(draftModeProvider, workStore);
          }
        case "prerender":
        case "prerender-ppr":
        case "prerender-legacy":
          return createOrGetCachedDraftMode(null, workStore);
        case "prerender-client":
        case "validation-client": {
          const exportName = "`draftMode`";
          throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E1046",
            enumerable: false,
            configurable: true
          });
        }
        case "generate-static-params":
          throw Object.defineProperty(new Error(`Route ${workStore.route} used \`${callingExpression}()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
            value: "E1132",
            enumerable: false,
            configurable: true
          });
        default:
          return workUnitStore;
      }
    }
    function createOrGetCachedDraftMode(draftModeProvider, workStore) {
      const cacheKey = draftModeProvider ?? NullDraftMode;
      const cachedDraftMode = CachedDraftModes.get(cacheKey);
      if (cachedDraftMode) {
        return cachedDraftMode;
      }
      if (!(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        return createDraftModeWithDevWarnings(draftModeProvider, route);
      } else {
        return Promise.resolve(new DraftMode(draftModeProvider));
      }
    }
    var NullDraftMode = {};
    var CachedDraftModes = /* @__PURE__ */ new WeakMap();
    function createDraftModeWithDevWarnings(underlyingProvider, route) {
      const instance = new DraftMode(underlyingProvider);
      const promise = Promise.resolve(instance);
      const proxiedPromise = new Proxy(promise, {
        get(target, prop, receiver) {
          switch (prop) {
            case "isEnabled":
              warnForSyncAccess(route, `\`draftMode().${prop}\``);
              break;
            case "enable":
            case "disable": {
              warnForSyncAccess(route, `\`draftMode().${prop}()\``);
              break;
            }
            default: {
            }
          }
          return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
      });
      return proxiedPromise;
    }
    var DraftMode = class {
      constructor(provider) {
        this._provider = provider;
      }
      get isEnabled() {
        if (this._provider !== null) {
          return this._provider.isEnabled;
        }
        return false;
      }
      enable() {
        trackDynamicDraftMode("draftMode().enable()", this.enable);
        if (this._provider !== null) {
          this._provider.enable();
        }
      }
      disable() {
        trackDynamicDraftMode("draftMode().disable()", this.disable);
        if (this._provider !== null) {
          this._provider.disable();
        }
      }
    };
    var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
    function createDraftModeAccessError(route, expression) {
      const prefix = route ? `Route "${route}" ` : "This route ";
      return Object.defineProperty(new Error(`${prefix}used ${expression}. \`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E835",
        enumerable: false,
        configurable: true
      });
    }
    function trackDynamicDraftMode(expression, constructorOpt) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore) {
        if ((workUnitStore == null ? void 0 : workUnitStore.phase) === "after") {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside \`after()\`. The enabled status of \`draftMode()\` can be read inside \`after()\` but you cannot enable or disable \`draftMode()\`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E845",
            enumerable: false,
            configurable: true
          });
        }
        if (workStore.dynamicShouldError) {
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
          });
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "cache":
            case "private-cache": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside "use cache". The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E829",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, constructorOpt);
              (0, _dynamicrenderingutils.applyOwnerStack)(error);
              workStore.invalidDynamicUsageError ?? (workStore.invalidDynamicUsageError = error);
              throw error;
            }
            case "unstable-cache":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside a function cached with \`unstable_cache()\`. The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E844",
                enumerable: false,
                configurable: true
              });
            case "prerender":
            case "prerender-runtime": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
                value: "E126",
                enumerable: false,
                configurable: true
              });
              return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(workStore.route, expression, error, workUnitStore);
            }
            case "prerender-client":
            case "validation-client":
              const exportName = "`draftMode`";
              throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E1046",
                enumerable: false,
                configurable: true
              });
            case "prerender-ppr":
              return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, workUnitStore.dynamicTracking);
            case "prerender-legacy":
              workUnitStore.revalidate = 0;
              const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${workStore.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E558",
                enumerable: false,
                configurable: true
              });
              workStore.dynamicUsageDescription = expression;
              workStore.dynamicUsageStack = err.stack;
              throw err;
            case "request":
              (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
              break;
            case "generate-static-params":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used \`${expression}\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
                value: "E1121",
                enumerable: false,
                configurable: true
              });
            default:
              workUnitStore;
          }
        }
      }
    }
  }
});

// node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/headers.js
var require_headers3 = __commonJS({
  "node_modules/.pnpm/next@16.3.0_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/headers.js"(exports, module2) {
    "use strict";
    module2.exports.cookies = require_cookies3().cookies;
    module2.exports.headers = require_headers2().headers;
    module2.exports.draftMode = require_draft_mode().draftMode;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ALL_LANGUAGES: () => ALL_LANGUAGES,
  abbreviate: () => abbreviate,
  capitalize: () => capitalize,
  chunk: () => chunk,
  cn: () => cn,
  debounce: () => debounce,
  deepClone: () => deepClone,
  detectComponentsResponsive: () => detectComponentsResponsive,
  detectDeviceFromUA: () => detectDeviceFromUA,
  formatNumber: () => formatNumber,
  formatNumberCompact: () => formatNumberCompact,
  getAllLanguages: () => getAllLanguages,
  getCookie: () => getCookie,
  getCookieAppLang: () => getCookieAppLang,
  getCookieAppTheme: () => getCookieAppTheme,
  getCookieServer: () => getCookieServer,
  getInitial: () => getInitial,
  getLanguage: () => getLanguage,
  getLanguageCodes: () => getLanguageCodes,
  getLanguages: () => getLanguages,
  groupBy: () => groupBy,
  hasLanguage: () => hasLanguage,
  imageLoader: () => imageLoader,
  initializeLang: () => initializeLang,
  isBrowser: () => isBrowser,
  isValidEmail: () => isValidEmail,
  isValidPhone: () => isValidPhone,
  isValidUrl: () => isValidUrl,
  omit: () => omit,
  pick: () => pick,
  randomBoolean: () => randomBoolean,
  randomFloat: () => randomFloat,
  randomHex: () => randomHex,
  randomId: () => randomId,
  randomInt: () => randomInt,
  randomItem: () => randomItem,
  randomString: () => randomString,
  setCookie: () => setCookie,
  setGetDictionary: () => setGetDictionary,
  setupLanguages: () => setupLanguages,
  sleep: () => sleep,
  slugify: () => slugify,
  throttle: () => throttle,
  truncate: () => truncate,
  unique: () => unique,
  useLangStore: () => useLangStore,
  useTranslation: () => useTranslation
});
module.exports = __toCommonJS(src_exports);

// src/libraries/arrays/chunk.ts
function chunk(array, size) {
  if (!Array.isArray(array))
    throw new Error("First argument must be an array");
  if (size < 1)
    throw new Error("Size must be greater than 0");
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// src/libraries/arrays/unique.ts
function unique(array) {
  return [...new Set(array)];
}

// src/libraries/arrays/groupBy.ts
function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey])
      acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});
}

// src/libraries/strings/capitalize.ts
function capitalize(str) {
  if (!str)
    return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// src/libraries/strings/slugify.ts
function slugify(str) {
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}

// src/libraries/strings/truncate.ts
function truncate(str, length, suffix = "...") {
  if (str.length <= length)
    return str;
  return str.slice(0, length) + suffix;
}

// src/libraries/strings/abbreviate.ts
function abbreviate(input, threshold = 10, maxFallback = 12) {
  const s = String(input ?? "").trim();
  if (s.length <= threshold)
    return s;
  const hasSpace = /\s/.test(s);
  if (hasSpace) {
    const initials = s.split(/\s+/).filter(Boolean).map((word) => word[0]).join(" . ");
    return initials;
  }
  return s.length > maxFallback ? s.slice(0, maxFallback) : s;
}
function getInitial(input) {
  const s = String(input ?? "").trim();
  if (!s)
    return "";
  const cleanChars = s.replace(/[^\p{L}\p{N}]/gu, "");
  const result = Array.from(cleanChars).slice(0, 1).join("");
  return result.toUpperCase();
}

// src/libraries/objects/pick.ts
function pick(obj, keys) {
  const result = {};
  keys.forEach((key) => {
    if (key in obj)
      result[key] = obj[key];
  });
  return result;
}

// src/libraries/objects/omit.ts
function omit(obj, keys) {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
}

// src/libraries/objects/deepClone.ts
function deepClone(obj) {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (obj instanceof Date)
    return new Date(obj.getTime());
  if (obj instanceof Array)
    return obj.map((item) => deepClone(item));
  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

// src/libraries/validation/isValidEmail.ts
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// src/libraries/validation/isValidPhone.ts
function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

// src/libraries/validation/isValidUrl.ts
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// src/libraries/helpers/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/libraries/helpers/sleep.ts
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/libraries/helpers/debounce.ts
function debounce(func, timeout = 300) {
  let timer = null;
  return function(...args) {
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

// src/libraries/helpers/throttle.ts
function throttle(func, limit) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// src/libraries/helpers/detectComponentResponsive.ts
function detectComponentsResponsive(deviceType, MobileComponent, IpadComponent, DesktopComponent) {
  switch (deviceType) {
    case "mobile":
      return MobileComponent;
    case "ipad":
      return IpadComponent;
    case "desktop":
      return DesktopComponent;
    default:
      return "Unknown";
  }
}

// src/libraries/helpers/detectDeviceFromUA.ts
var detectDeviceFromUA = (userAgent) => {
  if (/iPad|Tablet/.test(userAgent))
    return "ipad";
  if (/Mobile|Android|iPhone/.test(userAgent))
    return "mobile";
  return "desktop";
};

// src/libraries/helpers/imageLoader.ts
var imageLoader = ({ src, width, quality }, options = {}) => {
  const { basePath = "" } = options;
  let processedSrc = src;
  if (processedSrc.startsWith("http://")) {
    processedSrc = processedSrc.replace("http://", "https://");
  }
  const isExternal = processedSrc.startsWith("https://");
  const finalSrc = isExternal ? processedSrc : `${basePath}${processedSrc}`;
  return `${finalSrc}?w=${width}&q=${quality || 75}`;
};

// src/libraries/helpers/languages.ts
var ALL_LANGUAGES = {
  en: {
    dir: "ltr",
    locale: "en_US",
    schemaLocale: "en-US",
    name: "English",
    flag: "\u{1F1FA}\u{1F1F8}",
    nativeName: "English"
  },
  fa: {
    dir: "rtl",
    locale: "fa_IR",
    schemaLocale: "fa-IR",
    name: "Persian",
    flag: "\u{1F1EE}\u{1F1F7}",
    nativeName: "\u0641\u0627\u0631\u0633\u06CC"
  },
  ar: {
    dir: "rtl",
    locale: "ar_SA",
    schemaLocale: "ar-SA",
    name: "Arabic",
    flag: "\u{1F1F8}\u{1F1E6}",
    nativeName: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  zh: {
    dir: "ltr",
    locale: "zh_CN",
    schemaLocale: "zh-CN",
    name: "Chinese",
    flag: "\u{1F1E8}\u{1F1F3}",
    nativeName: "\u4E2D\u6587"
  },
  fr: {
    dir: "ltr",
    locale: "fr_FR",
    schemaLocale: "fr-FR",
    name: "French",
    flag: "\u{1F1EB}\u{1F1F7}",
    nativeName: "Fran\xE7ais"
  },
  ru: {
    dir: "ltr",
    locale: "ru_RU",
    schemaLocale: "ru-RU",
    name: "Russian",
    flag: "\u{1F1F7}\u{1F1FA}",
    nativeName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  es: {
    dir: "ltr",
    locale: "es_ES",
    schemaLocale: "es-ES",
    name: "Spanish",
    flag: "\u{1F1EA}\u{1F1F8}",
    nativeName: "Espa\xF1ol"
  },
  de: {
    dir: "ltr",
    locale: "de_DE",
    schemaLocale: "de-DE",
    name: "German",
    flag: "\u{1F1E9}\u{1F1EA}",
    nativeName: "Deutsch"
  },
  it: {
    dir: "ltr",
    locale: "it_IT",
    schemaLocale: "it-IT",
    name: "Italian",
    flag: "\u{1F1EE}\u{1F1F9}",
    nativeName: "Italiano"
  },
  pt: {
    dir: "ltr",
    locale: "pt_PT",
    schemaLocale: "pt-PT",
    name: "Portuguese",
    flag: "\u{1F1F5}\u{1F1F9}",
    nativeName: "Portugu\xEAs"
  },
  hi: {
    dir: "ltr",
    locale: "hi_IN",
    schemaLocale: "hi-IN",
    name: "Hindi",
    flag: "\u{1F1EE}\u{1F1F3}",
    nativeName: "\u0939\u093F\u0928\u094D\u0926\u0940"
  },
  ja: {
    dir: "ltr",
    locale: "ja_JP",
    schemaLocale: "ja-JP",
    name: "Japanese",
    flag: "\u{1F1EF}\u{1F1F5}",
    nativeName: "\u65E5\u672C\u8A9E"
  },
  ko: {
    dir: "ltr",
    locale: "ko_KR",
    schemaLocale: "ko-KR",
    name: "Korean",
    flag: "\u{1F1F0}\u{1F1F7}",
    nativeName: "\uD55C\uAD6D\uC5B4"
  },
  tr: {
    dir: "ltr",
    locale: "tr_TR",
    schemaLocale: "tr-TR",
    name: "Turkish",
    flag: "\u{1F1F9}\u{1F1F7}",
    nativeName: "T\xFCrk\xE7e"
  },
  ur: {
    dir: "rtl",
    locale: "ur_PK",
    schemaLocale: "ur-PK",
    name: "Urdu",
    flag: "\u{1F1F5}\u{1F1F0}",
    nativeName: "\u0627\u0631\u062F\u0648"
  },
  id: {
    dir: "ltr",
    locale: "id_ID",
    schemaLocale: "id-ID",
    name: "Indonesian",
    flag: "\u{1F1EE}\u{1F1E9}",
    nativeName: "Bahasa Indonesia"
  },
  ms: {
    dir: "ltr",
    locale: "ms_MY",
    schemaLocale: "ms-MY",
    name: "Malay",
    flag: "\u{1F1F2}\u{1F1FE}",
    nativeName: "Bahasa Melayu"
  },
  pl: {
    dir: "ltr",
    locale: "pl_PL",
    schemaLocale: "pl-PL",
    name: "Polish",
    flag: "\u{1F1F5}\u{1F1F1}",
    nativeName: "Polski"
  },
  uk: {
    dir: "ltr",
    locale: "uk_UA",
    schemaLocale: "uk-UA",
    name: "Ukrainian",
    flag: "\u{1F1FA}\u{1F1E6}",
    nativeName: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
  },
  ro: {
    dir: "ltr",
    locale: "ro_RO",
    schemaLocale: "ro-RO",
    name: "Romanian",
    flag: "\u{1F1F7}\u{1F1F4}",
    nativeName: "Rom\xE2n\u0103"
  },
  nl: {
    dir: "ltr",
    locale: "nl_NL",
    schemaLocale: "nl-NL",
    name: "Dutch",
    flag: "\u{1F1F3}\u{1F1F1}",
    nativeName: "Nederlands"
  },
  sv: {
    dir: "ltr",
    locale: "sv_SE",
    schemaLocale: "sv-SE",
    name: "Swedish",
    flag: "\u{1F1F8}\u{1F1EA}",
    nativeName: "Svenska"
  },
  no: {
    dir: "ltr",
    locale: "no_NO",
    schemaLocale: "no-NO",
    name: "Norwegian",
    flag: "\u{1F1F3}\u{1F1F4}",
    nativeName: "Norsk"
  },
  da: {
    dir: "ltr",
    locale: "da_DK",
    schemaLocale: "da-DK",
    name: "Danish",
    flag: "\u{1F1E9}\u{1F1F0}",
    nativeName: "Dansk"
  },
  fi: {
    dir: "ltr",
    locale: "fi_FI",
    schemaLocale: "fi-FI",
    name: "Finnish",
    flag: "\u{1F1EB}\u{1F1EE}",
    nativeName: "Suomi"
  },
  el: {
    dir: "ltr",
    locale: "el_GR",
    schemaLocale: "el-GR",
    name: "Greek",
    flag: "\u{1F1EC}\u{1F1F7}",
    nativeName: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
  },
  hu: {
    dir: "ltr",
    locale: "hu_HU",
    schemaLocale: "hu-HU",
    name: "Hungarian",
    flag: "\u{1F1ED}\u{1F1FA}",
    nativeName: "Magyar"
  },
  cs: {
    dir: "ltr",
    locale: "cs_CZ",
    schemaLocale: "cs-CZ",
    name: "Czech",
    flag: "\u{1F1E8}\u{1F1FF}",
    nativeName: "\u010Ce\u0161tina"
  },
  he: {
    dir: "rtl",
    locale: "he_IL",
    schemaLocale: "he-IL",
    name: "Hebrew",
    flag: "\u{1F1EE}\u{1F1F1}",
    nativeName: "\u05E2\u05D1\u05E8\u05D9\u05EA"
  },
  th: {
    dir: "ltr",
    locale: "th_TH",
    schemaLocale: "th-TH",
    name: "Thai",
    flag: "\u{1F1F9}\u{1F1ED}",
    nativeName: "\u0E44\u0E17\u0E22"
  },
  vi: {
    dir: "ltr",
    locale: "vi_VN",
    schemaLocale: "vi-VN",
    name: "Vietnamese",
    flag: "\u{1F1FB}\u{1F1F3}",
    nativeName: "Ti\u1EBFng Vi\u1EC7t"
  }
};
var activeLanguages = ALL_LANGUAGES;
var activeLangCodes = Object.keys(ALL_LANGUAGES);
function setupLanguages(langs) {
  if (!langs || langs.length === 0) {
    throw new Error("At least one language must be provided");
  }
  const filtered = {};
  const codes = [];
  langs.forEach((lang) => {
    if (!ALL_LANGUAGES[lang]) {
      throw new Error(`Language "${lang}" not found. Available: ${Object.keys(ALL_LANGUAGES).join(", ")}`);
    }
    filtered[lang] = ALL_LANGUAGES[lang];
    codes.push(lang);
  });
  activeLanguages = filtered;
  activeLangCodes = codes;
  return {
    languages: activeLanguages,
    codes: activeLangCodes
  };
}
function getLanguages() {
  return activeLanguages;
}
function getLanguageCodes() {
  return activeLangCodes;
}
function getLanguage(lang) {
  if (!activeLanguages[lang]) {
    throw new Error(`Language "${lang}" is not active. Active: ${activeLangCodes.join(", ")}`);
  }
  return activeLanguages[lang];
}
function hasLanguage(lang) {
  return lang in activeLanguages;
}
function getAllLanguages() {
  return Object.entries(activeLanguages).map(([code, info]) => ({
    code,
    ...info
  }));
}

// src/libraries/helpers/cookies.ts
var import_headers = __toESM(require_headers3());
var isBrowser = () => {
  return typeof window !== "undefined" && typeof document !== "undefined";
};
var setCookie = (name, value, options) => {
  if (!isBrowser())
    return;
  const expires = /* @__PURE__ */ new Date();
  if (options?.minutes) {
    expires.setTime(expires.getTime() + options.minutes * 60 * 1e3);
  } else if (options?.days) {
    expires.setDate(expires.getDate() + options.days);
  } else {
    expires.setFullYear(expires.getFullYear() + 1);
  }
  document.cookie = `
    ${name}=${value};
    expires=${expires.toUTCString()};
    path=/;
    SameSite=Lax;
    ${options?.secure ? "Secure;" : ""}
  `.trim();
};
var getCookie = (name) => {
  if (!isBrowser())
    return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
};
var getCookieServer = async (name) => {
  try {
    const cookieStore = await (0, import_headers.cookies)();
    return cookieStore.get(name)?.value || null;
  } catch (error) {
    console.error("Error getting cookie from server:", error);
    return null;
  }
};
var getCookieAppLang = async (cookieStore) => {
  let lang = "en";
  let dir = "ltr";
  try {
    const appLangCookie = cookieStore.get("app_lang")?.value || null;
    if (appLangCookie) {
      const appLangData = JSON.parse(appLangCookie);
      lang = appLangData.state?.lang || "en";
      dir = appLangData.state?.dir || "ltr";
    }
  } catch (error) {
    console.error("Error in getCookieAppLang:", error);
  }
  return { lang, dir };
};
var getCookieAppTheme = async (cookieStore) => {
  let theme = "light";
  try {
    const cookieThemeRaw = cookieStore.get("app_theme")?.value || '{"state":{"theme":"light"}}';
    const parsed = JSON.parse(cookieThemeRaw);
    theme = parsed.state?.theme === "dark" ? "dark" : "light";
  } catch (error) {
    console.error("Error getting theme from cookie:", error);
  }
  return theme;
};

// src/stores/LangStore.ts
var import_zustand = require("zustand");
var useLangStore = (0, import_zustand.create)()((set, get) => ({
  lang: "en",
  dir: "ltr",
  isInitialized: false,
  refreshKey: 0,
  setLang: async (newLang) => {
    const langConfig = ALL_LANGUAGES[newLang];
    const dir = langConfig?.dir || "ltr";
    try {
      const response = await fetch("/api/set-lang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          lang: newLang,
          dir
        })
      });
      if (!response.ok) {
        throw new Error("Failed to set language");
      }
    } catch (error) {
      console.error("Error setting language:", error);
    }
    set({
      lang: newLang,
      dir,
      refreshKey: get().refreshKey + 1
    });
  },
  triggerRefresh: () => {
    set({ refreshKey: get().refreshKey + 1 });
  },
  initializeLang: async (langFromUrl) => {
    const { isInitialized } = get();
    if (isInitialized) {
      console.log("\u23ED\uFE0F Already initialized");
      return;
    }
    let finalLang = "en";
    let finalDir = "ltr";
    console.log("\u{1F50D} Initializing lang from URL:", langFromUrl);
    if (langFromUrl && langFromUrl in ALL_LANGUAGES) {
      finalLang = langFromUrl;
      finalDir = ALL_LANGUAGES[finalLang].dir;
    } else {
      try {
        const response = await fetch("/api/get-lang");
        if (response.ok) {
          const data = await response.json();
          if (data.lang && data.lang in ALL_LANGUAGES) {
            finalLang = data.lang;
            finalDir = data.dir || ALL_LANGUAGES[finalLang].dir;
            console.log(`\u2705 Lang from cookie via API: ${finalLang}`);
          }
        }
      } catch (error) {
        console.error("Error getting cookie:", error);
      }
    }
    set({
      lang: finalLang,
      dir: finalDir,
      isInitialized: true
    });
  }
}));
var initializeLang = async (langFromUrl) => {
  if (typeof window !== "undefined") {
    await useLangStore.getState().initializeLang(langFromUrl);
  }
};

// src/hooks/useTranslation.ts
var globalGetDictionary = null;
function setGetDictionary(fn) {
  globalGetDictionary = fn;
}
function useTranslation() {
  const { lang } = useLangStore();
  if (!globalGetDictionary) {
    throw new Error(
      "getDictionary not configured. Please call setGetDictionary() in your app."
    );
  }
  const translations = globalGetDictionary(lang);
  function t(key, fallback) {
    if (!translations) {
      console.warn("Translations not loaded for language:", lang);
      return fallback ?? key;
    }
    const keys = key.split(".");
    let value = translations;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return fallback ?? key;
      }
    }
    return typeof value === "string" ? value : fallback ?? key;
  }
  return { t, lang };
}

// src/libraries/numbers/formatNumber.ts
function formatNumber(number, char = ",", precision = null) {
  const numValue = typeof number === "string" ? parseFloat(number) : number;
  if (typeof numValue !== "number" || isNaN(numValue)) {
    return typeof number === "string" ? number : number.toString();
  }
  let str = precision !== null ? numValue.toFixed(precision) : numValue.toString();
  const [intPart, decimalPart] = str.split(".");
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, char);
  return decimalPart !== void 0 ? `${formattedInt}.${decimalPart}` : formattedInt;
}

// src/libraries/numbers/formatNumberCompact.ts
function formatNumberCompact(num, lang, format) {
  const locale = ALL_LANGUAGES[lang].schemaLocale;
  const number = Number(num);
  if (!Number.isFinite(number)) {
    return new Intl.NumberFormat(locale).format(0);
  }
  if (format !== "abbreviate") {
    return new Intl.NumberFormat(locale).format(number);
  }
  const formatCompactNumber = (value, suffix) => {
    const formatted = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1
    }).format(value);
    return `${formatted}${suffix}`;
  };
  if (number >= 1e9) {
    return formatCompactNumber(number / 1e9, "B");
  }
  if (number >= 1e6) {
    return formatCompactNumber(number / 1e6, "M");
  }
  if (number >= 1e3) {
    return formatCompactNumber(number / 1e3, "K");
  }
  return new Intl.NumberFormat(locale).format(number);
}

// src/libraries/numbers/random.ts
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(min, max, precision = 2) {
  const num = Math.random() * (max - min) + min;
  return parseFloat(num.toFixed(precision));
}
function randomBoolean() {
  return Math.random() < 0.5;
}
function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
function randomString(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
function randomHex(length = 8) {
  const chars = "0123456789abcdef";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
function randomId() {
  return `${Date.now()}_${randomString(6)}`;
}
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map