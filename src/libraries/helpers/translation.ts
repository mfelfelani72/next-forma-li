/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-18 09:36:46
 * @Description: Translation utilities for SSR
 */

import React from "react";
import { getGlobalDictionary, type Dictionary } from "./translationCore";

export function createTranslator(lang: string) {
  const globalGetDictionary = getGlobalDictionary();

  if (!globalGetDictionary) {
    throw new Error(
      "getDictionary not configured. Please call setGetDictionary() in your app."
    );
  }

  const translations = globalGetDictionary(lang);

  function t(key: string, fallback?: string) {
    if (!translations) {
      console.warn("Translations not loaded for language:", lang);
      return fallback ?? key;
    }

    const keys = key?.split(".");
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

export function simpleTrans(
  i18nKey: string,
  values: Record<string, string> = {},
  t: (key: string) => string
): string {
  let text = t(i18nKey);

  for (const [key, value] of Object.entries(values)) {
    text = text.replace(new RegExp(`{{${key}}}`, "g"), value);
  }

  return text;
}

export function trans(
  i18nKey: string,
  values: Record<string, string>,
  t: (key: string) => string,
  ...elements: React.ReactElement[]
): React.ReactNode {
  let text = t(i18nKey);

  for (const [key, value] of Object.entries(values)) {
    text = text.replace(new RegExp(`{{${key}}}`, "g"), value);
  }

  const parts = text.split(/(<\d+>.*?<\/\d+>)/g);
  const result: React.ReactNode[] = [];

  parts.forEach((part, index) => {
    const tagMatch = part.match(/^<(\d+)>(.*?)<\/\d+>$/);

    if (tagMatch) {
      const elementIndex = Number(tagMatch[1]);
      const content = tagMatch[2];
      const element = elements[elementIndex];

      if (React.isValidElement(element)) {
        result.push(
          React.cloneElement(
            element,
            {
              key: index,
            },
            content
          )
        );
      } else {
        result.push(content);
      }
    } else if (part) {
      result.push(React.createElement(React.Fragment, { key: index }, part));
    }
  });

  return result;
}