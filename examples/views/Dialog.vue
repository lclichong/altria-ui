<template>
    <div class="c-container">
        <div class="c-b">
            <Dialog v-model="show">显示Dialog</Dialog>
            <Button @click="showDialog" type="success">显示Dialog</Button>
        </div>
        <div class="c-b">
            <Dialog v-model="show2" :overlay="false" title="提示" message="去掉Overlay"></Dialog>
            <Button @click="showDialog2" type="success">去掉Overlay</Button>
        </div>
        <div class="c-b">
            <Button @click="showDialogAlert" type="success">this.$Dialog.alert的方式显示</Button>
        </div>
        <div class="c-b">
            <Button @click="showDialogAlert2" type="success">this.$Dialog.alert的方式显示，去掉Overlay</Button>
        </div>
        <div class="c-b">
            <Dialog v-model="show3" :time="3000">三秒后隐藏Dialog</Dialog>
            <Button @click="show3 = true" type="success">三秒后隐藏Dialog</Button>
        </div>
        <div class="c-b">
            <Button @click="showDialogAlert3" type="success">this.$Dialog.alert的方式显示，一秒后隐藏Dialog</Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            show2: false,
            show3: false,
        }
    },
    methods: {
        showDialog() {
            this.show = true
        },
        showDialog2() {
            this.show2 = true
        },
        showDialogAlert() {
            this.$Dialog.alert({
                title: '标题',
                message: 'this.$Dialog.alert的方式显示',
            })
        },
        showDialogAlert2() {
            this.$Dialog.alert({
                title: '提示',
                message: 'this.$Dialog.alert的方式显示，去掉Overlay',
                overlay: false,
            })
        },
        showDialogAlert3() {
            this.$Dialog.alert({
                title: '提示',
                message: '一秒后隐藏Dialog',
                time: 1000,
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
