import Vue from 'vue'
import App from './App.vue'
import router from './router'
import components from './components/index.js'

Vue.config.productionTip = false
Vue.use(components)

if (process.env.NODE_ENV === 'production') {
    Vue.prototype.$simulatorPath = '.'
} else {
    Vue.prototype.$simulatorPath = ''
}

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
