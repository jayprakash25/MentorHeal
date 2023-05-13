/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'Image-sm': " url('./assets/images/Heromobile.png')",
        'Image-lg': "url('./assets/images/Heroweb.png')",
        
    })
    },
  },
  plugins: [],
}

