const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        // Since having the left nav makes the body quite thin, we end up with
        // a thin column-like body shifted far to the right side of the page.
        // In such cases, it is better to shift everything (nav and body both)
        // a little to the left, so as to reduce the right-shift of the body.
        // 1168 = 1024 + 288/2 (nav width is w-72, which is equivalent to 288px)
        navshift: "1168px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    // https://daisyui.com/docs/themes
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#003388",
          "accent-content": "white",
          "--rounded-btn": "0rem",
          // Added by us
          "primary-focus": "#1a4794",
        },
      },
    ],
  },
};
