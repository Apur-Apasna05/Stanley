export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#000000',
        'cyber-green': '#00ff99',
        'cyber-blue': '#00bfff',
      },
      fontFamily: {
        cyber: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'matrix-rain': 'matrix 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px #00ff99' },
          '50%': { opacity: '.5', boxShadow: '0 0 10px #00ff99' },
        }
      }
    },
  },
  plugins: [],
}
