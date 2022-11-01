<template>
    <button @click="btnClick" :class="defalutClassName" :size="size" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
import { createBem } from '../utils/create-bem.js'
export default {
    name: 'Button',
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
            default: 'medium',
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        defalutClassName: function () {
            const bem = createBem('cs-button')
            const result = bem(null, [this.type, { disabled: this.disabled, size: this.size, loading: this.loading }])
            return result.trim()
        },
    },
    data: function () {
        return {}
    },
    methods: {
        btnClick() {
            if (this.disabled || this.loading) {
                return
            }
            this.$emit('click')
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
