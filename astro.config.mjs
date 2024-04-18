import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Trkiller02.github.io",
  base: "/omarmarquezcv",
  integrations: [tailwind()],
});