import Vue from 'vue'
import VueRouter from 'vue-router'

const path = require.context('../../../packages', true, /.md$/)
const collectRoute = path.keys().map((p) => {
    const sourceName = p.match(/(?<=\.\/).*?(?=\/)/g)
    const name = sourceName[0]
    const nameUper = name.charAt(0).toUpperCase() + name.slice(1)
    return { path: `/${name}`, name: nameUper, component: path(p).default }
})

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: { name: 'Button' },
    },
    ...collectRoute,
]

const router = new VueRouter({
    routes,
})

export default router
