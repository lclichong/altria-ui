<template>
    <div class="home">
        <alt-header title="首页" height="46px"></alt-header>
        <alt-swipe class="swipe" :speed="speed" :loop="true">
            <alt-swipe-item v-for="(img, key) in images" @click.native="swipeClick(img)" :key="key">
                <img :src="img.url" :key="key" />
            </alt-swipe-item>
        </alt-swipe>
        <alt-input class="home-input" clearable @enter="enter" v-model="val" placeholder="请输入"></alt-input>
        <alt-button style="margin-top: 5vw" @click="val = 456" type="success" size="small">修改input的值</alt-button>
        <alt-footer :footer-list="menus" @menuClick="menuClick"></alt-footer>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            menus: [
                {
                    idx: 1,
                    name: '底部导航一',
                    menuList: [
                        {
                            name: 'Cell',
                            url: '/Cell',
                            idx: 'menu1',
                        },
                    ],
                },
                {
                    idx: 2,
                    name: '底部导航二',
                    menuList: [
                        {
                            name: '跳转链接',
                            url: 'http://www.baidu.com',
                            idx: 'menu3',
                        },
                        {
                            name: 'Dialog',
                            url: '',
                            idx: 'menu4',
                        },
                    ],
                },
                {
                    idx: 3,
                    name: '底部导航三',
                    menuList: [
                        {
                            name: '菜单5',
                            url: 'xxxx',
                            idx: 'menu5',
                        },
                        {
                            name: '菜单6',
                            url: '',
                            idx: 'menu6',
                        },
                    ],
                },
            ],
            images: [
                {
                    url: require('../assets/slidec.jpg'),
                    key: 'img1',
                },
                {
                    url: require('../assets/slided.jpg'),
                    key: 'img2',
                },
                {
                    url: require('../assets/slidee.jpg'),
                    key: 'img3',
                },
            ],
            speed: 3000,
            idx: 0,
            val: '',
        }
    },
    methods: {
        menuClick(m) {
            if (!m.url) {
                this.$Dialog.alert({
                    title: '提示',
                    message: '敬请期待',
                })
            } else if (m.url.substring(0, 1) === '/') {
                this.$router.push({ path: m.url })
            } else if (m.url.startsWith('http') || m.url.startsWith('https')) {
                window.location.href = m.url
            } else {
                this.$Dialog.alert({
                    title: '提示',
                    message: '链接格式不正确',
                })
            }
        },
        swipeClick(img) {
            this.$Dialog.alert({
                title: '提示',
                message: `轮播图点击,我的key是：${img.key}`,
            })
        },
        enter(val) {
            this.$Dialog.alert({
                title: '提示',
                message: val,
            })
        },
    },
}
</script>

<style lang="less" scoped>
.home {
    height: 100vh;
    .swipe {
        height: 43.98vw;
    }
    .home-input {
        margin-top: 15px;
    }
}
</style>
