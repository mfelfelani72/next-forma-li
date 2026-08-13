import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/arrays/index.ts',
    'src/strings/index.ts',
    'src/objects/index.ts',
    'src/validation/index.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  target: 'es2020',
  platform: 'browser',
  external: ['react', 'react-dom', 'next', 'swr'],
});