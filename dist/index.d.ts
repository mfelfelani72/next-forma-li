import React, { ComponentType, ReactNode } from 'react';
import { ImageLoaderProps } from 'next/image';
import { Metadata } from 'next';
import * as zustand from 'zustand';
import * as swr from 'swr';

declare function chunk<T>(array: T[], size: number): T[][];

declare function unique<T>(array: T[]): T[];

declare function groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;

declare function capitalize(str: string): string;

declare function slugify(str: string): string;

declare function truncate(str: string, length: number, suffix?: string): string;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-11-02 06:07:10
 * @Description: Smart text abbreviation and initial extraction
 */
declare function abbreviate(input: unknown, threshold?: number, maxFallback?: number): string;
declare function getInitial(input: string): string;

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

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-11-02 06:07:10
 * @Description: Custom image loader for Next.js with configurable basePath
 */

type NextImageLoaderOptions = {
    basePath?: string;
};
declare const imageLoader: ({ src, width, quality }: ImageLoaderProps, options?: NextImageLoaderOptions) => string;

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

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-06 15:14:10
 * @Description: Cookie utilities for client and server
 */
declare const isBrowser: () => boolean;
declare const setCookie: (name: string, value: string, options?: {
    minutes?: number;
    days?: number;
    secure?: boolean;
}) => void;
declare const getCookie: (name: string) => string | null;
declare const getCookieServer: (name: string) => Promise<string | null>;
declare const getCookieAppLang: (cookieStore: any) => Promise<{
    lang: string;
    dir: string;
}>;
declare const getCookieAppTheme: (cookieStore: any) => Promise<"light" | "dark">;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-12 08:39:25
 * @Description:
 */
type ValidOgType = 'article' | 'website' | 'profile' | 'book' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
interface BaseMeta {
    title: string;
    description: string;
    keywords?: string[];
    publisher?: string;
    twitter?: TwitterMeta;
    openGraph?: OpenGraphMeta;
    robots?: {
        index?: boolean;
        follow?: boolean;
        archive?: boolean;
    };
}
interface PageMeta extends BaseMeta {
    canonicalUrl?: string;
    robots?: {
        index: boolean;
        follow: boolean;
        archive?: boolean;
    };
}
type OpenGraphMeta = {
    title: string;
    description: string;
    url?: string;
    locale?: string;
    siteName?: string;
    type?: string;
    images?: string;
};
type TwitterMeta = {
    card?: string;
    title?: string;
    description?: string;
    images?: string;
    site?: string;
};
interface ContentData {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author?: string;
    provider?: string;
    originalSourceUrl?: string;
    newsKeywords?: string[];
    postCount?: number;
    pageType?: string;
    robots?: {
        index?: boolean;
        follow?: boolean;
        archive?: boolean;
    };
    ogType?: string;
    twitterSite?: string;
}

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-08 15:28:13
 * @Description: Unified metadata generator for static and dynamic pages
 */

