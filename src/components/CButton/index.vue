<template>
    <button @click="btnClick" :class="defalutClassName" :size="size" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    computed: {
        defalutClassName: function () {
            return `cs-button ${this.size} ${this.type} ${this.disabled ? this.disabled : ''}`.trim()
        },
    },
    props: {
        disabled: {
            default: null,
        },
        type: {
            type: String,
            default: 'primary',
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
            if (this.disabled != 'disabled') {
                this.$emit('click')
            } else {
                console.log('禁用了点击事件')
            }
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
