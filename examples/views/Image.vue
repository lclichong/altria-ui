<template>
    <div class="container">
        <div class="demo">
            <p>默认</p>
            <alt-image @click="imgClick" width="100px" height="100px" :src="image"></alt-image>
        </div>
        <div class="demo">
            <p>contain</p>
            <alt-image width="50vw" height="20vw" :src="image" fit="contain"></alt-image>
            <p>cover</p>
            <alt-image width="50vw" height="20vw" :src="image" fit="cover"></alt-image>
            <p>fill</p>
            <alt-image width="50vw" height="27vw" :src="image" fit="fill"></alt-image>
        </div>
        <p>圆形图片</p>
        <div class="demo">
            <alt-image @click="imgClick" round width="100px" height="100px" :src="image"></alt-image>
        </div>
        <div class="demo">
            <alt-image round width="50vw" height="20vw" :src="image" fit="contain"></alt-image>
        </div>
        <div class="demo">
            <alt-image round width="50vw" height="20vw" :src="image" fit="cover"></alt-image>
        </div>
        <div class="demo">
            <alt-image round width="50vw" height="27vw" :src="image" fit="fill"></alt-image>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: require('../assets/cat.jpg'),
        }
    },
    methods: {
        imgClick() {
            this.$Dialog.alert({
                title: '标题',
                message: '点击了',
            })
        },
    },
}
</script>

<style lang="less" scoped>
.container {
    height: 100%;
}
</style>
