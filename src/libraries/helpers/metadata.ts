/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-08 15:28:13
 * @Description: Unified metadata generator for static and dynamic pages
 */

import type { Metadata } from "next";

// Interfaces
import {
  BaseMeta,
  PageMeta,
  ContentData,
  ValidOgType,
} from "../../interfaces/meta";

// Functions
import { cns } from "../api/cns";

export type Config = {
  baseUrl: string;
  siteName: string;
  locales: string[];
  twitterSite?: string;
  licenseName: string;
  frontUrl?: string;
  isProduction: boolean;
};

let globalConfig: Config | null = null;
let globalGetDictionary: ((lang: string) => Promise<any>) | null = null;

function getConfig(): Config {
  if (globalConfig) return globalConfig;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost";
  const basePort = process.env.NEXT_PUBLIC_BASE_PORT || "";
  const SITE_URL = `${baseUrl}${basePort}`;

  const supportedLanguages =
    process.env.NEXT_PUBLIC_SUPPORTED_LANGUAGES || "en";
  const locales = supportedLanguages
    .split(",")
    .map((lang) => lang.trim())
    .filter(Boolean);

  return {
    baseUrl: SITE_URL,
    siteName: process.env.NEXT_PUBLIC_LICENSE_NAME || "sky",
    locales: locales,
    twitterSite: process.env.NEXT_PUBLIC_TWITTER_SITE,
    licenseName: process.env.NEXT_PUBLIC_LICENSE_NAME || "sky",
    frontUrl: process.env.NEXT_PUBLIC_FRONT_URL,
    isProduction: process.env.NODE_ENV === "production",
  };
}

export function setupMetadata(
  config?: {
    baseUrl?: string;
    siteName?: string;
    locales?: string[];
    twitterSite?: string;
    licenseName?: string;
    frontUrl?: string;
    isProduction?: boolean;
  },
  getDictionary?: (lang: string) => Promise<any>,
) {
  const baseUrl =
    config?.baseUrl || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost";
  const basePort = process.env.NEXT_PUBLIC_BASE_PORT || "";
  const SITE_URL = `${baseUrl}${basePort}`;

  const supportedLanguages = config?.locales?.length
    ? config.locales
    : (process.env.NEXT_PUBLIC_SUPPORTED_LANGUAGES || "en")
        .split(",")
        .map((lang) => lang.trim())
        .filter(Boolean);

  globalConfig = {
    baseUrl: SITE_URL,
    siteName: config?.siteName || process.env.NEXT_PUBLIC_LICENSE_NAME || "sky",
    locales: supportedLanguages,
    twitterSite: config?.twitterSite || process.env.NEXT_PUBLIC_TWITTER_SITE,
    licenseName:
      config?.licenseName || process.env.NEXT_PUBLIC_LICENSE_NAME || "sky",
    frontUrl: config?.frontUrl || process.env.NEXT_PUBLIC_FRONT_URL,
    isProduction: config?.isProduction ?? process.env.NODE_ENV === "production",
  };

  if (getDictionary) {
    globalGetDictionary = getDictionary;
  }
}

// ---------- Helper Functions ----------

const PAGE_TYPE_CONFIG = {
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
  error: { ogType: "website", schemaType: "WebPage" },
} as const;

export function getPageConfig(pageType?: string) {
  if (!pageType || !(pageType in PAGE_TYPE_CONFIG)) {
    return { ogType: "article" as const, schemaType: "Article" };
  }
  return PAGE_TYPE_CONFIG[pageType as keyof typeof PAGE_TYPE_CONFIG];
}

