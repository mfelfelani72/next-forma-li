/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-06 15:14:10
 * @Description: Random number utilities
 */

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min: number, max: number, precision: number = 2): number {
  const num = Math.random() * (max - min) + min;
  return parseFloat(num.toFixed(precision));
}

export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

export function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function randomString(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function randomHex(length: number = 8): string {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function randomId(): string {
  return `${Date.now()}_${randomString(6)}`;
}