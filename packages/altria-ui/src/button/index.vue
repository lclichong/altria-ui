<template>
    <button @click="handleClick" :class="setButtonClasses" :style="{ background: color }" :disabled="disabled">
        <slot></slot>
        <template v-if="loading">
            <alt-button-loading :type="type" :load-type="loadType" :load-color="loadColor" :load-text="loadText"></alt-button-loading>
        </template>
    </button>
</template>

<script>
import { createBem } from '../utils/create-bem'
import { createName } from '../utils/create-name'
import AltButtonLoading from './button-loading.vue'

export default {
    name: createName('button'),
    components: {
        AltButtonLoading
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'medium'
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadType: {
            type: String,
            default: 'default'
        },
        loadColor: {
            type: String
        },
        loadText: {
            type: String
        },
        shadow: {
            type: Boolean,
            default: false
        },
        color: {
            type: String
        }
    },
    computed: {
        setButtonClasses() {
            const bem = createBem('alt-button')
            const result = bem(null, [
                this.type,
                { disabled: this.disabled, size: this.size, loading: this.loading, shadow: this.shadow }
            ])
            return result.trim()
        }
    },
    data() {
        return {}
    },
    methods: {
        handleClick(event) {
            if (this.disabled || this.loading) {
                return
            }
            this.$emit('click', event)
        }
    }
}
</script>

<style lang="less">
@import 'index.less';
</style>
