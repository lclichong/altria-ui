<template>
    <div class="c-container">
        <div class="c-demo">
            <Dialog confirm-button-text="提交" title="提示" v-model="show">显示Dialog</Dialog>
            <Button @click="showDialog" type="success">显示Dialog</Button>
        </div>
        <div class="c-demo">
            <Dialog v-model="show2" :overlay="false" title="提示" message="去掉Overlay"></Dialog>
            <Button @click="showDialog2" type="success">去掉Overlay</Button>
        </div>
        <div class="c-demo">
            <Button @click="showDialogAlert" type="success">this.$Dialog.alert的方式显示</Button>
        </div>
        <div class="c-demo">
            <Button @click="noTitle" type="success">无标题</Button>
        </div>
        <div class="c-demo">
            <Button @click="showDialogAlert2" type="success">this.$Dialog.alert的方式显示，去掉Overlay</Button>
        </div>
        <div class="c-demo">
            <Dialog title="提示" v-model="show3" :time="3000">三秒后隐藏Dialog</Dialog>
            <Button @click="show3 = true" type="success">三秒后隐藏Dialog</Button>
        </div>
        <div class="c-demo">
            <Button @click="showDialogAlert3" type="success">this.$Dialog.alert的方式显示，一秒后隐藏Dialog</Button>
        </div>
        <div class="c-demo">
            <Dialog ref="dialog" @confirm="confrim" title="提示" v-model="show4" beforeClose>confirm 一秒后隐藏</Dialog>
            <Button @click="show4 = true" type="success">confirm 一秒后隐藏</Button>
        </div>
        <div class="c-demo">
            <Button @click="showDialogAlert4" type="success">this.$Dialog.alert confirm 一秒后隐藏</Button>
        </div>
        <div class="c-demo">
            <Dialog :show-confirm-button="false" title="提示" v-model="show5">隐藏确定按钮</Dialog>
            <Button @click="show5 = true" type="success">隐藏确定按钮</Button>
        </div>
        <div class="c-demo">
            <Dialog ref="dialog2" show-cancel-button @cancel="cancel" @confirm="confirm2" title="提示" v-model="show6"
                >消息确认</Dialog
            >
            <Button @click="show6 = true" type="success">消息确认</Button>
        </div>
        <div class="c-demo">
            <Button @click="showDialogAlert5" type="success">this.$Dialog.confirm</Button>
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
            show4: false,
            show5: false,
            show6: false,
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
                title: '提示',
                message:
                    '素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆冉冉檀香透过窗心事我了然宣纸上走笔至此搁一半釉色渲染仕女图韵味被私藏而你嫣然的一笑如含苞待放你的美一缕飘散去到我去不了的地方 素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆冉冉檀香透过窗心事我了然宣纸上走笔至此搁一半釉色渲染仕女图韵味被私藏而你嫣然的一笑如含苞待放你的美一缕飘散去到我去不了的地方素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆冉冉檀香透过窗心事我了然宣纸上走笔至此搁一半釉色渲染仕女图韵味被私藏而你嫣然的一笑如含苞待放你的美一缕飘散去到我去不了的地方素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆冉冉檀香透过窗心事我了然宣纸上走笔至此搁一半釉色渲染仕女图韵味被私藏而你嫣然的一笑如含苞待放你的美一缕飘散去到我去不了的地方',
                confirmButtonText: '提交',
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
        noTitle() {
            this.$Dialog.alert({
                message: '内容',
            })
        },
        confrim() {
            console.log('confirm')
            setTimeout(() => {
                this.$refs.dialog.close()
            }, 1000)
        },
        showDialogAlert4() {
            this.$Dialog
                .alert({
                    title: '提示',
                    message: '素胚勾勒出青花笔锋浓转淡',
                    beforeClose: true,
                })
                .then((done) => {
                    console.log('then')
                    setTimeout(() => {
                        done()
                    }, 1000)
                })
        },
        confirm2() {
            console.log('confirm2')
        },
        cancel() {
            console.log('cancel')
            this.$refs.dialog2.close()
        },
        showDialogAlert5() {
            this.$Dialog
                .confirm({
                    title: '提示',
                    message: '素胚勾勒出青花笔锋浓转淡',
                })
                .then((action) => {
                    console.log(action)
                })
                .catch((action) => {
                    console.log(action)
                })
        },
    },
}
</script>

<style lang="less" scoped>
.c-container {
    height: 100%;
    overflow-y: scroll;

    button {
        margin-top: 10px;
    }
}
</style>
