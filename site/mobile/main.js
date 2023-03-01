import Vue from 'vue'
import App from './App.vue'
import router from './router'
import altUI from '../../packages/index.js'

Vue.config.productionTip = false
Vue.use(altUI)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
