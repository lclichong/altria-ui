import Footer from "./components/CFooter";
import Swipe from "./components/CSwipe";
import SwipeItem from "./components/CSwipeItem";
import Header from "./components/CHeader";
import Dialog from "./components/CDialog";
import Cell from "./components/CCell";
import "./components/index.less";

const version = "1.0";

function install(Vue) {
    let components = [Footer, Swipe, SwipeItem, Header, Dialog, Cell];
    components.forEach(function(item) {
        if (item.install) {
            Vue.use(item);
        } else if (item.name) {
            Vue.component(item.name, item);
        }
    });
}

if (typeof window !== "undefined" && window.Vue) {
    // 引用vue.js时，调用install
    console.log("install for window.Vue...");
    install(window.Vue);
}

export { install, version, Footer, Swipe, SwipeItem, Header, Dialog };
export default {
    install: install,
    version: version,
};