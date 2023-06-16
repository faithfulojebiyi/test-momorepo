import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['api/index.ts'],
  format: ['esm'],
  dts: true,
  ...options,
}));
