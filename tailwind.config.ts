import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mobile/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        backgroundDark: "var(--background-dark)",
        textPrimary: "var(--text-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
