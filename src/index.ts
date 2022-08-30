// import { createApp } from "vue";
import { createApp } from 'vue/dist/vue.esm-bundler.js'

import SButton from "./button";
import SFCButton from "./SFCButton.vue";

import SmartyUI from './entry'

createApp({
  template: `
    <div>
      <SButton>普通按钮</SButton>
    </div>
  `
}).use(SmartyUI).mount("#app");
