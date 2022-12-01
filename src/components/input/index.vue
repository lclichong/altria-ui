<template>
    <div class="cs-input-div">
        <input
            ref="cInput"
            class="cs-input"
            @input="$emit('update:value', $event.target.value)"
            v-model="val"
            :placeholder="placeholder"
            @keyup.enter="query"
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
    watch: {
        value(newVal) {
            this.val = newVal
        },
    },
    data: function () {
        return {
            val: this.value,
        }
    },
    methods: {
        clear() {
            this.val = ''
            this.$emit('update:value', '')
            this.$refs.cInput.focus()
        },
        query() {
            this.$emit('enter', this.val)
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