export function generateCanonicalUrl(lang: string, path: string = ""): string {
  const config = getConfig();
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${config.baseUrl}/${lang}${cleanPath ? `/${cleanPath}` : ""}`;
}

export function generateAlternateLanguages(
  path?: string,
): Record<string, string> {
  const config = getConfig();
  const languagesObj: Record<string, string> = {};

  config.locales.forEach((locale) => {
    languagesObj[locale] = generateCanonicalUrl(locale, path || "");
  });

  const defaultLocale = config.locales[0] || "en";
  languagesObj["x-default"] = generateCanonicalUrl(defaultLocale, path || "");

  return languagesObj;
}

export function generatePageTitle(
  pageTitle: string,
  baseTitle: string,
): string {
  return pageTitle === baseTitle ? baseTitle : `${pageTitle} | ${baseTitle}`;
}

export function combineKeywords(
  baseKeywords: string[] = [],
  pageKeywords: string[] = [],
): string[] {
  return [...new Set([...baseKeywords, ...pageKeywords])];
}

export function buildMetadataFromContent(
  data: ContentData,
  lang: string,
  address?: string,
): Metadata {
  const config = getConfig();
  const canonicalUrl = generateCanonicalUrl(lang, address || "");

  const imageUrl = data.image.startsWith("http")
    ? data.image
    : `${config.baseUrl}${data.image.startsWith("/") ? data.image : "/" + data.image}`;

  const pageConfig = getPageConfig(data.pageType);
  const ogType = pageConfig.ogType as ValidOgType;

  return {
    applicationName: config.siteName,
    authors: data.author
      ? [{ name: data.author }]
      : [{ name: config.siteName }],
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
          alt: data.title,
        },
      ],
      locale: "en_US",
      publishedTime: data.datePublished,
      modifiedTime: data.dateModified,
      ...(data.author && { authors: [data.author] }),
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [imageUrl],
      ...(data.author && { creator: data.author }),
      ...(data.twitterSite && { site: data.twitterSite }),
      ...(!data.twitterSite &&
        config.twitterSite && { site: config.twitterSite }),
    },
    robots: {
      ...(data.robots || { index: true, follow: true }),
      ...(data.robots?.archive === false ? { archive: false } : {}),
    },
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLanguages(address),
    },
    icons: {
      icon: `/${config.licenseName}/favicon.ico`,
      shortcut: `/${config.licenseName}/favicon.ico`,
      apple: `/${config.licenseName}/favicon.ico`,
    },
    ...(data.newsKeywords &&
      data.newsKeywords.length > 0 && {
        keywords: data.newsKeywords.join(", "),
      }),
  };
}

export async function generatePageMetadata(
  lang: string = "en",
  pageKey?: string,
  customMeta?: Partial<PageMeta>,
): Promise<Metadata> {
  const config = getConfig();

  if (!globalGetDictionary) {
    throw new Error(
      "getDictionary not configured. Please call setupMetadata() in your app.",
    );
  }

  const dict = await globalGetDictionary(lang);

  const baseMeta = dict.meta as BaseMeta;

  const pageMetaCandidate = pageKey
    ? dict[`meta_${pageKey}` as keyof typeof dict]
    : null;

  const pageMeta = (pageMetaCandidate as PageMeta) || baseMeta;

  const finalMeta: PageMeta = customMeta
    ? { ...pageMeta, ...customMeta }
    : pageMeta;

  const pageTitle = generatePageTitle(finalMeta.title, baseMeta.title);

  const canonicalUrl =
    finalMeta.canonicalUrl || generateCanonicalUrl(lang, pageKey);

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
          alt: pageTitle,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: finalMeta.description,
      images: [config.baseUrl + baseMeta.openGraph?.images],
      ...(config.twitterSite && { site: config.twitterSite }),
    },
    robots: finalMeta.robots || { index: true, follow: true },
    alternates: {
      canonical: generateCanonicalUrl(lang, pageKey),
      languages: generateAlternateLanguages(pageKey),
    },
    icons: {
      icon: `/${config.licenseName}/favicon.ico`,
      apple: `/${config.licenseName}/favicon.ico`,
    },
  };
}

export function generateWebsiteSchema(lang: string) {
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
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationSchema(lang: string) {
  const config = getConfig();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.siteName,
    url: config.baseUrl,
    logo: `${config.baseUrl}/images/logo/logo.png`,
    inLanguage: "en-US",
    sameAs: ["https://twitter.com/sky", "https://linkedin.com/company/sky"],
  };
}

export function generateArticleSchema(
  lang: string,
  article: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    authorUrl?: string;
    originalSourceUrl?: string;
  },
) {
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
      ...(article.authorUrl && { url: article.authorUrl }),
    },
    publisher: {
      "@type": "Organization",
      name: config.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${config.baseUrl}/images/logo/logo.png`,
      },
    },
    inLanguage: "en-US",
    ...(article.originalSourceUrl && {
      citation: {
        "@type": "CreativeWork",
        url: article.originalSourceUrl,
      },
      isBasedOn: {
        "@type": "CreativeWork",
        url: article.originalSourceUrl,
      },
    }),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  const config = getConfig();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${config.baseUrl}${item.url}`,
    })),
  };
}

async function fetchMetaJsonFromServer(
  slug: string | Record<string, any>,
  source: string,
  lang: string,
) {
  const config = getConfig();

  const resolvedSlug = typeof slug === "string" ? slug : slug.symbol;

  const host = config.isProduction
    ? config.frontUrl || config.baseUrl
    : config.baseUrl;

  try {
    const res = await cns<any>({
      method: "post",
      endPoint: `${host}/api/meta/`,
      route: "/metadescription",
      body: {
        action: "fetchMeta",
        slug: resolvedSlug,
        source,
        lang,
      },
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

type Params = {
  lang?: string;
  slug?: string | Record<string, any> | string[];
};

export async function createMetadata(
  params: Params,
  source: string,
  slugIndicator: number = -1,
  location?: string,
  externalData?: ContentData | null,
) {
  const config = getConfig();

  if (!globalGetDictionary) {
    throw new Error(
      "getDictionary not configured. Please call setupMetadata() in your app.",
    );
  }

  const resolvedParams = await Promise.resolve(params);

  const lang = resolvedParams.lang ?? "en";
  const selected = lang;

  let slug = resolvedParams.slug;
  let address: string | undefined;

  if (Array.isArray(resolvedParams.slug) && location) {
    address =
      location + "/" + resolvedParams.slug[0] + "/" + resolvedParams.slug[1];
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
        error,
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
        languages: generateAlternateLanguages(address),
      },
      icons: {
        icon: `/${config.licenseName}/favicon.ico`,
        shortcut: `/${config.licenseName}/favicon.ico`,
        apple: `/${config.licenseName}/favicon.ico`,
      },
    };
  } catch (error) {
    console.error(
      `[Meta] Critical error in createMetadata for ${source}:`,
      error,
    );
    return generatePageMetadata(selected, source);
  }
}
