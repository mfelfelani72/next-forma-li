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
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
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

// src/stores/LangStore.ts
import { create } from "zustand";
var useLangStore = create()((set, get) => ({
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
export {
  ALL_LANGUAGES,
  capitalize,
  chunk,
  cn,
  debounce,
  deepClone,
  detectComponentsResponsive,
  detectDeviceFromUA,
  getAllLanguages,
  getLanguage,
  getLanguageCodes,
  getLanguages,
  groupBy,
  hasLanguage,
  initializeLang,
  isValidEmail,
  isValidPhone,
  isValidUrl,
  omit,
  pick,
  setGetDictionary,
  setupLanguages,
  sleep,
  slugify,
  throttle,
  truncate,
  unique,
  useLangStore,
  useTranslation
};
//# sourceMappingURL=index.mjs.map