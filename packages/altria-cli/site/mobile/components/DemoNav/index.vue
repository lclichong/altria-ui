<template>
    <div v-show="title" class="alt-doc__demo-nav">
        <svg class="demo-nav__back" viewBox="0 0 1000 1000" @click="onBack">
            <path fill="#969799" fill-rule="evenodd" :d="path" />
        </svg>
        <span class="demo-nav__title">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'DemoNav',
    computed: {
        title() {
            const { name } = this.$route.meta || {}
            return name ? name.replace(/-/g, '') : ''
        }
    },
    methods: {
        onBack() {
            this.$router.replace('/')
        }
    },
    data() {
        return {
            path: 'M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z'
        }
    }
}
</script>

<style lang="less">
.alt-doc__demo-nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    background: #fff;

    .demo-nav__title {
        font-size: 17px;
        font-weight: 600;
    }

    .demo-nav__back {
        position: absolute;
        top: 0px;
        bottom: 0px;
        margin: auto;
        left: 16px;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
}
</style>