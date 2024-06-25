module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '5': '5px',
        '8': '8px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '21': '21px',
        '24': '24px',
        '27': '27px',
        '30': '30px',
        '32': '32px',
        '37': '37px',
        '40': '40px',
        '42': '42px',
        '48': '48px',
        '76': '76px',
        '80': '80px',
        '102': '102px',
        '110': '110px',
        '124': '124px',
        '160': '160px'
      },
      colors: {
        primary: '#000',
        secondary: '#7f7f7f',
      },
      backgroundColor: {
        primary: '#fff',
        secondary: '#ff642b',
      },
      text: {
        'xs': '12px',
        'sm': '14px',
        'lg': '16px',
        'xl': '17px',
        '2xl': '18px',
        '3xl': '20px',
        '4xl': '23px',
        '5xl': '30px',
        '6xl': '36px',
        '7xl': '45px',
        '8xl': '50px',
        '9xl': '76px',
      }
    },
  },
  plugins: [],
};
