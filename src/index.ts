// src/index.ts

// ============================================
// Arrays
// ============================================
export { chunk, unique, groupBy } from "./libraries/arrays";

// ============================================
// Strings
// ============================================
export {
  capitalize,
  slugify,
  truncate,
  abbreviate,
  getInitial,
} from "./libraries/strings";

// ============================================
// Objects
// ============================================
export { pick, omit, deepClone } from "./libraries/objects";

// ============================================
// Validation
// ============================================
export { isValidEmail, isValidPhone, isValidUrl } from "./libraries/validation";

// ============================================
// Helpers
// ============================================
export {
  cn,
  sleep,
  debounce,
  throttle,
  detectComponentsResponsive,
  detectDeviceFromUA,
  imageLoader,
  ALL_LANGUAGES,
  setupLanguages,
  getLanguages,
  getLanguage,
  getLanguageCodes,
  hasLanguage,
  getAllLanguages,
  type Lang,
  type LanguageInfo,
  isBrowser,
  setCookie,
  getCookie,
  getCookieServer,
  getCookieAppLang,
  getCookieAppTheme,
  setupMetadata,
  createMetadata,
  generatePageMetadata,
  generateCanonicalUrl,
  generateAlternateLanguages,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  buildMetadataFromContent,
  generatePageTitle,
  combineKeywords,
  getPageConfig,
  getGlobalDictionary,
  createTranslator,
  simpleTrans,
  trans,
  type Dictionary,
} from "./libraries/helpers";

// ============================================
// Hooks
// ============================================
export { useTranslation, setGetDictionary, useDevice } from "./hooks";

// ============================================
// Stores
// ============================================
export { useLangStore, initializeLang } from "./stores";
export type { LangState } from "./stores";

// ============================================
// Numbers
// ============================================
export {
  formatNumber,
  formatNumberCompact,
  randomInt,
  randomFloat,
  randomBoolean,
  randomItem,
  randomString,
  randomHex,
  randomId,
} from "./libraries/numbers";

// ============================================
// Api
// ============================================
export { cns, usePostFetch } from "./libraries/api";

// ============================================
// Interfaces
// ============================================
export * from "./interfaces";
