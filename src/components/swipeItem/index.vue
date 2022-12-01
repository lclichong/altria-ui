<template>
    <div class="alt-slide-div">
        <slot></slot>
    </div>
</template>

<script>
import { createName } from '../utils/create-name'
export default {
    name: createName('swipe-item'),
    mounted() {
        this.$parent.childMounted++
        if (this.$parent.$slots.default.length === this.$parent.childMounted) {
            if (this.$parent.loop) {
                this.$parent.autoplay()
            }
            this.$parent.move()
        }
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
