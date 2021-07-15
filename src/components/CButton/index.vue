<template>
    <button :class="defalutClassName" :size="size" :disabled="disabled" @click="btnClick">
        <div class="cs-btn-div">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    computed: {
        defalutClassName: function () {
            return `cs-button ${this.size} ${this.type} ${this.disabled}`
        }
    },
    name: 'CButton',
    props: {
        disabled: {
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }
    },
    data: function () {
        return {}
    },
    methods: {
        btnClick () {
            if (this.disabled != 'disabled') {
                this.$emit('click')
            } else {
                console.log('禁用了点击事件')
            }
        }
    }
}
</script>

<style lang="less">
@import 'index.less';
</style>
