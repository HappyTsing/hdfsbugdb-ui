import { createApp } from "vue";
import App from "./App.vue";
import FooterComp from "@/components/Footer";
import HeaderComp from "@/components/Header";
import ContentComp from "@/components/Content";

import router from "./router";
import store from "./store";

const app = createApp(App);
// 全局组件直接全局注册
app.component(FooterComp.name, FooterComp);
app.component(HeaderComp.name, HeaderComp);
app.component(ContentComp.name, ContentComp);

// 使用插件
app.use(store).use(router);
app.mount("#app");
