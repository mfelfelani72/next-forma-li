import { ComponentType } from 'react';
import * as zustand from 'zustand';

declare function chunk<T>(array: T[], size: number): T[][];

declare function unique<T>(array: T[]): T[];

declare function groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;

declare function capitalize(str: string): string;

declare function slugify(str: string): string;

declare function truncate(str: string, length: number, suffix?: string): string;

declare function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;

declare function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;

declare function deepClone<T>(obj: T): T;

declare function isValidEmail(email: string): boolean;

declare function isValidPhone(phone: string): boolean;

declare function isValidUrl(url: string): boolean;

declare function cn(...inputs: any): string;

declare function sleep(ms: number): Promise<void>;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-12-25 12:50:52
 * @Description: Debounce function to limit how often a function can be called
 */
type Procedure = (...args: any[]) => void;
declare function debounce<F extends Procedure>(func: F, timeout?: number): (...args: Parameters<F>) => void;

declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-18 14:06:46
 * @Description: Detect device type from cookies and return appropriate component
 */

declare function detectComponentsResponsive(deviceType: string | undefined, MobileComponent: ComponentType<any>, IpadComponent: ComponentType<any>, DesktopComponent: ComponentType<any>): ComponentType<any> | string;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-18 14:06:46
 * @Description: Detect device type from User-Agent string
 */
declare const detectDeviceFromUA: (userAgent: string) => "mobile" | "ipad" | "desktop";

