<template>
    <div class="alt-container">
        <div class="demo">
            <p>基础用法</p>
            <alt-loading></alt-loading>
        </div>
        <div class="demo">
            <p>尺寸</p>
            <alt-loading color="#333" size="mini"></alt-loading>
            <alt-loading color="#1989fa" size="small"></alt-loading>
            <alt-loading color="#ff976a" size="medium"></alt-loading>
            <alt-loading color="#ee0a24" size="large"></alt-loading>
        </div>
        <div class="demo">
            <p>加载类型</p>
            <alt-loading color="#77DFD6" load-type="default" />
            <alt-loading color="#77DFD6" load-type="circle" />
        </div>
        <div class="demo">
            <p>渐变</p>
            <alt-loading :color="['green', 'yellow']" size="large" />
        </div>
        <div class="demo">
            <p>加载文案</p>
            <alt-loading load-type="circle" load-text="加载中..." />
            <alt-loading color="#9c27b0" load-type="circle" load-text="加载中..." />
        </div>
    </div>
</template>

<style lang="less" scoped>
.alt-container {
    .demo {
        .alt-loading:not(:nth-child(2)) {
            margin-left: 10px;
        }
    }
}
</style>