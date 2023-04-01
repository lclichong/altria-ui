import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Cell, Dialog, Header, Icon, Image, Input, Popup } from '@altria/ui'
import components from './components/index.js'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Cell)
Vue.use(Dialog)
Vue.use(Header)
Vue.use(Icon)
Vue.use(Image)
Vue.use(Input)
Vue.use(Popup)

Vue.use(components)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
