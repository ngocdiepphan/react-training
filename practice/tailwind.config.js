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
        '1': '1px',
        '3': '3px',
        '5': '5px',
        '8': '8px',
        '12': '12px',
        '10': '10px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '21': '21px',
        '24': '24px',
        '27': '27px',
        '30': '30px',
        '32': '32px',
        '35': '35px',
        '37': '37px',
        '40': '40px',
        '42': '42px',
        '48': '48px',
        '50': '50px',
        '56': '56px',
        '60': '60px',
        '64': '64px',
        '66': '66px',
        '72': '72px',
        '76': '76px',
        '80': '80px',
        '87': '87px',
        '96': '96px',
        '102': '102px',
        '110': '110px',
        '124': '124px',
        '125': '125px',
        '129': '129px',
        '160': '160px',
        '180': '180px',
        '208': "208px",
        '212': "212px",
        '250': '250px',
        '278': '278px',
        '318': '318px',
        '331': '331px',
        '340': '340px',
        '362': '362',
        '370': '370px',
        '420': '420px',
        '450': '450px',
        '500': '500px',
      },
      colors: {
        primary: '#000',
        secondary: '#7f7f7f',
        tertiary: '#ff642f',
        hover: '#1ca1c1',
      },
      backgroundColor: {
        primary: '#fff',
        secondary: '#ff642b',
        tertiary: '#f9f9f9',
        quaternary: '#8fc1d1',
        drawer: '#b9e4f2',
        hover: '#1ca1c1',
        secondaryDrawer: '#4a4e58',

      },
      text: {
        'xs': '12px',
        'sm': '14px',
        'lg': '16px',
        'xl': '17px'
      }
    },
  },
  plugins: [],
};
