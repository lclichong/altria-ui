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
} from '@altria/ui'
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

Vue.use(components)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
