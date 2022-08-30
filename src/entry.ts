import { App } from "vue";
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import "uno.css";

// 导出单独组件
export { MyButton, SFCButton, JSXButton };

// 通过插件形式实现统一导出注册
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
