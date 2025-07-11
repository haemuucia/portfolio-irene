// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        lightBG: "#FAFAFA",     
        darkBG: "#0E0A2A",      
        primary: "#87CEFA",    
        accent: "#FFD1DC",    
      },
      boxShadow: {
        glow: "0 0 20px rgba(255,204,112,0.7), 0 0 40px rgba(200,80,192,0.5)",
      },
      animation: {
        text: "textGradient 5s ease infinite",
      },
      keyframes: {
        textGradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      backgroundSize: {
        "200": "200% 200%",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
