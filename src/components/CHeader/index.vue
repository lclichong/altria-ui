<template>
    <div class="c-header" :style="{ height: height }">
        <div v-if="leftArrow" @click="onClickLeft" class="c-header__left">
            <div class="c-header__left__icon"></div>
            <span v-if="leftText" class="c-header__left__text">{{ leftText }}</span>
        </div>
        <div v-if="rightArrow" @click="onClickRight" class="c-header__right">
            <span v-if="rightText" class="c-header__right__text">{{ rightText }}</span>
        </div>
        <span class="c-header__title">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
        },
        height: {
            type: String,
        },
        leftText: {
            type: String,
        },
        leftArrow: {
            type: Boolean,
            default: false,
        },
        leftEvent: {
            type: Boolean,
            default: false,
        },
        rightText: {
            type: String,
        },
        rightArrow: {
            type: Boolean,
            default: false,
        },
        rightEvent: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {}
    },
    methods: {
        onClickLeft() {
            if (this.leftEvent) {
                this.$emit('on-click-left')
            } else {
                this.$router ? this.$router.back() : window.history.back()
            }
        },
        onClickRight() {
            if (this.rightEvent) {
                this.$emit('on-click-right')
            }
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
