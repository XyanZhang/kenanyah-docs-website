module.exports = {
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
      type: 'docSidebar',
      position: 'right',
      label: '导航',
    },
  ],
};
