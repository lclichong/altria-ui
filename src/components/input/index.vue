<template>
    <alt-cell>
        {{ $slots.label }}
        <template v-if="label" slot="title">
            <div :class="bem('label')">{{ label }}</div>
        </template>
        <template slot="value">
            <div :class="bem()">
                <input
                    ref="altInput"
                    :class="bem('input')"
                    @input="$emit('update:value', $event.target.value)"
                    v-model="val"
                    :placeholder="placeholder"
                    @keyup.enter="query"
                />
                <svg v-if="clearable" @click="clear" :class="bem('input--clear')" aria-hidden="true">
                    <use xlink:href="#icon-shanchu"></use>
                </svg>
            </div>
        </template>
    </alt-cell>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'

export default {
    name: createName('input'),
    created() {
        this.bem = createBem('alt-input')
    },
    props: {
        placeholder: {
            type: String,
            default: '请输入',
        },
        value: {
            default: '',
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
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
            this.$refs.altInput.focus()
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
