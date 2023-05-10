/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      "primary": "#0071FF",
      "white": "#FFF",
      "lightest": "#E2E2E2",
      "light": "#A5A5A5",
      "medium": "#747474",
      "dark": "#1E2023",
      "darkest": "#121417",
      "error": "#FD3F62",
      "warning": "#F2E10D",
    },
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },
    fontSize: {
      h1: [
        "4rem",
        {
          fontWeight: "900",
        },
      ],
      h2: [
        "3rem",
        {
          fontWeight: "700",
        },
      ],
      h3: [
        "2.25rem",
        {
          fontWeight: "700",
        },
      ],
      h4: [
        "1.5rem",
        {
          fontWeight: "500",
        },
      ],
      h5: [
        "1rem",
        {
          fontWeight: "500",
        },
      ],
      body2: [
        "1rem",
        {
          fontWeight: "400",
        },
      ],
      body1: [
        "0.875rem",
        {
          fontWeight: "400",
        },
      ],
      caption: [
        "0.75rem",
        {
          fontWeight: "400",
        },
      ],
    },
    extend: {
      animation: {
        'slow-blink': "blink 2s infinite",
        'fast-blink': "blink 0.5s infinite",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};