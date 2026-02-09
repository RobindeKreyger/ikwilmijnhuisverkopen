import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        brand: "#1d4ed8",
        accent: "#f97316",
      },
    },
  },
  plugins: [],
};

export default config;
