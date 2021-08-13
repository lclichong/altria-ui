<template>
    <div class="cs-input-div">
        <input
            ref="cInput"
            class="cs-input"
            @input="$emit('input', $event.target.value)"
            :value="value"
            :placeholder="placeholder"
        />
        <svg @click="clear" class="cs-input-remove" aria-hidden="true">
            <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Input',
    created() {},
    props: {
        placeholder: {
            type: String,
            default: '请输入',
        },
        value: {
            default: '',
        },
    },
    data: function () {
        return {}
    },
    methods: {
        clear() {
            this.value = ''
            this.$refs.cInput.focus()
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
