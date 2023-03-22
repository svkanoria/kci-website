// https://astro.build/config

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
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
  ],
  experimental: {
    assets: true,
  },
});
