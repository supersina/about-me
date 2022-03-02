module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "2rem", sm: "0rem", md: "2rem" },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
