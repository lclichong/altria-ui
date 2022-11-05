<template>
    <div class="c-dropdown-menu">
        <div :class="['c-dropdown-menu__bar', itemShow ? 'c-dropdown-menu__bar--hide--shadow': '']">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropDownMenu',
    data: function () {
        return {
            itemShow: false
        }
    }
}
</script>

<style lang="less">
@import 'index.less';
</style>