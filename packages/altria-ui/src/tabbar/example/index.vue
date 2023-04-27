<template>
    <div class="alt-container">
        <div class="demo">
            <p>基础用法</p>
            <alt-tabbar v-model="active">
                <alt-tabbar-item icon="home-outline">标签</alt-tabbar-item>
                <alt-tabbar-item icon="magnify">标签</alt-tabbar-item>
                <alt-tabbar-item icon="account-circle-outline">标签</alt-tabbar-item>
                <alt-tabbar-item icon="cog-outline">标签</alt-tabbar-item>
            </alt-tabbar>
        </div>
        <div class="demo">
            <p>通过名称匹配</p>
            <alt-tabbar v-model="active2">
                <alt-tabbar-item name="home" icon="home-outline">标签</alt-tabbar-item>
                <alt-tabbar-item name="search" icon="magnify">标签</alt-tabbar-item>
                <alt-tabbar-item name="friends" icon="account-circle-outline">标签</alt-tabbar-item>
                <alt-tabbar-item name="setting" icon="cog-outline">标签</alt-tabbar-item>
            </alt-tabbar>
        </div>
        <div class="demo">
            <p>徽标</p>
            <alt-tabbar v-model="active3">
                <alt-tabbar-item icon="home-outline">标签</alt-tabbar-item>
                <alt-tabbar-item icon="magnify" dot>标签</alt-tabbar-item>
                <alt-tabbar-item icon="account-circle-outline" badge="5">标签</alt-tabbar-item>
                <alt-tabbar-item icon="cog-outline" badge="99">标签</alt-tabbar-item>
            </alt-tabbar>
        </div>
        <div class="demo">
            <p>自定义颜色</p>
            <alt-tabbar v-model="active4" active-color="#ba68c8">
                <alt-tabbar-item icon="home-outline">标签</alt-tabbar-item>
                <alt-tabbar-item icon="magnify">标签</alt-tabbar-item>
                <alt-tabbar-item icon="account-circle-outline">标签</alt-tabbar-item>
                <alt-tabbar-item icon="cog-outline">标签</alt-tabbar-item>
            </alt-tabbar>
        </div>
        <div class="demo">
            <p>点击事件</p>
            <alt-tabbar v-model="active5">
                <alt-tabbar-item @click="handleClick" icon="home-outline">标签</alt-tabbar-item>
                <alt-tabbar-item @click="handleClick" icon="magnify">标签</alt-tabbar-item>
                <alt-tabbar-item @click="handleClick" icon="account-circle-outline">标签</alt-tabbar-item>
                <alt-tabbar-item @click="handleClick" icon="cog-outline">标签</alt-tabbar-item>
            </alt-tabbar>
        </div>
        <div class="demo">
            <p>切换事件</p>
            <alt-tabbar v-model="active6" @change="handleChange">
                <alt-tabbar-item icon="home-outline">标签</alt-tabbar-item>
                <alt-tabbar-item icon="magnify">标签</alt-tabbar-item>
                <alt-tabbar-item icon="account-circle-outline">标签</alt-tabbar-item>
                <alt-tabbar-item icon="cog-outline">标签</alt-tabbar-item>
            </alt-tabbar>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            active2: 'friends',
            active3: 1,
            active4: 0,
            active5: 0,
            active6: 0
        }
    },
    methods: {
        handleClick(active) {
            this.$Dialog.alert({
                title: '提示',
                message: 'clicked ' + active
            })
        },
        handleChange(active) {
            this.$Dialog.alert({
                title: '提示',
                message: 'changed to ' + active
            })
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    .alt-tabbar {
        position: relative;
    }
    .demo {
        padding: 5vw 0 0;
        p {
            text-align: left;
            margin-left: 5vw;
        }
    }
}
</style>