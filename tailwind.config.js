/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        "border-light": "var(--border-light)",
        "border-medium": "var(--border-medium)",

        success: "var(--success)",
        error: "var(--error)",
        warning: "var(--warning)",
        info: "var(--info)",
      },
    },
  },
  plugins: [],
};
