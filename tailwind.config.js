module.exports = {
  darkMode: 'class', // 暗黑模式
  content: [
    // Example content paths...
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: 'tw-',
  theme: {
    // ...
    backgroundImage: {
      'banner': "url(/img/banner.jpg)",
    },
    extend: {
      svg: {
        display: 'inline-block',
      }
    },
    boxShadow: {
      nysm: '0 0 2px 0 rgb(0 0 0 / 0.05)',
      ny: '0 0 3px 0 rgb(0 0 0 / 0.1), 0 0 2px - 1px rgb(0 0 0 / 0.1)',
      nymd: '0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)',
      nylg: '0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px rgb(0 0 0 / 0.1)',
      spread: '0 5px 40px rgb(0 0 0 / 0.1)',
    },
    // svg: {
    //   display: 'inline-block',
    // }
  },
  // ...
}