<template>
    <div class="cs-slide-div">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SwipeItem',
    created() {},
    mounted() {
        this.$parent.childMounted++
        if (this.$parent.$slots.default.length === this.$parent.childMounted) {
            this.$parent.initSwipe()
        }
    },
    props: {
        speed: {},
    },
    data: function () {
        return {}
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
