<template>
    <div :class="defalutClassName">
        <div v-if="title" :class="bem('title')">{{ title }}</div>
        <div v-if="value" :class="bem('value')">{{ value }}</div>
        <div v-if="$slots.title" :class="bem('title')">
            <slot name="title"></slot>
        </div>
        <div v-if="$slots.value" :class="bem('value')">
            <slot name="value"></slot>
        </div>
    </div>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    created() {
        this.bem = createBem('alt-cell')
    },
    name: createName('cell'),
    computed: {
        defalutClassName() {
            let className = this.bem()
            let soltClassName = this.$slots['title'] || this.$slots['value'] ? this.bem('image') : ''
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
