<template>
    <div class="c-container">
        <div class="c-demo">
            <Popup v-model="show">
                <div class="content">内容内容内容内容内容内容内容</div>
            </Popup>
            <Button @click="show = !show" type="success">显示Popup</Button>
        </div>
        <div class="c-demo">
            <Popup v-model="show2">
                <div class="content">123</div>
            </Popup>
            <Button @click="show2 = !show2" type="success">显示Popup</Button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            show: false,
            show2: false
        }
    },
    methods: {
        open() {}
    }
}
</script>

<style lang="less" scoped>
.c-container {
    height: 100%;
    .c-demo {
        padding: 5vw;
    }
    .content {
        padding: 20px 24px;
        width: 250px;
        background-color: #fff;
    }
}
</style>
