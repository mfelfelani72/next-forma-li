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
import { cookies } from "next/headers";
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
    const cookieStore = await cookies();
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

// src/libraries/api/axiosClient.ts
import axios from "axios";
var isSSR = typeof window === "undefined";
var isProduction = false;
var baseUrlSSR = (process.env.NEXT_PUBLIC_API_URL ?? "") + "/";
var baseUrlCSR = isProduction && !isSSR ? (process.env.NEXT_PUBLIC_BASE_URL ?? "") + (process.env.NEXT_PUBLIC_BASE_PORT ?? "") + (process.env.NEXT_PUBLIC_BASE_PATH ?? "") : (process.env.NEXT_PUBLIC_BASE_URL ?? "") + (process.env.NEXT_PUBLIC_BASE_PORT ?? "");
var baseURL = isSSR ? baseUrlSSR : baseUrlCSR;
var axiosClient = axios.create({
  baseURL,
  headers: {
    "Accept-Version": 1,
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  },
  // withCredentials: isSSR && isProduction,
  // withXSRFToken: isSSR && isProduction,
  withCredentials: isProduction,
  withXSRFToken: isProduction
});
axiosClient.interceptors.request.use(async (config) => {
  try {
    let token = process.env.NEXT_PUBLIC_AUTHORIZATION;
    if (!isSSR) {
      const cookie = getCookie("app_key");
      if (cookie) {
        const appKey = JSON.parse(decodeURIComponent(cookie));
        token = appKey?.tk ?? token;
      }
    } else {
      try {
        const cookieStore = await getCookieServer("app_key");
        if (cookieStore) {
          const appKey = JSON.parse(decodeURIComponent(cookieStore));
          token = appKey?.tk ?? token;
        }
      } catch {
      }
    }
    if (token) {
      config.headers.Authorization = token;
    }
  } catch (error) {
    console.error("Axios token attach error:", error);
  }
  return config;
});
var axiosClient_default = axiosClient;

// src/libraries/api/cns.ts
var cns = async ({
  method = "post",
  endPoint,
  body,
  headers,
  route
}) => {
  try {
    let config;
    if (method === "post") {
      const res = await axiosClient_default.post(endPoint, body, config);
      return res.data;
    } else if (method === "get") {
      const res = await axiosClient_default.get(endPoint, config);
      return res.data;
    }
    throw new Error("Unsupported method: " + method);
  } catch (error) {
    console.error({
      message: `Connection to server failed, route: ${route || endPoint}`,
      error
    });
  }
};

