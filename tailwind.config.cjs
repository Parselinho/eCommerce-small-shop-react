/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import daisyUI from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyUI],
  daisyui: {
    themes: ["nord", "synthwave"],
  },
};
