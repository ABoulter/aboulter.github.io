/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#FFF",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "section-pattern": "url('/src/assets/section.png')",
        "section2-pattern": "url('/src/assets/weed.png')",
        "section3-pattern": "url('/src/assets/wood.png')",
        "card-pattern": "url('/src/assets/card.png')",
        "section4-pattern": "url('/src/assets/blue.png')",
        "contact-pattern": "url('/src/assets/contactform.png')",
      },
    },
  },
  plugins: [],
};
