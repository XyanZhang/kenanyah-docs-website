
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  // Replace with your project's social card
  image: 'img/docusaurus-social-card.jpg',
  navbar: {
    title: 'Kenanyah Site',
    logo: {
      alt: 'Kenanyah Logo',
      src: 'img/avatar.png',
    },
    items: [
      {
        // to: '/study',
        label: '学习',
        position: 'right',
        items: [
          {
            to: '/blog/tags',
            label: '标签',
          },
          {
            to: '/blog/archive',
            label: '归档',
          },
          {
            to: '/note',
            label: '笔记',
          },
          {
            to: '/example',
            label: '示例',
          },
          {
            to: '/utils',
            label: '工具',
          },
        ]
      },
      // {
      //   type: 'docSidebar',
      //   sidebarId: 'tutorialSidebar',
      //   position: 'right',
      //   label: 'Tutorial',
      // },
      {
        // type: 'docSidebar',
        to: '/blog',
        position: 'right',
        label: '博客',
      },
      {
        // type: 'docSidebar',
        to: '/navPage',
        position: 'right',
        label: '导航',
      },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Tutorial',
            to: '/docs/intro',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/docusaurus',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/docusaurus',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/facebook/docusaurus',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
}