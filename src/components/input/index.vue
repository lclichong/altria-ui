<template>
    <alt-cell>
        {{ $slots.label }}
        <template v-if="label" slot="title">
            <div :class="bem('label', { disabled: disabled })">{{ label }}</div>
        </template>
        <template slot="value">
            <div :class="bem()">
                <input
                    :readonly="readonly"
                    :disabled="disabled"
                    :type="setType"
                    ref="altInput"
                    :class="bem('input')"
                    @input="input"
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
    computed: {
        setType() {
            return this.type !== 'digit' ? this.type : null
        },
    },
    props: {
        value: {
            type: [Number, String],
            default: '',
        },
        placeholder: {
            type: String,
            default: '请输入',
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
        },
        type: {
            type: String,
            default: 'text',
        },
        disabled: {
            type: Boolean,
            default: null,
        },
        readonly: {
            type: Boolean,
            default: null,
        },
    },
    watch: {
        value(newVal) {
            this.val = newVal
        },
    },
    data() {
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
        input() {
            if (this.type === 'digit') {
                this.val = this.val.replace(/^(0+)|[^\d]+/g, '')
            }
            this.$emit('input', this.val)
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
