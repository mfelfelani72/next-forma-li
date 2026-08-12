/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-10-06 15:14:10
 * @Description: Format number with thousand separators and decimal precision
 */

export function formatNumber(
  number: number | string,
  char: string = ",",
  precision: number | null = null
): string {
  const numValue = typeof number === "string" ? parseFloat(number) : number;

  if (typeof numValue !== "number" || isNaN(numValue)) {
    return typeof number === "string" ? number : number.toString();
  }

  let str: string =
    precision !== null ? numValue.toFixed(precision) : numValue.toString();
  const [intPart, decimalPart] = str.split(".");

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, char);
  return decimalPart !== undefined
    ? `${formattedInt}.${decimalPart}`
    : formattedInt;
}