import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

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
			include: ["tailwindcss"],
		},
		build: {
			minify: "esbuild",
			cssMinify: "lightningcss",
		},
	},
});
