import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: "https://tsrsmegabyte.com",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  output: "hybrid",
  build: {
    redirects: false,
  },
  redirects: {
    "/edit": "/admin",
    "/content": "/admin",
    "/admin": "/admin/index.html"
  },
  adapter: netlify(),
});
