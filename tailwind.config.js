const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        sand: ["Quicksand"],
      },
      colors: {
        default: "#22c55e",
        // green-500
        darken: "#334155",
        // slate-700
      },
    },
  },
  plugins: [flowbite.plugin()],
};
