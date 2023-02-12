/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        modCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        darkGray: "hsl(0, 0%, 48%)",
        black: "hsl(0, 0%, 0%)",
      },
      backgroundImage: {
        desktop: "url('assets/images/image-hero-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
