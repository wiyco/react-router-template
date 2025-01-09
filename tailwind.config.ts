import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      aspectRatio: {
        "1/1": "1 / 1",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "19/10": "19 / 10",
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
