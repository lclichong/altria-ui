<template>
    <div class="container">
        <p>默认</p>
        <alt-input v-model="val"></alt-input>
        <p>清除</p>
        <alt-input label="文本" clearable v-model="val"></alt-input>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            val: '',
        }
    },
    methods: {},
}
</script>

<style lang="less" scoped>
.container {
    height: 100%;
}
</style>
