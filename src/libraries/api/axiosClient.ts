/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Team: Pouya Soltani (Cosmic Cat)
 * @Date: 2025-10-14 09:17:37
 * @Description:
 */

import axios from "axios";

// Functions

import {
  getCookie,
  getCookieAppLangServer,
  getCookieServer,
} from "../helpers/cookies";

// Constants

const isSSR = typeof window === "undefined";
const isProduction = process.env.NODE_ENV === "production";

const baseUrlSSR = (process.env.NEXT_PUBLIC_API_URL ?? "") + "/";

const baseUrlCSR =
  isProduction && !isSSR
    ? (process.env.NEXT_PUBLIC_BASE_URL ?? "") +
      (process.env.NEXT_PUBLIC_BASE_PORT ?? "") +
      (process.env.NEXT_PUBLIC_BASE_PATH ?? "")
    : (process.env.NEXT_PUBLIC_BASE_URL ?? "") +
      (process.env.NEXT_PUBLIC_BASE_PORT ?? "");

const baseURL = isSSR ? baseUrlSSR : baseUrlCSR;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Accept-Version": 1,
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
  withCredentials: isProduction,
  withXSRFToken: isProduction,
});

axiosClient.interceptors.request.use(async (config) => {
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }

  try {
    let token =
      process.env.NEXT_PUBLIC_AUTHORIZATION_TYPE !== ""
        ? process.env.NEXT_PUBLIC_AUTHORIZATION_TYPE +
          " " +
          process.env.NEXT_PUBLIC_AUTHORIZATION
        : process.env.NEXT_PUBLIC_AUTHORIZATION;

    let locale = "en";

    if (!isSSR) {
      const cookie = getCookie("app_key");

      if (cookie) {
        const appKey = JSON.parse(decodeURIComponent(cookie));
        token = appKey?.tk ?? token;
      }

      const appLangCookie = getCookie("app_lang");

      if (appLangCookie) {
        try {
          const appLang = JSON.parse(decodeURIComponent(appLangCookie));
          locale = appLang?.state?.lang || "en";
        } catch (error) {
          console.error("Failed to parse app_lang cookie:", error);
        }
      }
    } else {
      try {
        const cookieStore = await getCookieServer("app_key");

        if (cookieStore) {
          const appKey = JSON.parse(decodeURIComponent(cookieStore));
          token = appKey?.tk ?? token;
        }
      } catch {
        // Ignore when outside request scope.
      }

      try {
        const appLang = await getCookieAppLangServer();
        locale = appLang.lang || "en";
      } catch {
        // Ignore when outside request scope.
      }
    }

    config.headers["Accept-Language"] = locale;

    if (token) {
      config.headers.Authorization =
        process.env.NEXT_PUBLIC_AUTHORIZATION_TYPE !== ""
          ? process.env.NEXT_PUBLIC_AUTHORIZATION_TYPE + " " + token
          : token;
    }
  } catch (error) {
    console.error("Axios request interceptor error:", error);
  }

  return config;
});

export default axiosClient;