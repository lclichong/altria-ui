<template>
    <div class="c-container">
        <div>
            <Popup v-model="show">
                <div class="content">内容内容内容内容内容内容内容</div>
            </Popup>
            <Button @click="show = !show" type="success">显示Popup</Button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            show: false,
        }
    },
    methods: {},
}
</script>

<style lang="less" scoped>
.c-container {
    height: 100%;
    .content {
        padding: 20px 24px;
        width: 250px;
        background-color: #fff;
    }
}
</style>
