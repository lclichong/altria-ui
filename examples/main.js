import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import cue from "../src/index";
import "../src/components/index.less";

Vue.config.productionTip = false;
Vue.use(cue);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");