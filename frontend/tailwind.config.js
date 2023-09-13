/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/About/**/*.tsx",
    "./src/components/Event/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9031D0",
        secondary: {
          100: "#F3EBFA",
          200: "#A456D8",
        },
        frames: "#CCCCCC", //#F4F4F4
        whitesmoke: "#F5F5F5",
      },
    },
  },
  plugins: [],
};

