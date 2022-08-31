import Theme from "vitepress/dist/client/theme-default/index";
import SmartyUI from "../../../src/entry";
// 主题样式
import "vitepress-theme-demoblock/theme/styles/index.css";
import { registerComponents } from "./register-components";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SmartyUI);
    registerComponents(app);
  },
};
