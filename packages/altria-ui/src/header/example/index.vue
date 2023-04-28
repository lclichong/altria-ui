<template>
    <div class="alt-container">
        <div class="demo">
            <p>基础用法</p>
            <alt-header title="标题"></alt-header>
        </div>
        <div class="demo">
            <p>左侧箭头和文本</p>
            <alt-header leftArrow leftText="返回" title="标题"></alt-header>
        </div>
        <div class="demo">
            <p>点击事件</p>
            <alt-header
                leftArrow
                leftText="返回"
                @click-left="onClickLeft"
                rightText="右边"
                @click-right="onClickRight"
                title="标题"
            ></alt-header>
        </div>
        <div class="demo">
            <p>插槽</p>
            <alt-header id="header" title="标题" height="46" @click-left="onClickLeft" @click-right="onClickRight">
                <template #left>
                    <alt-icon class="demo-icon__left" name="star-outline" size="17"></alt-icon>
                </template>
                <template #right>
                    <alt-icon class="demo-icon__right" name="heart-outline" size="17"></alt-icon>
                </template>
            </alt-header>
        </div>
    </div>
</template>

<script>
import AltIcon from '../../icon/'

export default {
    components: {
        AltIcon
    },
    methods: {
        onClickLeft() {
            this.$Dialog.alert({
                title: '提示',
                message: '左边'
            })
        },
        onClickRight() {
            this.$Dialog.alert({
                title: '提示',
                message: '右边'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    .demo {
        padding: 5vw 0 0;
    }

    .demo:last-child {
        padding-bottom: 5vw;
    }

    #header {
        --header-background-color: #4caf50;
        --header-title-color: #ffeb3b;
        --header-left-color: #ffeb3b;
        --header-right-color: #ffeb3b;
    }

    .demo-icon__left {
        margin-left: 5vw;
    }

    .demo-icon__right {
        margin-right: 5vw;
    }
}
</style>