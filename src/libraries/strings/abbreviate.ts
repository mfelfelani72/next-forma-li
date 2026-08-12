/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-11-02 06:07:10
 * @Description: Smart text abbreviation and initial extraction
 */

export function abbreviate(
  input: unknown,
  threshold: number = 10,
  maxFallback: number = 12
): string {
  const s = String(input ?? "").trim();

  if (s.length <= threshold) return s;

  const hasSpace = /\s/.test(s);

  if (hasSpace) {
    const initials = s
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word[0])
      .join(" . ");

    return initials;
  }

  return s.length > maxFallback ? s.slice(0, maxFallback) : s;
}

export function getInitial(input: string): string {
  const s = String(input ?? "").trim();
  if (!s) return "";

  const cleanChars = s.replace(/[^\p{L}\p{N}]/gu, "");
  const result = Array.from(cleanChars).slice(0, 1).join("");

  return result.toUpperCase();
}