// src/libraries/helpers/metadata.ts
var globalConfig = null;
var globalGetDictionary = null;
function getConfig() {
  if (globalConfig)
    return globalConfig;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost";
  const basePort = process.env.NEXT_PUBLIC_BASE_PORT || "";
  const SITE_URL = `${baseUrl}${basePort}`;
  const supportedLanguages = process.env.NEXT_PUBLIC_SUPPORTED_LANGUAGES || "en";
  const locales = supportedLanguages.split(",").map((lang) => lang.trim()).filter(Boolean);
  return {
    baseUrl: SITE_URL,
    siteName: process.env.NEXT_PUBLIC_LICENSE_NAME || "sky",
    locales,
    twitterSite: process.env.NEXT_PUBLIC_TWITTER_SITE,
    licenseName: process.env.NEXT_PUBLIC_LICENSE_NAME || "sky",
    frontUrl: process.env.NEXT_PUBLIC_FRONT_URL,
    isProduction: false
  };
}
function setupMetadata(config, getDictionary) {
  const baseUrl = config?.baseUrl || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost";
  const basePort = process.env.NEXT_PUBLIC_BASE_PORT || "";
  const SITE_URL = `${baseUrl}${basePort}`;
  const supportedLanguages = config?.locales?.length ? config.locales : (process.env.NEXT_PUBLIC_SUPPORTED_LANGUAGES || "en").split(",").map((lang) => lang.trim()).filter(Boolean);
  globalConfig = {
    baseUrl: SITE_URL,
    siteName: config?.siteName || process.env.NEXT_PUBLIC_LICENSE_NAME || "sky",
    locales: supportedLanguages,
    twitterSite: config?.twitterSite || process.env.NEXT_PUBLIC_TWITTER_SITE,
    licenseName: config?.licenseName || process.env.NEXT_PUBLIC_LICENSE_NAME || "sky",
    frontUrl: config?.frontUrl || process.env.NEXT_PUBLIC_FRONT_URL,
    isProduction: config?.isProduction ?? false
  };
  if (getDictionary) {
    globalGetDictionary = getDictionary;
  }
}
var PAGE_TYPE_CONFIG = {
  news: { ogType: "article", schemaType: "NewsArticle" },
  article: { ogType: "article", schemaType: "Article" },
  blog: { ogType: "article", schemaType: "BlogPosting" },
  tag: { ogType: "website", schemaType: "CollectionPage" },
  category: { ogType: "website", schemaType: "CollectionPage" },
  author: { ogType: "profile", schemaType: "Person" },
  product: { ogType: "website", schemaType: "Product" },
  video: { ogType: "video.other", schemaType: "VideoObject" },
  podcast: { ogType: "music.podcast", schemaType: "PodcastEpisode" },
  profile: { ogType: "profile", schemaType: "ProfilePage" },
  about: { ogType: "website", schemaType: "AboutPage" },
  contact: { ogType: "website", schemaType: "ContactPage" },
  home: { ogType: "website", schemaType: "WebPage" },
  landing: { ogType: "website", schemaType: "LandingPage" },
  error: { ogType: "website", schemaType: "WebPage" }
};
function getPageConfig(pageType) {
  if (!pageType || !(pageType in PAGE_TYPE_CONFIG)) {
    return { ogType: "article", schemaType: "Article" };
  }
  return PAGE_TYPE_CONFIG[pageType];
}
function generateCanonicalUrl(lang, path = "") {
  const config = getConfig();
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${config.baseUrl}/${lang}${cleanPath ? `/${cleanPath}` : ""}`;
}
function generateAlternateLanguages(path) {
  const config = getConfig();
  const languagesObj = {};
  config.locales.forEach((locale) => {
    languagesObj[locale] = generateCanonicalUrl(locale, path || "");
  });
  const defaultLocale = config.locales[0] || "en";
  languagesObj["x-default"] = generateCanonicalUrl(defaultLocale, path || "");
  return languagesObj;
}
function generatePageTitle(pageTitle, baseTitle) {
  return pageTitle === baseTitle ? baseTitle : `${pageTitle} | ${baseTitle}`;
}
function combineKeywords(baseKeywords = [], pageKeywords = []) {
  return [.../* @__PURE__ */ new Set([...baseKeywords, ...pageKeywords])];
}
function buildMetadataFromContent(data, lang, address) {
  const config = getConfig();
  const canonicalUrl = generateCanonicalUrl(lang, address || "");
  const imageUrl = data.image.startsWith("http") ? data.image : `${config.baseUrl}${data.image.startsWith("/") ? data.image : "/" + data.image}`;
  const pageConfig = getPageConfig(data.pageType);
  const ogType = pageConfig.ogType;
  return {
    applicationName: config.siteName,
    authors: data.author ? [{ name: data.author }] : [{ name: config.siteName }],
    creator: data.author || config.siteName,
    title: data.title,
    description: data.description,
    publisher: data.provider,
    openGraph: {
      title: data.title,
      description: data.description,
      url: canonicalUrl,
      siteName: config.siteName,
      type: ogType,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: data.title
        }
      ],
      locale: "en_US",
      publishedTime: data.datePublished,
      modifiedTime: data.dateModified,
      ...data.author && { authors: [data.author] }
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [imageUrl],
      ...data.author && { creator: data.author },
      ...data.twitterSite && { site: data.twitterSite },
      ...!data.twitterSite && config.twitterSite && { site: config.twitterSite }
    },
    robots: {
      ...data.robots || { index: true, follow: true },
      ...data.robots?.archive === false ? { archive: false } : {}
    },
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLanguages(address)
    },
    icons: {
      icon: `/${config.licenseName}/favicon.ico`,
      shortcut: `/${config.licenseName}/favicon.ico`,
      apple: `/${config.licenseName}/favicon.ico`
    },
    ...data.newsKeywords && data.newsKeywords.length > 0 && {
      keywords: data.newsKeywords.join(", ")
    }
  };
}
async function generatePageMetadata(lang = "en", pageKey, customMeta) {
  const config = getConfig();
  if (!globalGetDictionary) {
    throw new Error(
      "getDictionary not configured. Please call setupMetadata() in your app."
    );
  }
  const dict = await globalGetDictionary(lang);
  const baseMeta = dict.meta;
  const pageMetaCandidate = pageKey ? dict[`meta_${pageKey}`] : null;
  const pageMeta = pageMetaCandidate || baseMeta;
  const finalMeta = customMeta ? { ...pageMeta, ...customMeta } : pageMeta;
  const pageTitle = generatePageTitle(finalMeta.title, baseMeta.title);
  const canonicalUrl = finalMeta.canonicalUrl || generateCanonicalUrl(lang, pageKey);
  return {
    title: pageTitle,
    description: finalMeta.description,
    keywords: combineKeywords(baseMeta.keywords, finalMeta.keywords).join(", "),
    publisher: finalMeta.publisher || baseMeta.publisher,
    applicationName: config.siteName,
    authors: [{ name: config.siteName }],
    creator: config.siteName,
    openGraph: {
      title: pageTitle,
      description: finalMeta.description,
      url: canonicalUrl,
      siteName: baseMeta.title,
      type: "website",
      images: [
        {
          url: config.baseUrl + baseMeta.openGraph?.images,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ],
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: finalMeta.description,
      images: [config.baseUrl + baseMeta.openGraph?.images],
      ...config.twitterSite && { site: config.twitterSite }
    },
    robots: finalMeta.robots || { index: true, follow: true },
    alternates: {
      canonical: generateCanonicalUrl(lang, pageKey),
      languages: generateAlternateLanguages(pageKey)
    },
    icons: {
      icon: `/${config.licenseName}/favicon.ico`,
      apple: `/${config.licenseName}/favicon.ico`
    }
  };
}
function generateWebsiteSchema(lang) {
  const config = getConfig();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.siteName,
    url: config.baseUrl,
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${config.baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}
function generateOrganizationSchema(lang) {
  const config = getConfig();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.siteName,
    url: config.baseUrl,
    logo: `${config.baseUrl}/images/logo/logo.png`,
    inLanguage: "en-US",
    sameAs: ["https://twitter.com/sky", "https://linkedin.com/company/sky"]
  };
}
function generateArticleSchema(lang, article) {
  const config = getConfig();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.authorName,
      ...article.authorUrl && { url: article.authorUrl }
    },
    publisher: {
      "@type": "Organization",
      name: config.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${config.baseUrl}/images/logo/logo.png`
      }
    },
    inLanguage: "en-US",
    ...article.originalSourceUrl && {
      citation: {
        "@type": "CreativeWork",
        url: article.originalSourceUrl
      },
      isBasedOn: {
        "@type": "CreativeWork",
        url: article.originalSourceUrl
      }
    }
  };
}
function generateBreadcrumbSchema(items) {
  const config = getConfig();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${config.baseUrl}${item.url}`
    }))
  };
}
async function fetchMetaJsonFromServer(slug, source, lang) {
  const config = getConfig();
  const resolvedSlug = typeof slug === "string" ? slug : slug.symbol;
  const host = config.isProduction ? config.frontUrl || config.baseUrl : config.baseUrl;
  try {
    const res = await cns({
      method: "post",
      endPoint: `${host}/api/meta/`,
      route: "/metadescription",
      body: {
        action: "fetchMeta",
        slug: resolvedSlug,
        source,
        lang
      }
    });
    if (!res?.success) {
      throw new Error(`Failed to fetch meta`);
    }
    return res.data;
  } catch (err) {
    console.error("[Meta] Fetch failed for slug:", resolvedSlug, err);
    return null;
  }
}
async function createMetadata(params, source, slugIndicator = -1, location, externalData) {
  const config = getConfig();
  if (!globalGetDictionary) {
    throw new Error(
      "getDictionary not configured. Please call setupMetadata() in your app."
    );
  }
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang ?? "en";
  const selected = lang;
  let slug = resolvedParams.slug;
  let address;
  if (Array.isArray(resolvedParams.slug) && location) {
    address = location + "/" + resolvedParams.slug[0] + "/" + resolvedParams.slug[1];
  } else if (typeof resolvedParams.slug === "string" && location) {
    address = location + "/" + resolvedParams.slug;
  }
  if (Array.isArray(slug) && slugIndicator !== -1) {
    slug = slug[slugIndicator];
  }
  if (!slug) {
    return generatePageMetadata(selected, source);
  }
  if (externalData) {
    try {
      console.debug(`[Meta] Using external data for ${source}/${slug}`);
      return buildMetadataFromContent(externalData, selected, address);
    } catch (error) {
      console.error(
        `[Meta] Error building metadata from external data:`,
        error
      );
    }
  }
  try {
    const metaJson = await fetchMetaJsonFromServer(slug, source, selected);
    if (!metaJson) {
      console.warn(`[Meta] Fallback to static for ${source} / ${slug}`);
      return generatePageMetadata(selected, source);
    }
    const canonicalUrl = generateCanonicalUrl(selected, address || "");
    return {
      ...metaJson,
      alternates: {
        canonical: canonicalUrl,
        languages: generateAlternateLanguages(address)
      },
      icons: {
        icon: `/${config.licenseName}/favicon.ico`,
        shortcut: `/${config.licenseName}/favicon.ico`,
        apple: `/${config.licenseName}/favicon.ico`
      }
    };
  } catch (error) {
    console.error(
      `[Meta] Critical error in createMetadata for ${source}:`,
      error
    );
    return generatePageMetadata(selected, source);
  }
}

// src/hooks/useDevice.ts
import { useState, useEffect, useMemo } from "react";
function useDevice() {
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 1024;
  });
  const [screenHeight, setScreenHeight] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerHeight;
    }
    return 768;
  });
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window !== "undefined") {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    return false;
  });
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const deviceInfo = useMemo(() => {
    const orientation = screenWidth > screenHeight ? "landscape" : "portrait";
    let type;
    if (screenWidth < 540) {
      type = "mobile";
    } else if (screenWidth >= 540 && screenWidth < 992) {
      type = "ipad";
    } else {
      type = "desktop";
    }
    return {
      type,
      orientation,
      screenWidth,
      screenHeight,
      isTouchDevice,
      isMobile: type === "mobile",
      isIpad: type === "ipad",
      isDesktop: type === "desktop"
    };
  }, [screenWidth, screenHeight, isTouchDevice]);
  return deviceInfo;
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
var globalGetDictionary2 = null;
function setGetDictionary(fn) {
  globalGetDictionary2 = fn;
}
function useTranslation() {
  const { lang } = useLangStore();
  if (!globalGetDictionary2) {
    throw new Error(
      "getDictionary not configured. Please call setGetDictionary() in your app."
    );
  }
  const translations = globalGetDictionary2(lang);
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

// src/libraries/api/usePostFetch.ts
import { useMemo as useMemo2, useState as useState2, useRef } from "react";
import * as swr from "swr";
var useSWR = swr.default || swr;
var CacheAnalytics = class {
  constructor() {
    this.hits = 0;
    this.misses = 0;
    this.bg = 0;
  }
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
      hitRate: total ? (this.hits / total * 100).toFixed(1) + "%" : "0%",
      backgroundRefresh: this.bg
    };
  }
};
var analytics = new CacheAnalytics();
var IDBStore = class {
  constructor(name) {
    this.name = name;
    this.db = null;
  }
  async init() {
    if (this.db)
      return;
    this.db = await new Promise((resolve, reject) => {
      const req = indexedDB.open(this.name, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("cache")) {
          db.createObjectStore("cache", { keyPath: "key" });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  async get(key) {
    await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction("cache", "readonly");
      const req = tx.objectStore("cache").get(key);
      req.onsuccess = () => {
        const v = req.result;
        if (!v || Date.now() > v.expiry)
          return resolve(null);
        resolve(v.data);
      };
      req.onerror = () => resolve(null);
    });
  }
  async set(key, data, ttl) {
    await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction("cache", "readwrite");
      tx.objectStore("cache").put({
        key,
        data,
        expiry: Date.now() + ttl
      });
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  }
  async clear() {
    await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction("cache", "readwrite");
      tx.objectStore("cache").clear();
      tx.oncomplete = () => resolve();
    });
  }
  async getAllKeys() {
    await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction("cache", "readonly");
      const store = tx.objectStore("cache");
      const keys = [];
      const req = store.openCursor();
      req.onsuccess = (event) => {
        const cursor = event.target.result;
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
};
var SmartCache = class {
  constructor() {
    this.mem = /* @__PURE__ */ new Map();
    this.tabDB = new IDBStore("tab-cache");
    this.refreshDB = new IDBStore("refresh-cache");
    if (typeof window !== "undefined") {
      this.warmup();
    }
  }
  // Warmup: preload memory from IndexedDB on first load
  async warmup() {
    const tabKeys = await this.tabDB.getAllKeys();
    const refreshKeys = await this.refreshDB.getAllKeys();
    const keys = Array.from(/* @__PURE__ */ new Set([...tabKeys, ...refreshKeys]));
    await Promise.all(
      keys.map(async (key) => {
        const [refresh, tab] = await Promise.all([
          this.refreshDB.get(key),
          this.tabDB.get(key)
        ]);
        const data = refresh || tab;
        if (data)
          this.mem.set(key, { data, ts: Date.now() });
      })
    );
  }
  async get(key) {
    const mem = this.mem.get(key);
    if (mem && Date.now() - mem.ts < 3e4) {
      analytics.hit();
      return mem;
    }
    const [refresh, tab] = await Promise.all([
      this.refreshDB.get(key),
      this.tabDB.get(key)
    ]);
    const data = refresh || tab;
    if (data) {
      const obj = { data, ts: Date.now() };
      this.mem.set(key, obj);
      analytics.hit();
      return obj;
    }
    analytics.miss();
    return null;
  }
  async set(key, data) {
    const obj = { data, ts: Date.now() };
    this.mem.set(key, obj);
    this.tabDB.set(key, data, 1 * 1);
    this.refreshDB.set(key, data, 1 * 1);
  }
  async invalidate() {
    this.mem.clear();
    await Promise.all([this.tabDB.clear(), this.refreshDB.clear()]);
  }
  stats() {
    return analytics.stats();
  }
};
var cache = new SmartCache();
var makeKey = (p) => `${p.endPoint}|${p.route || ""}|${JSON.stringify(p.body || {})}`;
var usePostFetch = (params, config) => {
  const key = useMemo2(() => makeKey(params), [params]);
  const [loading, setLoading] = useState2(false);
  const revalidateLock = useRef(false);
  const mutateRef = useRef(null);
  const fetchAndCache = async (p = params) => {
    const res = await cns({
      method: "post",
      endPoint: p.endPoint,
      body: p.body,
      route: p.route
    });
    await cache.set(key, res);
    return res;
  };
  const revalidate = async (p = params) => {
    if (revalidateLock.current)
      return;
    revalidateLock.current = true;
    try {
      analytics.background();
      const fresh = await fetchAndCache(p);
      mutateRef.current?.(fresh, false);
    } finally {
      revalidateLock.current = false;
    }
  };
  const fetcher = async (overrideBody) => {
    const finalParams = {
      ...params,
      body: {
        ...params.body,
        ...overrideBody || {}
      }
    };
    setLoading(true);
    const res = await fetchAndCache(finalParams);
    setLoading(false);
    return res;
  };
  const { data, error, mutate, isValidating } = useSWR(key, fetcher, {
    ...config,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 1e4,
    isPaused: () => config?.manual === true
  });
  mutateRef.current = mutate;
  return {
    data,
    error,
    isLoading: loading || isValidating,
    mutate,
    fetcher,
    invalidateCache: () => cache.invalidate(),
    cacheStats: cache.stats()
  };
};
export {
  ALL_LANGUAGES,
  abbreviate,
  buildMetadataFromContent,
  capitalize,
  chunk,
  cn,
  cns,
  combineKeywords,
  createMetadata,
  debounce,
  deepClone,
  detectComponentsResponsive,
  detectDeviceFromUA,
  formatNumber,
  formatNumberCompact,
  generateAlternateLanguages,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateCanonicalUrl,
  generateOrganizationSchema,
  generatePageMetadata,
  generatePageTitle,
  generateWebsiteSchema,
  getAllLanguages,
  getCookie,
  getCookieAppLang,
  getCookieAppTheme,
  getCookieServer,
  getInitial,
  getLanguage,
  getLanguageCodes,
  getLanguages,
  getPageConfig,
  groupBy,
  hasLanguage,
  imageLoader,
  initializeLang,
  isBrowser,
  isValidEmail,
  isValidPhone,
  isValidUrl,
  omit,
  pick,
  randomBoolean,
  randomFloat,
  randomHex,
  randomId,
  randomInt,
  randomItem,
  randomString,
  setCookie,
  setGetDictionary,
  setupLanguages,
  setupMetadata,
  sleep,
  slugify,
  throttle,
  truncate,
  unique,
  useDevice,
  useLangStore,
  usePostFetch,
  useTranslation
};
//# sourceMappingURL=index.mjs.map