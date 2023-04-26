/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    // https://daisyui.com/docs/themes
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "darkblue",
          "--rounded-btn": "0rem",
          // Added by us
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
};
