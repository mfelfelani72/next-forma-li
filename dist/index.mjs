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
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/helpers/sleep.ts
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/helpers/debounce.ts
function debounce(func, wait) {
  let timeout = null;
  return function(...args) {
    if (timeout)
      clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
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
export {
  capitalize,
  chunk,
  cn,
  debounce,
  deepClone,
  groupBy,
  isValidEmail,
  isValidPhone,
  isValidUrl,
  omit,
  pick,
  sleep,
  slugify,
  throttle,
  truncate,
  unique
};
//# sourceMappingURL=index.mjs.map