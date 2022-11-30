<template>
    <div :class="defalutClassName">
        <div v-if="title" class="c-cell__title">{{ title }}</div>
        <div v-if="value" class="c-cell__value">{{ value }}</div>
        <div v-if="$slots.title" class="c-cell__title">
            <slot name="title"></slot>
        </div>
        <div v-if="$slots.value" class="c-cell__value">
            <slot name="value"></slot>
        </div>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem.js'

export default {
    name: 'Cell',
    computed: {
        defalutClassName() {
            let bem = createBem('c-cell')
            let className = bem()
            let soltClassName = this.$slots['title'] || this.$slots['value'] ? bem('image') : ''
            if (soltClassName) {
                className = className + ' ' + soltClassName
            }
            return className
        },
    },
    props: {
        title: {
            defalut: '',
            type: String,
        },
        value: {
            defalut: '',
            type: String,
        },
        image: {
            default: false,
            type: Boolean,
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
