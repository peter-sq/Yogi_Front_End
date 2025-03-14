module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        helveticaNeue: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['sans-serif'], 
      },
      colors: {
         background: '#FAFAFA', 
         primary: '#0582CA',
         buttonPrimary: '#0582CA',
         feature: '#EAEAEA',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        tablet: '900px', 
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
