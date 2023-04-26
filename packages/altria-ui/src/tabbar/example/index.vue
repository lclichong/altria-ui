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
            <alt-button style="margin-top: 30px" @click="getActive" type="success">获取值</alt-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            active2: 'home',
            active3: 1
        }
    },
    methods: {
        getActive() {
            console.log('active', this.active)
            console.log('active2', this.active2)
            console.log('active3', this.active3)
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    .demo {
        p {
            text-align: left;
            margin-left: 5vw;
            margin-top: 3vw;
            margin-bottom: 1vw;
        }
        padding: 0px;
    }
}
</style>