<template>
    <div class="c-container">
        <p>默认</p>
        <Header title="标题"></Header>
        <p>leftArrow</p>
        <Header leftArrow title="标题"></Header>
        <p>leftText</p>
        <Header leftArrow leftText="返回" title="标题"></Header>
        <p>leftEvent</p>
        <Header leftArrow leftEvent @on-click-left="leftClick" title="标题"></Header>
        <Header class="c-mt-5vw" leftArrow leftEvent leftText="返回" @on-click-left="leftClick" title="标题"></Header>
        <p>leftArrow rightArrow</p>
        <Header leftArrow rightArrow rightEvent rightText="右边" @on-click-right="rightClick" title="标题"></Header>
        <p>自定义样式</p>
        <Header title="标题" height="46px"></Header>
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
.c-container {
    height: 100%;
}
</style>
