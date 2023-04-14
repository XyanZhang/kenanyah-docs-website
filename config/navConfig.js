module.exports = {
  title: 'Kenanyah Site',
  logo: {
    alt: 'My Site Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'right',
      label: 'Tutorial',
    },
    {
      to: '/study',
      label: '学习',
      position: 'right',
      items: [
        {
          to: '/blog',
          label: 'Blog',
        },
      ]
    },
  ],
};
