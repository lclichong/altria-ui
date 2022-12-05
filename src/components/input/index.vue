<template>
    <alt-cell :class="bem('cell')">
        {{ $slots.label }}
        <template v-if="label" slot="title">
            <label :class="bem('label', { disabled: disabled })">{{ label }}</label>
        </template>
        <template slot="value">
            <div v-if="type !== 'textarea'" :class="bem()">
                <div :class="bem('wrapper')">
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
                    <div v-if="clearable && value" @click="clear" :class="bem('input--clear')">
                        <svg aria-hidden="true">
                            <use xlink:href="#icon-shanchu" />
                        </svg>
                    </div>
                </div>
                <slot name="button"></slot>
            </div>
            <div v-if="type === 'textarea'" class="alt-textarea__wrapper">
                <textarea
                    @input="input"
                    :rows="rows"
                    v-model="val"
                    :placeholder="placeholder"
                    class="alt-textarea"
                ></textarea>
            </div>
            <div v-if="error" class="alt-input--error">{{ errorText }}</div>
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
        validate: {
            type: Object,
        },
        rows: {
            type: String,
            default: '1',
        },
    },
    watch: {
        value(newVal) {
            this.val = newVal
            this.vali()
        },
        validate: {
            handler(newVal) {
                if (newVal) {
                    this.vali()
                }
            },
            immediate: true,
        },
    },
    data() {
        return {
            val: this.value,
            error: false,
            errorText: '',
        }
    },
    methods: {
        clear() {
            this.$emit('input', '')
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
        vali() {
            if (!this.validate) {
                return
            }
            if (this.validate.noEmpty != undefined && this.validate.noEmpty && !this.value) {
                this.errorText = this.validate.errorText
                this.error = true
            } else if (this.validate.reg) {
                if (!this.validate.reg.val.test(this.value)) {
                    this.errorText = this.validate.reg.errorText
                    this.error = true
                } else {
                    this.error = false
                }
            } else {
                this.error = false
            }
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