declare function setupMetadata(config?: {
    baseUrl?: string;
    siteName?: string;
    locales?: string[];
    twitterSite?: string;
    licenseName?: string;
    frontUrl?: string;
    isProduction?: boolean;
}, getDictionary?: (lang: string) => Promise<any>): void;
declare function getPageConfig(pageType?: string): {
    readonly ogType: "article";
    readonly schemaType: "NewsArticle";
} | {
    readonly ogType: "article";
    readonly schemaType: "Article";
} | {
    readonly ogType: "article";
    readonly schemaType: "BlogPosting";
} | {
    readonly ogType: "website";
    readonly schemaType: "CollectionPage";
} | {
    readonly ogType: "profile";
    readonly schemaType: "Person";
} | {
    readonly ogType: "website";
    readonly schemaType: "Product";
} | {
    readonly ogType: "video.other";
    readonly schemaType: "VideoObject";
} | {
    readonly ogType: "music.podcast";
    readonly schemaType: "PodcastEpisode";
} | {
    readonly ogType: "profile";
    readonly schemaType: "ProfilePage";
} | {
    readonly ogType: "website";
    readonly schemaType: "AboutPage";
} | {
    readonly ogType: "website";
    readonly schemaType: "ContactPage";
} | {
    readonly ogType: "website";
    readonly schemaType: "WebPage";
} | {
    readonly ogType: "website";
    readonly schemaType: "LandingPage";
} | {
    ogType: "article";
    schemaType: string;
};
declare function generateCanonicalUrl(lang: string, path?: string): string;
declare function generateAlternateLanguages(path?: string): Record<string, string>;
declare function generatePageTitle(pageTitle: string, baseTitle: string): string;
declare function combineKeywords(baseKeywords?: string[], pageKeywords?: string[]): string[];
declare function buildMetadataFromContent(data: ContentData, lang: string, address?: string): Metadata;
declare function generatePageMetadata(lang?: string, pageKey?: string, customMeta?: Partial<PageMeta>): Promise<Metadata>;
declare function generateWebsiteSchema(lang: string): {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    inLanguage: string;
    potentialAction: {
        "@type": string;
        target: string;
        "query-input": string;
    };
};
declare function generateOrganizationSchema(lang: string): {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    logo: string;
    inLanguage: string;
    sameAs: string[];
};
declare function generateArticleSchema(lang: string, article: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    authorUrl?: string;
    originalSourceUrl?: string;
}): {
    citation?: {
        "@type": string;
        url: string;
    } | undefined;
    isBasedOn?: {
        "@type": string;
        url: string;
    } | undefined;
    "@context": string;
    "@type": string;
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: {
        url?: string | undefined;
        "@type": string;
        name: string;
    };
    publisher: {
        "@type": string;
        name: string;
        logo: {
            "@type": string;
            url: string;
        };
    };
    inLanguage: string;
};
declare function generateBreadcrumbSchema(items: {
    name: string;
    url: string;
}[]): {
    "@context": string;
    "@type": string;
    itemListElement: {
        "@type": string;
        position: number;
        name: string;
        item: string;
    }[];
};
type Params$1 = {
    lang?: string;
    slug?: string | Record<string, any> | string[];
};
declare function createMetadata(params: Params$1, source: string, slugIndicator?: number, location?: string, externalData?: ContentData | null): Promise<any>;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-18 09:36:46
 * @Description: Core translation utilities
 */
type Dictionary$1 = Record<string, any>;
declare function setGetDictionary(fn: (lang: string) => Dictionary$1): void;
declare function getGlobalDictionary(): ((lang: string) => Dictionary$1) | null;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-18 09:36:46
 * @Description: Translation utilities for SSR
 */

declare function createTranslator(lang: string): {
    t: (key: string, fallback?: string) => string;
    lang: string;
};
declare function simpleTrans(i18nKey: string, values: Record<string, string> | undefined, t: (key: string) => string): string;
declare function trans(i18nKey: string, values: Record<string, string>, t: (key: string) => string, ...elements: React.ReactElement[]): React.ReactNode;

interface UrlBlogData {
    lang: string;
    location: string;
    id?: string | number;
    correctSlugs: (string | undefined)[];
    urlSlugs: (string | undefined)[];
}
interface UrlTagData {
    lang: string;
    location: string;
    id?: string;
    correctSlug?: string;
    urlSlug?: string;
}
interface PropsBlog {
    data: UrlBlogData;
}
interface PropsTag {
    data: UrlTagData;
}
declare const updateUrlBlog: ({ data }: PropsBlog) => string;
declare const updateUrlTag: ({ data }: PropsTag) => string;

type DeviceType = "mobile" | "ipad" | "desktop";
type Orientation = "landscape" | "portrait";
interface DeviceInfo {
    type: DeviceType;
    orientation: Orientation;
    screenWidth: number;
    screenHeight: number;
    isTouchDevice: boolean;
    isMobile: boolean;
    isIpad: boolean;
    isDesktop: boolean;
}
declare function useDevice(): DeviceInfo;

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

type Dictionary = Record<string, string | {
    title: string;
    description: string;
    keywords?: string[];
    openGraph?: OpenGraphMeta;
    twitter?: TwitterMeta;
}>;
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

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-06 15:14:10
 * @Description: Format number with thousand separators and decimal precision
 */
declare function formatNumber(number: number | string, char?: string, precision?: number | null): string;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-11-02 06:07:10
 * @Description: Format number with locale support and abbreviation (K, M, B)
 */

declare function formatNumberCompact(num: number | string, lang: Lang, format?: "abbreviate" | "full"): string;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-06 15:14:10
 * @Description: Random number utilities
 */
declare function randomInt(min: number, max: number): number;
declare function randomFloat(min: number, max: number, precision?: number): number;
declare function randomBoolean(): boolean;
declare function randomItem<T>(items: T[]): T;
declare function randomString(length?: number): string;
declare function randomHex(length?: number): string;
declare function randomId(): string;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-12-13 07:21:26
 * @Description:
 */
