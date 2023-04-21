// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const presets = require('./config/presets');
const themeConfig = require('./config/themeConfig');
const themes = require('./config/themes');
const plugins = require('./config/plugins');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kenanyah Site',
  tagline: "kenayah's life, thought, blog, writing, tookit",
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'kenanyah-docs-website', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // zh-Hans
  },
  presets: presets,
  themeConfig: themeConfig,
  themes: themes,
  plugins: plugins
};

module.exports = config;
