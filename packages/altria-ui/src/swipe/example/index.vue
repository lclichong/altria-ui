<template>
    <div class="alt-container">
        <p>默认</p>
        <alt-swipe>
            <alt-swipe-item>1</alt-swipe-item>
            <alt-swipe-item>2</alt-swipe-item>
            <alt-swipe-item>3</alt-swipe-item>
            <alt-swipe-item>4</alt-swipe-item>
        </alt-swipe>
        <p>轮播</p>
        <alt-swipe :autoplay="autoplay">
            <alt-swipe-item v-for="(img, key) in images" :key="key">
                <img :src="img.url" />
            </alt-swipe-item>
        </alt-swipe>
        <p>禁止循环轮播</p>
        <alt-swipe :loop="false">
            <alt-swipe-item v-for="(img, key) in images" :key="key">
                <img :src="img.url" />
            </alt-swipe-item>
        </alt-swipe>
        <p>不显示指示器</p>
        <alt-swipe :show-indicators="false">
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
                    url: require('../../../public/slide1.jpg')
                },
                {
                    url: require('../../../public/slide2.jpg')
                },
                {
                    url: require('../../../public/slide3.jpg')
                }
            ],
            autoplay: 2000
        }
    }
}
</script>


<style lang="less" scoped>
.alt-container {
    p {
        line-height: 35px;
        margin-top: 10px;
    }
    .alt-swipe {
        &-item {
            line-height: 150px;
            color: #fff;
            text-align: center;
            img {
                display: block;
                background-color: #fff;
            }
        }
        &-item:nth-child(even) {
            background-color: #4caf50;
        }
        &-item:nth-child(odd) {
            background-color: #ff9800;
        }
    }

    .alt-swipe:last-child {
        padding-bottom: 5vw;
    }
}
</style>