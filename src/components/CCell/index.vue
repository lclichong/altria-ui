<template>
    <div :class="[noBorder ? 'cs-cell-no-border' : '', imgList ? 'cs-cell-img-list' : 'cs-cell']">
        <div v-if="title" class="cs-cell-title">{{ title }}</div>
        <div v-if="value" class="cs-cell-value">{{ value }}</div>
        <div v-if="$slots.title" class="cs-cell-title">
            <slot name="title"></slot>
        </div>
        <div v-if="$slots.value" class="cs-cell-value">
            <slot name="value"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cell',
    created() {},
    props: {
        title: {
            defalut: '',
            type: String,
        },
        value: {
            defalut: '',
            type: String,
        },
        noBorder: {
            default: false,
            type: Boolean,
        },
        imgList: {
            default: false,
            type: Boolean,
        },
    },
}
</script>

<style lang="less">
@import 'index.less';
</style>
