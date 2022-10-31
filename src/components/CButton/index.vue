<template>
    <button @click="btnClick" :class="defalutClassName" :size="size" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
import { createBem } from '../utils/create-bem.js'
export default {
    name: 'Button',
    computed: {
        defalutClassName: function () {
            const bem = createBem('cs-button')
            const result = bem(null, [this.type, { disabled: this.disabled, size: this.size }])
            return result.trim()
        },
    },
    props: {
        disabled: {
            default: null,
        },
        type: {
            type: String,
            default: 'default',
        },
        size: {
            type: String,
            default: 'large',
        },
    },
    data: function () {
        return {}
    },
    methods: {
        btnClick() {
            this.$emit('click')
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
