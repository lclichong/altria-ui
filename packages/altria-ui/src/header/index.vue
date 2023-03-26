<template>
    <div :class="bem()" :style="style">
        <div v-if="leftArrow || leftText || $slots.left" @click="onClickLeft" :class="bem('left')">
            <template v-if="$slots.left">
                <slot v-if="$slots.left" name="left"></slot>
            </template>
            <template v-else>
                <div v-if="leftArrow" :class="bem('left__icon')"></div>
                <span v-if="leftText" :class="bem('left__text')">{{ leftText }}</span>
            </template>
        </div>
        <div v-if="rightText || $slots.right" @click="onClickRight" :class="bem('right')">
            <template v-if="$slots.right">
                <slot name="right"></slot>
            </template>
            <template v-else>
                <span v-if="rightText" :class="bem('right__text')">{{ rightText }}</span>
            </template>
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
            type: String
        },
        height: {
            type: String
        },
        leftText: {
            type: String
        },
        leftArrow: {
            type: Boolean,
            default: false
        },
        rightText: {
            type: String
        }
    },
    created() {
        this.bem = createBem('alt-header')
    },
    computed: {
        style() {
            const style = {}
            if (this.height) {
                style.height = isNaN(this.height) ? this.height : this.height + 'px'
            }
            return style
        }
    },
    data() {
        return {}
    },
    methods: {
        onClickLeft() {
            if (this._events['on-click-left']) {
                this.$emit('on-click-left')
            } else {
                this.$router ? this.$router.back() : window.history.back()
            }
        },
        onClickRight() {
            if (this._events['on-click-right']) {
                this.$emit('on-click-right')
            }
        }
    }
}
</script>

<style lang="less">
@import 'index.less';
</style>
