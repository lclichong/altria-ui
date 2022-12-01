<template>
    <div class="container">
        <div class="demo">
            <alt-dialog confirm-button-text="提交" title="提示" v-model="show">显示Dialog</alt-dialog>
            <alt-button @click="showDialog" type="success">显示Dialog</alt-button>
        </div>
        <div class="demo">
            <alt-dialog v-model="show2" :overlay="false" title="提示" message="去掉Overlay"></alt-dialog>
            <alt-button @click="showDialog2" type="success">去掉Overlay</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogAlert" type="success">this.$Dialog.alert的方式显示</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="noTitle" type="success">无标题</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogAlert2" type="success">this.$Dialog.alert的方式显示，去掉Overlay</alt-button>
        </div>
        <div class="demo">
            <alt-dialog title="提示" v-model="show3" :time="3000">三秒后隐藏Dialog</alt-dialog>
            <alt-button @click="show3 = true" type="success">三秒后隐藏Dialog</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogAlert3" type="success"
                >this.$Dialog.alert的方式显示，一秒后隐藏Dialog</alt-button
            >
        </div>
        <div class="demo">
            <alt-dialog @confirm="confrim" title="提示" v-model="show4" :beforeClose="beforeClose"
                >Dialog.alert beforeClose 一秒后隐藏</alt-dialog
            >
            <alt-button @click="show4 = true" type="success">Dialog.alert beforeClose 一秒后隐藏</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogAlert4" type="success">this.$Dialog.alert beforeClose 两秒后隐藏</alt-button>
        </div>
        <div class="demo">
            <alt-dialog :show-confirm-button="false" title="提示" v-model="show5">隐藏确定按钮</alt-dialog>
            <alt-button @click="show5 = true" type="success">隐藏确定按钮</alt-button>
        </div>
        <div class="demo">
            <alt-dialog show-cancel-button @cancel="cancel" @confirm="confirm2" title="提示" v-model="show6"
                >Dialog.confirm</alt-dialog
            >
            <alt-button @click="show6 = true" type="success">Dialog.confirm</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogAlert5" type="success">this.$Dialog.confirm</alt-button>
        </div>
        <div class="demo">
            <alt-dialog
                show-cancel-button
                @cancel="cancel2"
                @confirm="confirm3"
                title="提示"
                v-model="show7"
                :beforeClose="beforeClose2"
                >Dialog.confirm beforeClose</alt-dialog
            >
            <alt-button @click="show7 = true" type="success">Dialog.confirm beforeClose</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogAlert6" type="success">this.$Dialog.confirm beforeClose</alt-button>
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
            show7: false,
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
                this.show4 = false
            }, 1000)
        },
        showDialogAlert4() {
            function beforeClose(action, done) {
                if (action === 'confirm') {
                    console.log('两秒后隐藏')
                    setTimeout(() => {
                        done()
                    }, 2000)
                }
            }
            this.$Dialog.alert({
                title: '提示',
                message: '素胚勾勒出青花笔锋浓转淡',
                beforeClose,
            })
        },
        confirm2() {
            console.log('confirm2')
        },
        cancel() {
            console.log('cancel')
            this.show6 = false
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
        showDialogAlert6() {
            function beforeClose(action, done) {
                console.log(action)
                if (action === 'confirm') {
                    console.log('两秒后隐藏')
                    setTimeout(() => {
                        done()
                        this.$Dialog.alert({
                            title: '提示',
                            message: '隐藏成功',
                        })
                    }, 2000)
                } else {
                    done()
                }
            }
            this.$Dialog.confirm({
                title: '提示',
                message: '素胚勾勒出青花笔锋浓转淡',
                beforeClose,
            })
        },
        cancel2() {
            this.show7 = false
            console.log('cancel2')
        },
        confirm3() {
            console.log('confirm3')
        },
        beforeClose(action, done) {
            console.log('action', action)
            if (action === 'confirm') {
                console.log('一秒后隐藏')
                setTimeout(() => {
                    done()
                }, 1000)
            } else {
                done()
            }
        },
        beforeClose2(action, done) {
            console.log('action', action)
            if (action === 'confirm') {
                // console.log('两秒后隐藏')
                // setTimeout(() => {
                //     done()
                // }, 2000)
            } else {
                done()
            }
        },
    },
}
</script>

<style lang="less" scoped>
.container {
    height: 100%;
    overflow-y: scroll;

    button {
        margin-top: 10px;
    }
}
</style>
