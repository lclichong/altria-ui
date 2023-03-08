import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/DemoHome/index.vue'

const path = require.context('../../../packages', true, /.vue$/)
let collectRoute = []
for (let p of path.keys()) {
    if (p.includes('example')) {
        const sourceName = p.match(/(?<=\.\/).*?(?=\/)/g)
        const name = sourceName[0]
        const nameUper = name.charAt(0).toUpperCase() + name.slice(1)
        collectRoute.push({
            path: `/zh-CN/${nameUper}`,
            name: `zh-CN/${nameUper}`,
            meta: {
                lang: 'zh-CN',
                name: nameUper,
            },
            component: path(p).default,
        })
    }
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: { name: 'zh-CN' },
    },
    {
        path: '/zh-CN/home',
        name: 'zh-CN',
        component: Home,
        meta: {
            lang: 'zh-CN',
        },
    },
    ...collectRoute,
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
})

router.afterEach((to) => {
    window.top.postMessage(
        {
            type: 'replacePath',
            value: to.fullPath,
        },
        '*'
    )
})

export default router
