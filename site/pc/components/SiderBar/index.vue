<template>
    <div class="alt-doc__sider">
        <div v-for="(r, key) in Routes" class="alt-doc__route-content" :key="key">
            <span class="title">{{ r.name }}</span>
            <div v-for="(c, key) in r.children" :key="key" class="route__children">
                <span
                    @click="goToHandler(c)"
                    :class="[active === c.route.name ? 'color' : '']"
                    class="route__children__title"
                >{{ c.title }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { routes } from './index.js'

export default {
    name: 'SiderBar',
    watch: {
        $route: {
            handler(value) {
                this.active = value.meta.name
            },
            immediate: true
        }
    },
    data() {
        return {
            Routes: routes,
            active: ''
        }
    },
    methods: {
        goToHandler(c) {
            if (c.route.name != this.$route.meta.name) {
                this.active = c.route.name
                this.$router.push({ path: '/zh-CN/' + c.route.name })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.alt-doc__sider {
    .alt-doc__route-content {
        margin-bottom: 20px;
        .title {
            color: #888;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        .route__children {
            margin-left: 20px;
            margin-top: 15px;
            transition: color 200ms ease 0ms;
        }

        .route__children__title:hover {
            color: #4994df;
            cursor: pointer;
        }

        .color {
            color: #4994df;
        }
    }
}
</style>