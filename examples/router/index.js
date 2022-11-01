import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const CUIView = () => import('../views/CUIView.vue')
const DropDownMenu = () => import('../views/DropDownMenuTest.vue')
const Button = () => import('../views/Button.vue')
const Loading = () => import('../views/Loading.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/CUIView',
        name: 'CUIView',
        component: CUIView,
    },
    {
        path: '/DropDownMenu',
        name: 'DropDownMenu',
        component: DropDownMenu,
    },
    {
        path: '/Loading',
        name: 'Loading',
        component: Loading,
    },
    {
        path: '/Button',
        name: 'Button',
        component: Button,
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})

export default router
