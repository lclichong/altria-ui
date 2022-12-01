<template>
    <div @click="onClick" :class="[bem(), round ? bem('round') : '']" :style="style">
        <img :class="bem('img')" :src="src" :style="{ objectFit: fit }" />
    </div>
</template>

<script>
import { createName } from '../utils/create-name'
import { createBem } from '../utils/create-bem'

export default {
    name: createName('image'),
    created() {
        const bem = createBem('alt-image')
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