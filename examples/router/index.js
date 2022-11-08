import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const Cell = () => import('../views/Cell.vue')
const DropDownMenu = () => import('../views/DropDownMenu.vue')
const Button = () => import('../views/Button.vue')
const Loading = () => import('../views/Loading.vue')
const Overlay = () => import('../views/Overlay.vue')
const Dialog = () => import('../views/Dialog.vue')
const Popup = () => import('../views/Popup.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Cell',
        name: 'Cell',
        component: Cell,
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
    {
        path: '/Overlay',
        name: 'Overlay',
        component: Overlay,
    },
    {
        path: '/Dialog',
        name: 'Dialog',
        component: Dialog,
    },
    {
        path: '/Popup',
        name: 'Popup',
        component: Popup,
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})

export default router
