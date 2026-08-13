// src/helpers/index.ts

// ============================================
// CSS Utilities
// ============================================
export { cn } from "./cn";

// ============================================
// Async Utilities
// ============================================
export { sleep } from "./sleep";
export { debounce } from "./debounce";
export { throttle } from "./throttle";
export { detectComponentsResponsive } from "./detectComponentResponsive";
export { detectDeviceFromUA } from "./detectDeviceFromUA";
export { imageLoader } from "./imageLoader";

// ============================================
// Language
// ============================================

export {
  ALL_LANGUAGES,
  setupLanguages,
  getLanguages,
  getLanguage,
  getLanguageCodes,
  hasLanguage,
  getAllLanguages,
  type Lang,
  type LanguageInfo,
} from "./languages";

// ============================================
// Cookie
// ============================================

export {
  isBrowser,
  setCookie,
  getCookie,
  getCookieServer,
  getCookieAppLang,
  getCookieAppTheme,
} from "./cookies";

// ============================================
// Meta
// ============================================

// ============================================
// Metadata
// ============================================
export {
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
  getPageConfig
} from './metadata';
