import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cue from '../src/index'
import '../src/components/index.less'
// import cue from '../dist/lc-best-ui.common.js'
// import '../dist/lc-best-ui.css'

Vue.config.productionTip = false
Vue.use(cue)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
