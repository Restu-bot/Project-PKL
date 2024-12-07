/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        error: "var(--error)",
        primaryLight: "var(--primaryLight)",
        primaryAccent: "var(--primaryAccent)",
        secondary: "var(--secondary)",
        secondaryLight: "var(--secondaryLight)",
        secondaryAccent: "var(--secondaryAccent)",
        lightbackground: "var(--lightbackground)",
        light: "var(--light)",
        secondaryAccent: "var(--secondaryAccent)",
      },
    },
  },
  plugins: [],
};
