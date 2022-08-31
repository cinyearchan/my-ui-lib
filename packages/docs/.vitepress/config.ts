const sidebar = {
  "/": [
    { text: "快速开始", link: "/", children: [] },
    {
      text: "通用",
      children: [{ text: "Button 按钮", link: "/components/button/" }],
    },
    { text: "导航", children: [] },
    { text: "反馈", children: [] },
    { text: "数据录入", children: [] },
    { text: "数据展示", children: [] },
    { text: "布局", children: [] },
  ],
};
const config = {
  title: "SmartyUI",
  description: "简易组件库",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: md => {
      // 添加 DemoBlock 插槽
      const  { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
};
export default config;
