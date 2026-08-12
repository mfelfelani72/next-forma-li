/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team:
 * @Date: 2025-10-05 12:41:14
 * @Description: Lang store with API routes
 */

import { create } from "zustand";

// Configurations

import {
  ALL_LANGUAGES as languages,
  Lang,
} from "../libraries/helpers/languages";

// Interfaces

import { LangState } from "../interfaces/dictionary";

export const useLangStore = create<LangState>()((set, get) => ({
  lang: "en" as Lang,
  dir: "ltr" as "ltr" | "rtl",
  isInitialized: false,
  refreshKey: 0,

  setLang: async (newLang: Lang) => {
    const langConfig = languages[newLang];
    const dir = langConfig?.dir || "ltr";

    try {
      const response = await fetch("/api/set-lang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: newLang,
          dir: dir,
        }),
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
      refreshKey: get().refreshKey + 1,
    });
  },

  triggerRefresh: () => {
    set({ refreshKey: get().refreshKey + 1 });
  },

  initializeLang: async (langFromUrl?: string) => {
    const { isInitialized } = get();
    if (isInitialized) {
      console.log("⏭️ Already initialized");
      return;
    }

    let finalLang: Lang = "en";
    let finalDir: "ltr" | "rtl" = "ltr";

    console.log("🔍 Initializing lang from URL:", langFromUrl);

    if (langFromUrl && langFromUrl in languages) {
      finalLang = langFromUrl as Lang;
      finalDir = languages[finalLang].dir;
    } else {
      try {
        const response = await fetch("/api/get-lang");
        if (response.ok) {
          const data = await response.json();
          if (data.lang && data.lang in languages) {
            finalLang = data.lang as Lang;
            finalDir = data.dir || languages[finalLang].dir;
            console.log(`✅ Lang from cookie via API: ${finalLang}`);
          }
        }
      } catch (error) {
        console.error("Error getting cookie:", error);
      }
    }

    set({
      lang: finalLang,
      dir: finalDir,
      isInitialized: true,
    });
  },
}));

// Helper function
export const initializeLang = async (langFromUrl?: string): Promise<void> => {
  if (typeof window !== "undefined") {
    await useLangStore.getState().initializeLang(langFromUrl);
  }
};
