import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'hybrid',
  compressHTML: true,
  adapter: vercel()
});