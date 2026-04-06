import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D1117",
        slate: "#556070",
        line: "#D6DCE5",
        pearl: "#F4F0E8",
        mist: "#F7F8FA",
        accent: "#586B84",
        accentDeep: "#43556E",
        accentSoft: "#E7ECF2"
      },
      boxShadow: {
        panel: "0 18px 40px rgba(13, 17, 23, 0.08)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at top, rgba(31, 78, 121, 0.08), transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247,248,250,0.98))"
      }
    }
  },
  plugins: []
};

export default config;
