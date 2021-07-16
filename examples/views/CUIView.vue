<template>
    <div class="container">
        <Header title="CUI" height="46px" showBack></Header>
        <Swipe class="c-swipe" :speed="speed">
            <SwipeItem v-for="(img, key) in images" :key="key">
                <img :src="img.url" :key="key" />
            </SwipeItem>
        </Swipe>
        <Cell v-for="(l, key) in 3" :key="key" no-border img-list>
            <template slot="title">
                <img src="../assets/slidea.jpg" />
            </template>
            <template slot="value">
                <p>热门推荐</p>
                <p>百万评论热歌全集</p>
            </template>
        </Cell>
        <Cell title="单元格" value="内容"></Cell>
    </div>
</template>

<script>
export default {
    components: {},
    created() {
        setTimeout(() => {
            this.images = [
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
            ]
        }, 3000)
    },
    data() {
        return {
            images: [],
            speed: 3000,
            message: '你好',
            title: '单元格',
            value: '内容',
        }
    },
}
</script>

<style lang="less">
.c-swipe {
    height: 43.98vw;
}
</style>