
  /** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1d4ed8", // Change this to your preferred color
          "primary-foreground": "#ffffff",
          secondary: "#ffffff", // Change this to your preferred color
          "secondary-foreground": "#252525FF",
          destructive: "#dc2626",
          accent: "#f3f4f6",
          ring: "#3b82f6",
          background: "#ffffff",
          input: "#e5e7eb",
          primaryHover:"#023915",
        },
      },
    },
    plugins: [],
  };
  