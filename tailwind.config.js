module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 5s infinite ease-in-out",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(100vh)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
