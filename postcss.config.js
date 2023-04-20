// postcss.config.js
module.exports = {
  plugins: [
      // 支持css @import指令
      require('postcss-import'), 
      // 支持css嵌套模块,默认为scss模式
      // 通过传入(require('postcss-nesting'))参数支持最新的css原生嵌套规则
      require('tailwindcss/nesting')(require('postcss-nesting')), 
      // 肯定要
      require('tailwindcss'),
      // 自动添加浏览器兼容前缀
      require('autoprefixer'),
  ],
};