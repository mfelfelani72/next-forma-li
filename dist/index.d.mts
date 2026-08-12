export { chunk, groupBy, unique } from './arrays/index.mjs';
export { capitalize, slugify, truncate } from './strings/index.mjs';
export { deepClone, omit, pick } from './objects/index.mjs';
export { isValidEmail, isValidPhone, isValidUrl } from './validation/index.mjs';
import { ComponentType } from 'react';

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

export { cn, debounce, detectComponentsResponsive, detectDeviceFromUA, sleep, throttle };
