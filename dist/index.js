"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  capitalize: () => capitalize,
  chunk: () => chunk,
  cn: () => cn,
  debounce: () => debounce,
  deepClone: () => deepClone,
  detectComponentsResponsive: () => detectComponentsResponsive,
  detectDeviceFromUA: () => detectDeviceFromUA,
  groupBy: () => groupBy,
  isValidEmail: () => isValidEmail,
  isValidPhone: () => isValidPhone,
  isValidUrl: () => isValidUrl,
  omit: () => omit,
  pick: () => pick,
  sleep: () => sleep,
  slugify: () => slugify,
  throttle: () => throttle,
  truncate: () => truncate,
  unique: () => unique
});
module.exports = __toCommonJS(src_exports);

// src/arrays/chunk.ts
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

// src/arrays/unique.ts
function unique(array) {
  return [...new Set(array)];
}

// src/arrays/groupBy.ts
function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey])
      acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});
}

// src/strings/capitalize.ts
function capitalize(str) {
  if (!str)
    return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// src/strings/slugify.ts
function slugify(str) {
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}

// src/strings/truncate.ts
function truncate(str, length, suffix = "...") {
  if (str.length <= length)
    return str;
  return str.slice(0, length) + suffix;
}

// src/objects/pick.ts
function pick(obj, keys) {
  const result = {};
  keys.forEach((key) => {
    if (key in obj)
      result[key] = obj[key];
  });
  return result;
}

// src/objects/omit.ts
function omit(obj, keys) {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
}

// src/objects/deepClone.ts
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

// src/validation/isValidEmail.ts
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// src/validation/isValidPhone.ts
function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

// src/validation/isValidUrl.ts
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// src/helpers/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/helpers/sleep.ts
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/helpers/debounce.ts
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

// src/helpers/throttle.ts
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

// src/helpers/detectComponentResponsive.ts
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

// src/helpers/detectDeviceFromUA.ts
var detectDeviceFromUA = (userAgent) => {
  if (/iPad|Tablet/.test(userAgent))
    return "ipad";
  if (/Mobile|Android|iPhone/.test(userAgent))
    return "mobile";
  return "desktop";
};
//# sourceMappingURL=index.js.map