<template>
    <div class="cs-slide-div">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SwipeItem',
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
