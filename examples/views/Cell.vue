<template>
    <div class="c-container">
        <Cell v-for="(l, key) in 3" :key="key">
            <template slot="title">
                <img src="../assets/slidea.jpg" />
            </template>
            <template slot="value">
                <p>热门推荐</p>
                <p>热门推荐热门推荐热门推荐热门推荐热门推荐热门推荐</p>
                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
            </template>
        </Cell>
        <Cell title="标题标题标题标题标题标题标题" value="内容内容内容内容内容内容内容内容内容内容内容内容"></Cell>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style lang="less">
</style>