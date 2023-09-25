/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/About/**/*.tsx",
    "./src/components/Event/**/*.tsx",
    "./src/components/Shop/**/*.tsx",
    "./src/components/Blog/**/*.tsx",
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
        tag: {
          text: "#F29C4A",
          bg: "#FCF3EC",
        },
      },
      fontFamily: {
        black: ["CircularStd-Black", "sans"],
        bold: ["CircularStd-Bold", "sans"],
        book: ["CircularStd-Book", "sans"],
        medium: ["CircularStd-Medium", "sans"],
      },
    },
  },
  plugins: [],
};

