<template>
    <div class="container">
        <Header title="CUI" height="46px" showBack></Header>
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
    data() {
        return {
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