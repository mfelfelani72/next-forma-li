export { chunk, groupBy, unique } from './arrays/index.js';
export { capitalize, slugify, truncate } from './strings/index.js';
export { deepClone, omit, pick } from './objects/index.js';
export { isValidEmail, isValidPhone, isValidUrl } from './validation/index.js';

declare function cn(...inputs: any): string;

declare function sleep(ms: number): Promise<void>;

declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;

declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;

export { cn, debounce, sleep, throttle };
