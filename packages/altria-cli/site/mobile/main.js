import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
    Button,
    Cell,
    Dialog,
    DropDownMenu,
    DropDownMenuItem,
    Header,
    Icon,
    Image,
    Input,
    Loading,
    Overlay,
    Popup,
    Swipe,
    SwipeItem,
    Tabbar,
    TabbarItem,
} from '@altria/ui'
import '@altria/ui/src/index.less'
import components from './components/index.js'
import '@altria/touch-emulator'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Cell)
Vue.use(Dialog)
Vue.use(DropDownMenu)
Vue.use(DropDownMenuItem)
Vue.use(Header)
Vue.use(Icon)
Vue.use(Image)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Overlay)
Vue.use(Popup)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.use(components)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
