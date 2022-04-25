import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/iconfont.css";

Vue.config.productionTip = false;

// 引入高德地图
import "./plugins/aMap.js";
// ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// 注册全局Back组件
import Back from "@/components/back";
Vue.component("Back", Back);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
