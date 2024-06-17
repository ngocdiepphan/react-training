/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
    colors: {
      primary: '#000',      
      secondary: '#7f7f7f', 
      bgPrimary: '#fff',    
      bgSecondary: '#ff642b'
    },
    // fontSize: {
    //   'x-small': '12px',
    //   'small': '14px',
    //   'x-medium': '16px',
    //   'medium': '17px',
    //   'x-large': '18px',
    //   'large': '20px',
    //   'xl-large': '23px',
    //   'xxl-large': '30px',
    //   'x-huge': '36px',
    //   'huge': '45px',
    //   'xl-huge': '50px',
    //   'xxl-huge': '76px',
    // },
    // lineHeight: {
    //   'x-small': '1.2',
    //   'x-medium': '1.5',
    //   'medium': '1.56',
    //   'xs-medium': '1.58',
    // },
    // screens: {
    //   'desktop': '1200px',
    //   'tablet': '768px',
    //   'mobile': '480px',
    // },
  },
  plugins: [],
};
