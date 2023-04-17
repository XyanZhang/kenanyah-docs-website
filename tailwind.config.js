module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    // ...
    backgroundImage: {
      'banner': "url(/img/banner.jpg)",
    },
    extend: {
      svg: {
        display: 'inline-block',
      }
    }
    // svg: {
    //   display: 'inline-block',
    // }
  },
  // ...
}