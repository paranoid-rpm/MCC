import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f4f7f1",
          100: "#e4ebdd",
          300: "#a8b997",
          500: "#567047",
          700: "#263b2d",
          900: "#101d18"
        },
        pine: "#173326",
        moss: "#75835a",
        cedar: "#8a6446",
        walnut: "#50382a",
        mist: "#d8dfd7",
        stone: "#777d75",
        gold: "#f5f5f5",
        cream: "#f4efe5",
        charcoal: "#101312"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 29, 24, 0.16)"
      },
      backgroundImage: {
        "forest-noise":
          "radial-gradient(circle at 15% 10%, rgba(200,169,105,.18), transparent 28%), radial-gradient(circle at 70% 0%, rgba(216,223,215,.18), transparent 24%)"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