declare const ALL_LANGUAGES: {
    readonly en: {
        readonly dir: "ltr";
        readonly locale: "en_US";
        readonly schemaLocale: "en-US";
        readonly name: "English";
        readonly flag: "🇺🇸";
        readonly nativeName: "English";
    };
    readonly fa: {
        readonly dir: "rtl";
        readonly locale: "fa_IR";
        readonly schemaLocale: "fa-IR";
        readonly name: "Persian";
        readonly flag: "🇮🇷";
        readonly nativeName: "فارسی";
    };
    readonly ar: {
        readonly dir: "rtl";
        readonly locale: "ar_SA";
        readonly schemaLocale: "ar-SA";
        readonly name: "Arabic";
        readonly flag: "🇸🇦";
        readonly nativeName: "العربية";
    };
    readonly zh: {
        readonly dir: "ltr";
        readonly locale: "zh_CN";
        readonly schemaLocale: "zh-CN";
        readonly name: "Chinese";
        readonly flag: "🇨🇳";
        readonly nativeName: "中文";
    };
    readonly fr: {
        readonly dir: "ltr";
        readonly locale: "fr_FR";
        readonly schemaLocale: "fr-FR";
        readonly name: "French";
        readonly flag: "🇫🇷";
        readonly nativeName: "Français";
    };
    readonly ru: {
        readonly dir: "ltr";
        readonly locale: "ru_RU";
        readonly schemaLocale: "ru-RU";
        readonly name: "Russian";
        readonly flag: "🇷🇺";
        readonly nativeName: "Русский";
    };
    readonly es: {
        readonly dir: "ltr";
        readonly locale: "es_ES";
        readonly schemaLocale: "es-ES";
        readonly name: "Spanish";
        readonly flag: "🇪🇸";
        readonly nativeName: "Español";
    };
    readonly de: {
        readonly dir: "ltr";
        readonly locale: "de_DE";
        readonly schemaLocale: "de-DE";
        readonly name: "German";
        readonly flag: "🇩🇪";
        readonly nativeName: "Deutsch";
    };
    readonly it: {
        readonly dir: "ltr";
        readonly locale: "it_IT";
        readonly schemaLocale: "it-IT";
        readonly name: "Italian";
        readonly flag: "🇮🇹";
        readonly nativeName: "Italiano";
    };
    readonly pt: {
        readonly dir: "ltr";
        readonly locale: "pt_PT";
        readonly schemaLocale: "pt-PT";
        readonly name: "Portuguese";
        readonly flag: "🇵🇹";
        readonly nativeName: "Português";
    };
    readonly hi: {
        readonly dir: "ltr";
        readonly locale: "hi_IN";
        readonly schemaLocale: "hi-IN";
        readonly name: "Hindi";
        readonly flag: "🇮🇳";
        readonly nativeName: "हिन्दी";
    };
    readonly ja: {
        readonly dir: "ltr";
        readonly locale: "ja_JP";
        readonly schemaLocale: "ja-JP";
        readonly name: "Japanese";
        readonly flag: "🇯🇵";
        readonly nativeName: "日本語";
    };
    readonly ko: {
        readonly dir: "ltr";
        readonly locale: "ko_KR";
        readonly schemaLocale: "ko-KR";
        readonly name: "Korean";
        readonly flag: "🇰🇷";
        readonly nativeName: "한국어";
    };
    readonly tr: {
        readonly dir: "ltr";
        readonly locale: "tr_TR";
        readonly schemaLocale: "tr-TR";
        readonly name: "Turkish";
        readonly flag: "🇹🇷";
        readonly nativeName: "Türkçe";
    };
    readonly ur: {
        readonly dir: "rtl";
        readonly locale: "ur_PK";
        readonly schemaLocale: "ur-PK";
        readonly name: "Urdu";
        readonly flag: "🇵🇰";
        readonly nativeName: "اردو";
    };
    readonly id: {
        readonly dir: "ltr";
        readonly locale: "id_ID";
        readonly schemaLocale: "id-ID";
        readonly name: "Indonesian";
        readonly flag: "🇮🇩";
        readonly nativeName: "Bahasa Indonesia";
    };
    readonly ms: {
        readonly dir: "ltr";
        readonly locale: "ms_MY";
        readonly schemaLocale: "ms-MY";
        readonly name: "Malay";
        readonly flag: "🇲🇾";
        readonly nativeName: "Bahasa Melayu";
    };
    readonly pl: {
        readonly dir: "ltr";
        readonly locale: "pl_PL";
        readonly schemaLocale: "pl-PL";
        readonly name: "Polish";
        readonly flag: "🇵🇱";
        readonly nativeName: "Polski";
    };
    readonly uk: {
        readonly dir: "ltr";
        readonly locale: "uk_UA";
        readonly schemaLocale: "uk-UA";
        readonly name: "Ukrainian";
        readonly flag: "🇺🇦";
        readonly nativeName: "Українська";
    };
    readonly ro: {
        readonly dir: "ltr";
        readonly locale: "ro_RO";
        readonly schemaLocale: "ro-RO";
        readonly name: "Romanian";
        readonly flag: "🇷🇴";
        readonly nativeName: "Română";
    };
    readonly nl: {
        readonly dir: "ltr";
        readonly locale: "nl_NL";
        readonly schemaLocale: "nl-NL";
        readonly name: "Dutch";
        readonly flag: "🇳🇱";
        readonly nativeName: "Nederlands";
    };
    readonly sv: {
        readonly dir: "ltr";
        readonly locale: "sv_SE";
        readonly schemaLocale: "sv-SE";
        readonly name: "Swedish";
        readonly flag: "🇸🇪";
        readonly nativeName: "Svenska";
    };
    readonly no: {
        readonly dir: "ltr";
        readonly locale: "no_NO";
        readonly schemaLocale: "no-NO";
        readonly name: "Norwegian";
        readonly flag: "🇳🇴";
        readonly nativeName: "Norsk";
    };
    readonly da: {
        readonly dir: "ltr";
        readonly locale: "da_DK";
        readonly schemaLocale: "da-DK";
        readonly name: "Danish";
        readonly flag: "🇩🇰";
        readonly nativeName: "Dansk";
    };
    readonly fi: {
        readonly dir: "ltr";
        readonly locale: "fi_FI";
        readonly schemaLocale: "fi-FI";
        readonly name: "Finnish";
        readonly flag: "🇫🇮";
        readonly nativeName: "Suomi";
    };
    readonly el: {
        readonly dir: "ltr";
        readonly locale: "el_GR";
        readonly schemaLocale: "el-GR";
        readonly name: "Greek";
        readonly flag: "🇬🇷";
        readonly nativeName: "Ελληνικά";
    };
    readonly hu: {
        readonly dir: "ltr";
        readonly locale: "hu_HU";
        readonly schemaLocale: "hu-HU";
        readonly name: "Hungarian";
        readonly flag: "🇭🇺";
        readonly nativeName: "Magyar";
    };
    readonly cs: {
        readonly dir: "ltr";
        readonly locale: "cs_CZ";
        readonly schemaLocale: "cs-CZ";
        readonly name: "Czech";
        readonly flag: "🇨🇿";
        readonly nativeName: "Čeština";
    };
    readonly he: {
        readonly dir: "rtl";
        readonly locale: "he_IL";
        readonly schemaLocale: "he-IL";
        readonly name: "Hebrew";
        readonly flag: "🇮🇱";
        readonly nativeName: "עברית";
    };
    readonly th: {
        readonly dir: "ltr";
        readonly locale: "th_TH";
        readonly schemaLocale: "th-TH";
        readonly name: "Thai";
        readonly flag: "🇹🇭";
        readonly nativeName: "ไทย";
    };
    readonly vi: {
        readonly dir: "ltr";
        readonly locale: "vi_VN";
        readonly schemaLocale: "vi-VN";
        readonly name: "Vietnamese";
        readonly flag: "🇻🇳";
        readonly nativeName: "Tiếng Việt";
    };
};
type Lang = keyof typeof ALL_LANGUAGES;
type LanguageInfo = (typeof ALL_LANGUAGES)[Lang];
declare function setupLanguages(langs: Lang[]): {
    languages: Record<"en" | "fa" | "ar" | "zh" | "fr" | "ru" | "es" | "de" | "it" | "pt" | "hi" | "ja" | "ko" | "tr" | "ur" | "id" | "ms" | "pl" | "uk" | "ro" | "nl" | "sv" | "no" | "da" | "fi" | "el" | "hu" | "cs" | "he" | "th" | "vi", LanguageInfo>;
    codes: ("en" | "fa" | "ar" | "zh" | "fr" | "ru" | "es" | "de" | "it" | "pt" | "hi" | "ja" | "ko" | "tr" | "ur" | "id" | "ms" | "pl" | "uk" | "ro" | "nl" | "sv" | "no" | "da" | "fi" | "el" | "hu" | "cs" | "he" | "th" | "vi")[];
};
declare function getLanguages(): Record<"en" | "fa" | "ar" | "zh" | "fr" | "ru" | "es" | "de" | "it" | "pt" | "hi" | "ja" | "ko" | "tr" | "ur" | "id" | "ms" | "pl" | "uk" | "ro" | "nl" | "sv" | "no" | "da" | "fi" | "el" | "hu" | "cs" | "he" | "th" | "vi", LanguageInfo>;
declare function getLanguageCodes(): Lang[];
declare function getLanguage<T extends Lang>(lang: T): LanguageInfo;
declare function hasLanguage(lang: string): lang is Lang;
declare function getAllLanguages(): ({
    dir: "ltr";
    locale: "en_US";
    schemaLocale: "en-US";
    name: "English";
    flag: "🇺🇸";
    nativeName: "English";
    code: string;
} | {
    dir: "rtl";
    locale: "fa_IR";
    schemaLocale: "fa-IR";
    name: "Persian";
    flag: "🇮🇷";
    nativeName: "فارسی";
    code: string;
} | {
    dir: "rtl";
    locale: "ar_SA";
    schemaLocale: "ar-SA";
    name: "Arabic";
    flag: "🇸🇦";
    nativeName: "العربية";
    code: string;
} | {
    dir: "ltr";
    locale: "zh_CN";
    schemaLocale: "zh-CN";
    name: "Chinese";
    flag: "🇨🇳";
    nativeName: "中文";
    code: string;
} | {
    dir: "ltr";
    locale: "fr_FR";
    schemaLocale: "fr-FR";
    name: "French";
    flag: "🇫🇷";
    nativeName: "Français";
    code: string;
} | {
    dir: "ltr";
    locale: "ru_RU";
    schemaLocale: "ru-RU";
    name: "Russian";
    flag: "🇷🇺";
    nativeName: "Русский";
    code: string;
} | {
    dir: "ltr";
    locale: "es_ES";
    schemaLocale: "es-ES";
    name: "Spanish";
    flag: "🇪🇸";
    nativeName: "Español";
    code: string;
} | {
    dir: "ltr";
    locale: "de_DE";
    schemaLocale: "de-DE";
    name: "German";
    flag: "🇩🇪";
    nativeName: "Deutsch";
    code: string;
} | {
    dir: "ltr";
    locale: "it_IT";
    schemaLocale: "it-IT";
    name: "Italian";
    flag: "🇮🇹";
    nativeName: "Italiano";
    code: string;
} | {
    dir: "ltr";
    locale: "pt_PT";
    schemaLocale: "pt-PT";
    name: "Portuguese";
    flag: "🇵🇹";
    nativeName: "Português";
    code: string;
} | {
    dir: "ltr";
    locale: "hi_IN";
    schemaLocale: "hi-IN";
    name: "Hindi";
    flag: "🇮🇳";
    nativeName: "हिन्दी";
    code: string;
} | {
    dir: "ltr";
    locale: "ja_JP";
    schemaLocale: "ja-JP";
    name: "Japanese";
    flag: "🇯🇵";
    nativeName: "日本語";
    code: string;
} | {
    dir: "ltr";
    locale: "ko_KR";
    schemaLocale: "ko-KR";
    name: "Korean";
    flag: "🇰🇷";
    nativeName: "한국어";
    code: string;
} | {
    dir: "ltr";
    locale: "tr_TR";
    schemaLocale: "tr-TR";
    name: "Turkish";
    flag: "🇹🇷";
    nativeName: "Türkçe";
    code: string;
} | {
    dir: "rtl";
    locale: "ur_PK";
    schemaLocale: "ur-PK";
    name: "Urdu";
    flag: "🇵🇰";
    nativeName: "اردو";
    code: string;
} | {
    dir: "ltr";
    locale: "id_ID";
    schemaLocale: "id-ID";
    name: "Indonesian";
    flag: "🇮🇩";
    nativeName: "Bahasa Indonesia";
    code: string;
} | {
    dir: "ltr";
    locale: "ms_MY";
    schemaLocale: "ms-MY";
    name: "Malay";
    flag: "🇲🇾";
    nativeName: "Bahasa Melayu";
    code: string;
} | {
    dir: "ltr";
    locale: "pl_PL";
    schemaLocale: "pl-PL";
    name: "Polish";
    flag: "🇵🇱";
    nativeName: "Polski";
    code: string;
} | {
    dir: "ltr";
    locale: "uk_UA";
    schemaLocale: "uk-UA";
    name: "Ukrainian";
    flag: "🇺🇦";
    nativeName: "Українська";
    code: string;
} | {
    dir: "ltr";
    locale: "ro_RO";
    schemaLocale: "ro-RO";
    name: "Romanian";
    flag: "🇷🇴";
    nativeName: "Română";
    code: string;
} | {
    dir: "ltr";
    locale: "nl_NL";
    schemaLocale: "nl-NL";
    name: "Dutch";
    flag: "🇳🇱";
    nativeName: "Nederlands";
    code: string;
} | {
    dir: "ltr";
    locale: "sv_SE";
    schemaLocale: "sv-SE";
    name: "Swedish";
    flag: "🇸🇪";
    nativeName: "Svenska";
    code: string;
} | {
    dir: "ltr";
    locale: "no_NO";
    schemaLocale: "no-NO";
    name: "Norwegian";
    flag: "🇳🇴";
    nativeName: "Norsk";
    code: string;
} | {
    dir: "ltr";
    locale: "da_DK";
    schemaLocale: "da-DK";
    name: "Danish";
    flag: "🇩🇰";
    nativeName: "Dansk";
    code: string;
} | {
    dir: "ltr";
    locale: "fi_FI";
    schemaLocale: "fi-FI";
    name: "Finnish";
    flag: "🇫🇮";
    nativeName: "Suomi";
    code: string;
} | {
    dir: "ltr";
    locale: "el_GR";
    schemaLocale: "el-GR";
    name: "Greek";
    flag: "🇬🇷";
    nativeName: "Ελληνικά";
    code: string;
} | {
    dir: "ltr";
    locale: "hu_HU";
    schemaLocale: "hu-HU";
    name: "Hungarian";
    flag: "🇭🇺";
    nativeName: "Magyar";
    code: string;
} | {
    dir: "ltr";
    locale: "cs_CZ";
    schemaLocale: "cs-CZ";
    name: "Czech";
    flag: "🇨🇿";
    nativeName: "Čeština";
    code: string;
} | {
    dir: "rtl";
    locale: "he_IL";
    schemaLocale: "he-IL";
    name: "Hebrew";
    flag: "🇮🇱";
    nativeName: "עברית";
    code: string;
} | {
    dir: "ltr";
    locale: "th_TH";
    schemaLocale: "th-TH";
    name: "Thai";
    flag: "🇹🇭";
    nativeName: "ไทย";
    code: string;
} | {
    dir: "ltr";
    locale: "vi_VN";
    schemaLocale: "vi-VN";
    name: "Vietnamese";
    flag: "🇻🇳";
    nativeName: "Tiếng Việt";
    code: string;
})[];