type DateHelperKind = "regular" | "chart" | "difference";
type DateHelperFormat = "full" | "date" | "time";
type DateHelperType = "AD-date" | "SH-date" | "LH-date";
declare function dateHelper(stampDate: number, kind?: "regular" | "chart" | "difference", second?: boolean, format?: "full" | "date" | "time", type?: "AD-date" | "SH-date" | "LH-date"): string;

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-14 09:23:34
 * @Description:
 */
interface ConnectParams<T = any> {
    method?: "get" | "post";
    endPoint: string;
    body?: T;
    headers?: any;
    route?: string;
}
declare const cns: <T = any>({ method, endPoint, body, headers, route, }: ConnectParams<T>) => Promise<T | undefined>;

interface Params<T> {
    endPoint: string;
    body?: T;
    route?: string;
}
interface Config extends RTCConfiguration {
    manual?: boolean;
}
declare const usePostFetch: <T = any>(params: Params<any>, config?: Config) => {
    data: T | undefined;
    error: any;
    isLoading: boolean;
    mutate: swr.KeyedMutator<T>;
    fetcher: (overrideBody?: any) => Promise<any>;
    invalidateCache: () => Promise<void>;
    cacheStats: {
        hits: number;
        misses: number;
        hitRate: string;
        backgroundRefresh: number;
    };
};

/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-12 15:00:49
 * @Description:
 */

interface LangLayoutProps {
    children: ReactNode;
    params: Promise<{
        lang: string;
    }>;
}
interface LangWrapperProps {
    langFromUrl: Lang;
    dictionary: Dictionary;
    children: ReactNode;
}
interface Image {
    src?: string | any;
    alt?: string;
    width?: number;
    height?: number;
}
interface VerticalNewsBox {
    title?: string;
    link?: string;
    image?: Image | string;
}
interface AdvertiseBoxType {
    title?: string;
    content?: string;
    sponsored?: string;
    link?: string;
    image?: Image | string;
}
type FrontBackPair = {
    front: (props: any) => ReactNode;
    back: (props: any) => ReactNode;
};
type SonnerType = "basic" | "success" | "error" | "warning" | "info" | 'loading';
type SonnerPosition = "bottom-left" | "bottom-right" | "bottom-center" | "top-left" | "top-right" | "top-center";
interface SonnerItem {
    id: string;
    title: ReactNode;
    action: ReactNode | null;
    type: SonnerType;
    duration: number;
    position: SonnerPosition;
    createdAt?: any;
    isPaused?: boolean;
    remainingDuration?: any;
}
interface OpenSonnerParams {
    title: ReactNode;
    action?: ReactNode;
    type?: SonnerType;
    duration?: number;
    position?: SonnerPosition;
    allowDuplicate?: boolean;
    onDismiss?: (...args: any[]) => void;
}

export { ALL_LANGUAGES, type AdvertiseBoxType, type BaseMeta, type ContentData, type DateHelperFormat, type DateHelperKind, type DateHelperType, type Dictionary$1 as Dictionary, type FrontBackPair, type Image, type Lang, type LangLayoutProps, type LangState, type LangWrapperProps, type LanguageInfo, type OpenGraphMeta, type OpenSonnerParams, type PageMeta, type SonnerItem, type SonnerPosition, type SonnerType, type TwitterMeta, type ValidOgType, type VerticalNewsBox, abbreviate, buildMetadataFromContent, capitalize, chunk, cn, cns, combineKeywords, createMetadata, createTranslator, dateHelper, debounce, deepClone, detectComponentsResponsive, detectDeviceFromUA, formatNumber, formatNumberCompact, generateAlternateLanguages, generateArticleSchema, generateBreadcrumbSchema, generateCanonicalUrl, generateOrganizationSchema, generatePageMetadata, generatePageTitle, generateWebsiteSchema, getAllLanguages, getCookie, getCookieAppLang, getCookieAppTheme, getCookieServer, getGlobalDictionary, getInitial, getLanguage, getLanguageCodes, getLanguages, getPageConfig, groupBy, hasLanguage, imageLoader, initializeLang, isBrowser, isValidEmail, isValidPhone, isValidUrl, omit, pick, randomBoolean, randomFloat, randomHex, randomId, randomInt, randomItem, randomString, setCookie, setGetDictionary, setupLanguages, setupMetadata, simpleTrans, sleep, slugify, throttle, trans, truncate, unique, updateUrlBlog, updateUrlTag, useDevice, useLangStore, usePostFetch, useTranslation };
