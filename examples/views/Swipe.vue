<template>
    <div class="container">
        <alt-swipe class="swipe" speed="3000">
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
        }
    },
}
</script>


<style lang="less" scoped>
.container {
    height: 100%;
}
</style>
