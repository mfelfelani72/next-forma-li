/**
 * @Author: Mohammad Felfelani
 * @Email: mfelfelani72@gmail.com
 * @Date: 2025-12-25 12:50:52
 * @Description: Debounce function to limit how often a function can be called
 */

type Procedure = (...args: any[]) => void;

export function debounce<F extends Procedure>(
  func: F,
  timeout: number = 300
): (...args: Parameters<F>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<F>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}