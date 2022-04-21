import { createApp } from "vue";
import App from "./App.vue";
import FooterComp from "@/components/Footer";
import HeaderComp from "@/components/Header";
import ContentComp from "@/components/Content";
import SvgIcon from "@/components/SvgIcon"; // svg component

// register globally
import router from "./router";
import store from "./store";

// 这样以后就不需要单独import xxx.icon了
import "@/icons/index.js";

const app = createApp(App);
// 全局组件直接全局注册
app.component(FooterComp.name, FooterComp);
app.component(HeaderComp.name, HeaderComp);
app.component(ContentComp.name, ContentComp);
app.component(SvgIcon.name, SvgIcon);

// 使用插件
app.use(store).use(router);
app.mount("#app");
