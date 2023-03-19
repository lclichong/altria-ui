<template>
    <div class="alt-container">
        <div class="demo">
            <p>基础用法</p>
            <alt-image width="100" height="80" src="https://images.dog.ceo/breeds/corgi-cardigan/n02113186_9924.jpg"></alt-image>
        </div>
        <div class="demo">
            <p>填充模式</p>
            <div class="demo-flex">
                <div>
                    <alt-image width="85" height="85" :src="image" fit="contain"></alt-image>
                    <p>contain</p>
                </div>
                <div>
                    <alt-image width="85" height="85" :src="image" fit="cover"></alt-image>
                    <p>cover</p>
                </div>
                <div>
                    <alt-image width="85" height="85" :src="image" fit="fill"></alt-image>
                    <p>fill</p>
                </div>
            </div>
        </div>
        <div class="demo">
            <p>圆形图片</p>
            <alt-image round width="100" height="100" :src="image"></alt-image>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_9924.jpg'
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    height: 100%;

    .demo,
    p {
        text-align: left;
    }

    .demo-flex {
        display: flex;
        justify-content: space-around;
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>