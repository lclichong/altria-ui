<template>
    <div class="c-container">
        <div class="c-demo">
            <p>默认</p>
            <cue-image @click="imgClick" width="100px" height="100px" :src="image"></cue-image>
        </div>
        <div class="c-demo">
            <p>contain</p>
            <cue-image width="50vw" height="20vw" :src="image" fit="contain"></cue-image>
            <p>cover</p>
            <cue-image width="50vw" height="20vw" :src="image" fit="cover"></cue-image>
            <p>fill</p>
            <cue-image width="50vw" height="27vw" :src="image" fit="fill"></cue-image>
        </div>
        <p>圆形图片</p>
        <div class="c-demo">
            <cue-image @click="imgClick" round width="100px" height="100px" :src="image"></cue-image>
        </div>
        <div class="c-demo">
            <cue-image round width="50vw" height="20vw" :src="image" fit="contain"></cue-image>
        </div>
        <div class="c-demo">
            <cue-image round width="50vw" height="20vw" :src="image" fit="cover"></cue-image>
        </div>
        <div class="c-demo">
            <cue-image round width="50vw" height="27vw" :src="image" fit="fill"></cue-image>
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
.c-container {
    height: 100%;
}
</style>
