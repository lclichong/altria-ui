import Vue from "vue";
import VueRouter from "vue-router";
const Home = () =>
    import ("../views/Home.vue");
const CUIView = () =>
    import ("../views/CUIView.vue");

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/CUIView",
        name: "CUIView",
        component: CUIView,
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

export default router;