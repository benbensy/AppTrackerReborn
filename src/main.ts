import { createApp } from "vue";
import '@arco-design/web-vue/es/style/index.css'
import { router } from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
