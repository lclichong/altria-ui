import PullRefresh from './index.vue'

PullRefresh.install = function (Vue) {
    Vue.component(PullRefresh.name, PullRefresh)
}

export default PullRefresh
