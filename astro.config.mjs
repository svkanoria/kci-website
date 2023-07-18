// https://astro.build/config

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  site: "https://www.kanoriachem.com",
  integrations: [
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
      },
      apiOptions: {
        // Choose your Storyblok space region
        // region: "us", // optional,  or 'eu' (default)
      },
    }),
    sitemap(),
    prefetch(),
  ],
});
