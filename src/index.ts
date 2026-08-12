// src/index.ts

// ============================================
// Arrays
// ============================================
export { chunk, unique, groupBy } from "./libraries/arrays";

// ============================================
// Strings
// ============================================
export { capitalize, slugify, truncate } from "./libraries/strings";

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
  ALL_LANGUAGES,
  setupLanguages,
  getLanguages,
  getLanguage,
  getLanguageCodes,
  hasLanguage,
  getAllLanguages,
  type Lang,
  type LanguageInfo,
} from "./libraries/helpers";

// ============================================
// Hooks
// ============================================
export { useTranslation, setGetDictionary } from "./hooks";
export type { Dictionary } from "./hooks";

// ============================================
// Stores
// ============================================
export { useLangStore, initializeLang } from './stores';
export type { LangState } from './stores';
