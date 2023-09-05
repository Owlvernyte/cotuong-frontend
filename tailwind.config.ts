import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import tailwindTypo from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        paytone: ["var(--font-paytone)"],
      },
    },
    colors: {
      dirt: {
        100: "#eac696",
        200: "#765827",
        300: "#765827",
        400: "#65451f",
      },
      bamboo: {
        100: "#eae7b1",
        200: "#a6bb8d",
        300: "#61876e",
        400: "#3c6255",
      },
    },
  },
  plugins: [tailwindTypo, daisyui],
  daisyui: {
    themes: [
      {
        thitnuong: {
          primary: "#3c6255",
          "primary-content": "#eae7b1",

          secondary: "#eae7b1",
          "secondary-content": "#65451f",

          accent: "#765827",
          "accent-content": "#eae7b1",

          neutral: "#a6bb8d",
          "neutral-content": "#65451f",

          "base-100": "#eac696",
          "base-200": "#c8ae7d",
          "base-300": "#eac696",
          "base-content": "#65451f",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
};
export default config;
