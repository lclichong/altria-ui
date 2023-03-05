import Vue from 'vue'
import VueRouter from 'vue-router'

const path = require.context('../../../packages', true, /.md$/)
const collectRoute = path.keys().map((p) => {
    const sourceName = p.match(/(?<=\.\/).*?(?=\/)/g)
    const name = sourceName[0]
    const nameUper = name.charAt(0).toUpperCase() + name.slice(1)
    if (name === 'markdown') {
        const sourceName = p.match(/(?<=markdown\/).*?(?=\.md)/g)
        const name = sourceName[0]
        const nameUper = name.charAt(0).toUpperCase() + name.slice(1)
        return {
            path: `/zh-CN/${nameUper}`,
            name: `zh-CN/${nameUper}`,
            meta: {
                lang: 'zh-CN',
                name: nameUper,
            },
            component: path(p).default,
        }
    } else {
        return {
            path: `/zh-CN/${nameUper}`,
            name: `zh-CN/${nameUper}`,
            meta: {
                lang: 'zh-CN',
                name: nameUper,
            },
            component: path(p).default,
        }
    }
})

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: { name: 'zh-CN' },
    },
    {
        path: '/zh-CN',
        name: 'zh-CN',
        redirect: { name: 'zh-CN/Home' },
    },
    ...collectRoute,
]

console.log('pc', routes)

const router = new VueRouter({
    routes,
})

function listenToSyncPath(router) {
    window.addEventListener('message', (event) => {
        if (event.data?.type !== 'replacePath') {
            return
        }
        const path = event.data?.value || ''
        if (router.currentRoute.path !== path) {
            router.replace(path).catch(() => {})
        }
    })
}

listenToSyncPath(router)

export default router
