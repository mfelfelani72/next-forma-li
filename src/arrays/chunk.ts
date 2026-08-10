export function chunk<T>(array: T[], size: number): T[][] {
  if (!Array.isArray(array)) throw new Error('First argument must be an array');
  if (size < 1) throw new Error('Size must be greater than 0');
  
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}