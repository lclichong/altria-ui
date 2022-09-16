<template>
    <div class="c-dropdown-menu">
        <div class="c-dropdown-menu__bar">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropDownMenu',
}
</script>

<style lang="less">
@import 'index.less';
</style>