type Dictionary = Record<string, any>;
declare function setGetDictionary(fn: (lang: string) => Dictionary): void;
declare function useTranslation(): {
    t: (key: string, fallback?: string) => string;
    lang: "en" | "fa" | "ar" | "zh" | "fr" | "ru" | "es" | "de" | "it" | "pt" | "hi" | "ja" | "ko" | "tr" | "ur" | "id" | "ms" | "pl" | "uk" | "ro" | "nl" | "sv" | "no" | "da" | "fi" | "el" | "hu" | "cs" | "he" | "th" | "vi";
};

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-12 09:03:23
 * @Description:
 */

interface LangState {
    lang: Lang;
    dir: "ltr" | "rtl";
    refreshKey: number;
    isInitialized: boolean;
    setLang: (newLang: Lang) => void;
    initializeLang: (langFromUrl?: string) => void;
    triggerRefresh?: () => void;
}

declare const useLangStore: zustand.UseBoundStore<zustand.StoreApi<LangState>>;
declare const initializeLang: (langFromUrl?: string) => Promise<void>;

export { ALL_LANGUAGES, type Dictionary, type Lang, type LangState, type LanguageInfo, capitalize, chunk, cn, debounce, deepClone, detectComponentsResponsive, detectDeviceFromUA, getAllLanguages, getLanguage, getLanguageCodes, getLanguages, groupBy, hasLanguage, initializeLang, isValidEmail, isValidPhone, isValidUrl, omit, pick, setGetDictionary, setupLanguages, sleep, slugify, throttle, truncate, unique, useLangStore, useTranslation };
