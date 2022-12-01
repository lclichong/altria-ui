<template>
    <div class="container">
        <p>默认</p>
        <alt-header title="标题"></alt-header>
        <p>leftArrow</p>
        <alt-header leftArrow title="标题"></alt-header>
        <p>leftText</p>
        <alt-header leftArrow leftText="返回" title="标题"></alt-header>
        <p>leftEvent</p>
        <alt-header leftArrow leftEvent @on-click-left="leftClick" title="标题"></alt-header>
        <alt-header
            class="mt-5vw"
            leftArrow
            leftEvent
            leftText="返回"
            @on-click-left="leftClick"
            title="标题"
        ></alt-header>
        <p>leftArrow rightArrow</p>
        <alt-header
            leftArrow
            rightArrow
            rightEvent
            rightText="右边"
            @on-click-right="rightClick"
            title="标题"
        ></alt-header>
        <p>自定义样式</p>
        <alt-header
            @on-click-left="leftClick"
            @on-click-right="rightClick"
            leftEvent
            rightEvent
            leftArrow
            leftText="返回"
            rightArrow
            rightText="右边"
            id="header"
            title="标题"
            height="46px"
        ></alt-header>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        leftClick() {
            this.$Dialog.alert({
                title: '提示',
                message: '左边',
            })
        },
        rightClick() {
            this.$Dialog.alert({
                title: '提示',
                message: '右边',
            })
        },
    },
}
</script>

<style lang="less" scoped>
.container {
    height: 100%;

    #header {
        --header-background-color: #4caf50;
        --header-title-color: #ffeb3b;
        --header-left-color: #ffeb3b;
        --header-right-color: #ffeb3b;
    }
}
</style>
