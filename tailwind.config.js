export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bangla: ["Hind Siliguri", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

