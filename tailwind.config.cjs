/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    mode: "jit",
    theme: {
        colors: {
            bluetwo: "#82E8F",
            yellow: "#FFE81B",
            red: "#FF7474",
            green: "#CEFF1B",
        },
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/herobg.png')",
            }
        },
    },
    plugins: [],
};