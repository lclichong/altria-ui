<template>
    <div class="container">
        <p>默认</p>
        <alt-loading></alt-loading>
        <p>类型</p>
        <alt-loading type="default"></alt-loading>
        <alt-loading type="success"></alt-loading>
        <alt-loading type="warning"></alt-loading>
        <alt-loading type="error"></alt-loading>
        <p>尺寸</p>
        <alt-loading type="default" size="mini"></alt-loading>
        <alt-loading type="success" size="small"></alt-loading>
        <alt-loading type="warning" size="medium"></alt-loading>
        <alt-loading type="error" size="large"></alt-loading>
        <p>样式</p>
        <alt-loading color="#77DFD6" load-type="default" />
        <alt-loading color="#77DFD6" load-type="circle" />
        <p>渐变样式</p>
        <alt-loading :color="['blue', 'red']" />
        <p>加载文案</p>
        <alt-loading load-type="circle" load-text="加载中..." />
        <alt-loading color="#9c27b0" load-type="circle" load-text="加载中..." />
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="less" scoped>
.container {
    height: 100%;
}
</style>
