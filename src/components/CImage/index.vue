<template>
    <div @click="onClick" :class="[bem(), round ? bem('round') : '']" :style="style">
        <img :class="bem('img')" :src="src" :style="{ objectFit: fit }" />
    </div>
</template>

<script>
import { createNamespace } from '../utils/createNamespace'

export default {
    name: createNamespace('image').name,
    created() {
        const { createBem: bem } = createNamespace('image')
        this.bem = bem
    },
    computed: {
        style() {
            const style = {}
            if (this.width) {
                style.width = this.width
            }
            if (this.height) {
                style.height = this.height
            }
            return style
        },
    },
    props: {
        width: {
            type: String,
        },
        height: {
            type: String,
        },
        fit: {
            type: String,
        },
        src: {
            type: String,
        },
        round: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClick(event) {
            this.$emit('click', event)
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>