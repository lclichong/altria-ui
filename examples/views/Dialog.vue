<template>
    <div class="c-container">
        <div class="c-b">
            <Dialog v-model="show">内容</Dialog>
            <Button @click="showDialog" type="success">显示Dialog</Button>
        </div>
        <div class="c-b">
            <Button @click="showDialogAlert" type="success">this.$Dialog.alert的方式显示</Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    methods: {
        showDialog() {
            this.show = true
        },
        showDialogAlert() {
            this.$Dialog.alert({
                title: '标题',
                message: '内容内容内容内容',
                overlay: false,
            })
        },
    },
}
</script>

<style lang="less" scoped>
.c-container {
    height: 100%;
    overflow-y: scroll;
    .c-b {
        margin: 5vw 0;
    }

    button {
        margin-top: 10px;
    }
}
</style>
