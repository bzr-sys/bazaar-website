/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["retro"],
          primary: "#db9a59",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["night"],
          primary: "#db9a59",
        },
      },
    ],
  },
};
