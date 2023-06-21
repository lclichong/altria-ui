<template>
    <i @click="handleClick" :class="['alt-icon', 'alt-icon--set', 'alt-icon-' + name]" :style="setStyle"></i>
</template>

<script>
import { createName } from '../utils/create-name'

export default {
    name: createName('icon'),
    props: {
        name: {
            type: String
        },
        size: {
            type: [String, Number]
        },
        color: {
            type: String
        }
    },
    computed: {
        setStyle() {
            return {
                color: this.color,
                fontSize: this.size + 'px'
            }
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