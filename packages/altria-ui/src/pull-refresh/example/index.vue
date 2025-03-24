<template>
    <div class="alt-container">
        <alt-pull-refresh v-model="refreshing" @onRefresh="onRefresh">
            <div class="refresh-content">刷新次数：{{ count }}</div>
        </alt-pull-refresh>
    </div>
</template>

<script>
export default {
    data() {
        return {
            refreshing: false,
            count: 0
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.refreshing = false
                this.count++
            }, 1200)
        }
    }
}
</script>

<style scoped>
.alt-container {
    padding: 20px;
}
</style>