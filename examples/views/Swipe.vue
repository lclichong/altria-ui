<template>
    <div class="container">
        <p>默认</p>
        <alt-swipe>
            <alt-swipe-item v-for="(img, key) in images" :key="key">
                <img :src="img.url" />
            </alt-swipe-item>
        </alt-swipe>
        <p>轮播</p>
        <alt-swipe :autoplay="autoplay">
            <alt-swipe-item v-for="(img, key) in images" :key="key">
                <img :src="img.url" />
            </alt-swipe-item>
        </alt-swipe>
        <p>不显示指示器</p>
        <alt-swipe :showIndicators="false" :autoplay="autoplay">
            <alt-swipe-item v-for="(img, key) in images" :key="key">
                <img :src="img.url" />
            </alt-swipe-item>
        </alt-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    url: require('../assets/slidec.jpg'),
                },
                {
                    url: require('../assets/slided.jpg'),
                },
                {
                    url: require('../assets/slidee.jpg'),
                },
            ],
            autoplay: 2000,
        }
    },
}
</script>


<style lang="less" scoped>
.container {
    height: 100%;
}
</style>
