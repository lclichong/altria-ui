<template>
    <div @click="handleClick" :class="[bem(), round ? bem('round') : '']" :style="style">
        <img :class="bem('img')" :src="src" :alt="alt" :style="{ objectFit: fit }" />
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
                style.width = isNaN(this.width) ? this.width : this.width + 'px'
            }
            if (this.height) {
                style.height = isNaN(this.height) ? this.height : this.height + 'px'
            }
            return style
        }
    },
    props: {
        width: {
            type: [String, Number]
        },
        height: {
            type: [String, Number]
        },
        fit: {
            type: String,
            default: 'fill'
        },
        src: {
            type: String
        },
        alt: {
            type: String
        },
        round: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event)
        }
    }
}
</script>

<!-- <style lang="less">
@import 'index.less';
</style> -->