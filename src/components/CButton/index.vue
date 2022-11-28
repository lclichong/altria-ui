<template>
    <button @click="btnClick" :class="defalutClassName" :disabled="disabled">
        <slot></slot>
        <template v-if="loading">
            <ButtonLoading :type="type" :loadType="loadType" :loadingColor="loadingColor"></ButtonLoading>
        </template>
    </button>
</template>

<script>
import { createBem } from '../utils/create-bem.js'
export default {
    name: 'Button',
    props: {
        disabled: {
            type: Boolean,
            default: false,
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
        loadType: {
            type: String,
            default: 'default',
        },
        shadow: {
            type: Boolean,
            default: false,
        },
        loadingColor: {
            type: String,
        },
    },
    computed: {
        defalutClassName() {
            const bem = createBem('c-button')
            const result = bem(null, [
                this.type,
                { disabled: this.disabled, size: this.size, loading: this.loading, shadow: this.shadow },
            ])
            return result.trim()
        },
    },
    data() {
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
