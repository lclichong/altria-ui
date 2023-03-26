<template>
    <div class="alt-doc__demo-home">
        <h1 class="demo-home__title">{{ locales.title }}</h1>
        <h3 class="demo-home__description">{{ locales.description }}</h3>
        <div class="demo-home__nav" v-for="n,key in locales.nav" :key="key">
            <div class="demo-home__nav-name">{{n.name}}</div>
            <div class="nav__children">
                <router-link
                    :to="'/zh-CN/' + c.route.name"
                    v-for="c,key in n.children"
                    :key="key"
                    class="nav__children-title"
                >{{c.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { locales } from '../../../common/locales.js'

export default {
    created() {
        this.locales = locales['zh-CN']
    },
    data() {
        return {
            locales: ''
        }
    }
}
</script>

<style lang="less" scoped>
.alt-doc__demo-home {
    height: 100%;
    padding: 25px 25px;
    background-color: #fff;
    box-sizing: border-box;
    overflow-y: scroll;
    .demo-home__description {
        margin: 20px 0px;
        color: rgba(69, 90, 100, 0.6);
        font-size: 14px;
    }
    .demo-home__nav-name {
        margin: 10px 0px;
        color: rgba(69, 90, 100, 0.6);
        font-size: 14px;
    }

    .nav__children {
        .nav__children-title {
            display: flex;
            font-size: 14px;
            font-weight: 600;
            line-height: 45px;
            text-indent: 2em;
            background: #f7f8fa;
            color: #000;
            border-radius: 25px;
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.3s;
        }
        .nav__children-title:hover {
            background: #eef0f4;
        }
    }
}
</style>