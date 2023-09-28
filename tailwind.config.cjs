/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  mode: "jit",
  theme: {
    fontFamily: {
      body: ["Lexend", "sans-serif"],
      sans: ["Lexend", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px", // custom breakpoint
      // => @media (min-width: 768px) { ... }
      ml: "1000px", // custom breakpoint
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      bluetwo: "#82E8F",
      yellow: "#FFE81B",
      red: "#FF7474",
      green: "#CEFF1B",
    },
    extend: {
      screens: {
        bhover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
