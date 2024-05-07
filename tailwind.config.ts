import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    animation: {
      "text-gradient": "text-gradient 3.5s linear infinite",
      "flip": "flip 6s infinite steps(2, end)",
    "rotate": "rotate 3s linear infinite both"
    },
    
    keyframes: {
      
      "text-gradient": {
        to: {
          backgroundPosition: "200% center",
        },
      },
    },
  },

  plugins: [],
};
export default config;
