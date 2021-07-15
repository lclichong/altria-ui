<template>
    <div class="cs-header" :style="{ height: height }">
        <div @click="onClickBack" v-if="showBack" class="cs-back-div">
            <div class="cs-left-arrow"></div>
            <span class="cs-left-span" v-if="showBackText">{{ backText }}</span>
        </div>
        <span class="cs-header-title">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'Header',
    mounted () {

    },
    props: {
        title: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        },
        backText: {
            type: String,
            default: '返回'
        },
        showBack: {
            type: Boolean,
            default: false
        },
        showBackText: {
            type: Boolean,
            default: false
        },
        preventGoBack: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {

        }
    },
    methods: {
        onClickBack () {
            if (this.preventGoBack) {
                this.$emit('on-click-back')
            } else {
                this.$router ? this.$router.back() : window.history.back()
            }
        }
    }
}
</script>

<style lang="less">
// @import 'index.less';
</style>
