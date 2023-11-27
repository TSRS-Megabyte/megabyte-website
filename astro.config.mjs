import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://tsrsmegabyte.com",
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
    "/edit": "https://prose.io/#TSRS-Megabyte/megabyte-website/tree/main/src/content",
    "/content": "https://prose.io/#TSRS-Megabyte/megabyte-website/tree/main/src/content",
    "/admin": "https://prose.io/#TSRS-Megabyte/megabyte-website/tree/main/src/content"
  },
  adapter: netlify(),
});
