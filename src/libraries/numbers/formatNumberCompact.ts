/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-11-02 06:07:10
 * @Description: Format number with locale support and abbreviation (K, M, B)
 */

import { ALL_LANGUAGES, type Lang } from "../helpers/languages";

export function formatNumberCompact(
  num: number | string,
  lang: Lang,
  format?: "abbreviate" | "full"
): string {
  const locale = ALL_LANGUAGES[lang].schemaLocale;
  const number = Number(num);

  if (!Number.isFinite(number)) {
    return new Intl.NumberFormat(locale).format(0);
  }

  if (format !== "abbreviate") {
    return new Intl.NumberFormat(locale).format(number);
  }

  const formatCompactNumber = (value: number, suffix: string) => {
    const formatted = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value);

    return `${formatted}${suffix}`;
  };

  if (number >= 1_000_000_000) {
    return formatCompactNumber(number / 1_000_000_000, "B");
  }

  if (number >= 1_000_000) {
    return formatCompactNumber(number / 1_000_000, "M");
  }

  if (number >= 1_000) {
    return formatCompactNumber(number / 1_000, "K");
  }

  return new Intl.NumberFormat(locale).format(number);
}