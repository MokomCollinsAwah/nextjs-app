/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        bgColor: "#1c0f2e", // Deep purple background
        textColor: "#e0e0e0", // Light gray text
        primary: "#6a0dad", // Primary purple
        secondary: "#9c27b0", // Secondary lighter purple
        accent: "#d8b6ff", // Accent color (light purple/pink)
        textSoft: "#e5e5e5", // Soft text color
        btn: "#3673fd", // Button color
      }
    },
  },
  plugins: [],
};
