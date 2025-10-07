import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	/* site: "https://trkiller02.github.io/",
	base: "minimalist-portfolio", */
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
	},

	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: ["tailwindcss", "ninja-keys"],
		},
		build: {
			minify: "esbuild",
			cssMinify: "lightningcss",
		},
	},

	adapter: vercel({
		webAnalytics: true,
	}),
});
