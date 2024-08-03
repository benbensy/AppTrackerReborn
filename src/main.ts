import { createApp } from "vue";
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { router } from "./router";
import App from "./App.vue";
import '@arco-design/web-vue/es/index.css';
import 'virtual:uno.css'

createApp(App).use(router).use(ArcoVueIcon).mount("#app");
