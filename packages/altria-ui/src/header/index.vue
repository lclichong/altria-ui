<template>
    <div :class="bem()" :style="{ height: height }">
        <div v-if="leftArrow" @click="onClickLeft" :class="bem('left')">
            <div :class="bem('left__icon')"></div>
            <span v-if="leftText" :class="bem('left__text')">{{ leftText }}</span>
        </div>
        <div v-if="rightArrow" @click="onClickRight" :class="bem('right')">
            <span v-if="rightText" :class="bem('right__text')">{{ rightText }}</span>
        </div>
        <span :class="bem('title')">{{ title }}</span>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('header'),
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
    created() {
        this.bem = createBem('alt-header')
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
