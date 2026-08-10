declare function chunk<T>(array: T[], size: number): T[][];

declare function unique<T>(array: T[]): T[];

declare function groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;

export { chunk, groupBy, unique };
