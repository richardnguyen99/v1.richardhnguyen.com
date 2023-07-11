/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      body: "Alliance No.1, ui-sans-serif",
      sans: '"Alliance No.1", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      serif: ["Georgia", "Playfair Display", "ui-serif", "serif"],
      paragraph: ["Fanwood Text", "Georgia", "ui-serif", "serif"],
      mono: [
        // "League Mono",
        // "SFMono-Regular",
        // "SF Mono",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        "monospace",
      ],
    },
    extend: {
      colors: {
        gatsby: "#663399",
      },
      animation: {
        "swapOut-running":
          "kf-swapOut 400ms cubic-bezier(0.75, 0, 0.25, 1) 150ms both running",
        "swapOut-paused":
          "kf-swapOut 400ms cubic-bezier(0.75, 0, 0.25, 1) 150ms both paused",
        "swapIn-running":
          "kf-swapIn 400ms cubic-bezier(0.75, 0, 0.25, 1) 150ms both running",
        "bounce-1": "bounce-1 10s infinite ease-in-out",
        "bounce-2": "bounce-2 10s infinite ease-in-out",
        "bounce-3": "bounce-3 10s infinite ease-in-out",
      },
      keyframes: {
        "kf-swapOut": {
          from: {
            transform: "translateY(0)",
            opacity: "1",
          },
          to: {
            transform: "translateY(-100%)",
            opacity: "0",
          },
        },

        "kf-swapIn": {
          from: {
            transform: "translateY(0)",
            opacity: "0",
          },
          to: {
            transform: "translateY(-100%)",
            opacity: "1",
          },
        },

        "bounce-1": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "bounce-2": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-30px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "bounce-3": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(30px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
