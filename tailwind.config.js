/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "poke-bounce": {
          "0%, 100%": { transform: "translateY(-4%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "poke-bounce": "poke-bounce 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
