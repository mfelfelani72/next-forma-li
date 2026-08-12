/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-04 14:27:32
 * @Description: Translation hook for i18n support
 */
"use client";

import { useLangStore } from "../stores/LangStore";

export type Dictionary = Record<string, any>;

let globalGetDictionary: ((lang: string) => Dictionary) | null = null;

export function setGetDictionary(fn: (lang: string) => Dictionary) {
  globalGetDictionary = fn;
}

export function useTranslation() {
  const { lang } = useLangStore();

  if (!globalGetDictionary) {
    throw new Error(
      "getDictionary not configured. Please call setGetDictionary() in your app."
    );
  }

  const translations = globalGetDictionary(lang);

  function t(key: string, fallback?: string): string {
    if (!translations) {
      console.warn("Translations not loaded for language:", lang);
      return fallback ?? key;
    }

    const keys = key.split(".");
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return fallback ?? key;
      }
    }

    return typeof value === "string" ? value : fallback ?? key;
  }

  return { t, lang };
}