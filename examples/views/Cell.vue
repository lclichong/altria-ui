<template>
    <div class="c-container">
        <Cell>
            <template slot="title">
                <cue-image width="80%" height="20vw" :src="image" fit="contain"></cue-image>
            </template>
            <template slot="value">
                <p>热门推荐</p>
                <p>热门推荐热门推荐热门推荐热门推荐热门推荐热门推荐</p>
                <p>内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
            </template>
        </Cell>
        <Cell>
            <template slot="title">
                <cue-image width="80%" height="20vw" :src="image" fit="cover"></cue-image>
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
        return {
            image: require('../assets/cat.jpg'),
        }
    },
}
</script>

<style lang="less">
</style>