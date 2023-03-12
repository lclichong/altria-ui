import Vue from 'vue'
import App from './App.vue'
import router from './router'
import altUI from '@altria/ui'
import components from './components/index.js'

Vue.config.productionTip = false
Vue.use(altUI)
Vue.use(components)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
