import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Cell, Button, Dialog, Icon, Image, Input } from '@altria/ui'
import components from './components/index.js'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Image)
Vue.use(Dialog)
Vue.use(components)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
