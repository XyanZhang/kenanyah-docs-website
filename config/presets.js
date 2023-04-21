const path = require('path');

module.exports = [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
      },
      blog: {
        showReadingTime: true,
      },
      theme: {
        customCss: path.resolve(__dirname, '../src/css/index.css'),
      },
    }),
  ],
];