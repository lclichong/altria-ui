<template>
    <div class="container">
        <alt-cell>
            <template slot="title">
                <alt-image width="80%" height="20vw" :src="image" fit="contain"></alt-image>
            </template>
            <template slot="value">
                <p>热门推荐</p>
                <p>热门推荐热门推荐热门推荐热门推荐热门推荐热门推荐</p>
                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
            </template>
        </alt-cell>
        <alt-cell>
            <template slot="title">
                <alt-image width="80%" height="20vw" :src="image" fit="cover"></alt-image>
            </template>
            <template slot="value">
                <p>热门推荐</p>
                <p>热门推荐热门推荐热门推荐热门推荐热门推荐热门推荐</p>
                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
            </template>
        </alt-cell>
        <alt-cell
            title="标题标题标题标题标题标题标题"
            value="内容内容内容内容内容内容内容内容内容内容内容内容"
        ></alt-cell>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: require('../assets/cat.jpg'),
        }
    },
}
</script>

<style lang="less">
.container {
    height: 100%;
}
</style>