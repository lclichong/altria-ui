import Vue from 'vue'
import VueRouter from 'vue-router'

const path = require.context('../../../packages', true, /.vue$/)
let collectRoute = []
for (let p of path.keys()) {
    if (p.includes('example')) {
        const sourceName = p.match(/(?<=\.\/).*?(?=\/)/g)
        const name = sourceName[0]
        const nameUper = name.charAt(0).toUpperCase() + name.slice(1)
        collectRoute.push({
            path: `/${name}`,
            name: nameUper,
            component: path(p).default,
        })
    }
}

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
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
})

export default router
