module.exports = [
  // ... Your other themes.
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    ({
      // ... Your options.
      // `hashed` is recommended as long-term-cache of index file is possible.
      hashed: true,
      // For Docs using Chinese, The `language` is recommended to set to:
      // ```
      // language: ["en", "zh"],
      // ```
    }),
  ],
];