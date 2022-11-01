<template>
    <div class="c-container">
        <p>默认</p>
        <Loading></Loading>
        <p>类型</p>
        <Loading type="default"></Loading>
        <Loading type="success"></Loading>
        <Loading type="warning"></Loading>
        <Loading type="error"></Loading>
        <p>尺寸</p>
        <Loading type="default" size="mini"></Loading>
        <Loading type="success" size="small"></Loading>
        <Loading type="warning" size="medium"></Loading>
        <Loading type="error" size="large"></Loading>
        <p>样式</p>
        <Loading color="#77DFD6" load-type="default" />
        <Loading color="#77DFD6" load-type="circle" />
        <p>渐变样式</p>
        <Loading :color="['blue', 'red']" />
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
.c-loading-container {
    height: 0px;
}
</style>
