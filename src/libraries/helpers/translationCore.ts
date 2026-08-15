/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-18 09:36:46
 * @Description: Core translation utilities
 */

export type Dictionary = Record<string, any>;

let globalGetDictionary: ((lang: string) => Dictionary) | null = null;

export function setGetDictionary(fn: (lang: string) => Dictionary) {
  globalGetDictionary = fn;
}

export function getGlobalDictionary() {
  return globalGetDictionary;
}