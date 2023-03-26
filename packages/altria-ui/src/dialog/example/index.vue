<template>
    <div class="alt-container">
        <div class="demo">
            <alt-dialog title="提示" v-model="show">素胚勾勒出青花笔锋浓转淡</alt-dialog>
            <alt-button @click="show = true" type="success">消息弹窗</alt-button>
        </div>
        <div class="demo">
            <alt-dialog v-model="show2" :overlay="false" title="提示" message="瓶身描绘的牡丹一如你初妆"></alt-dialog>
            <alt-button @click="show2 = true" type="success">不显示遮罩</alt-button>
        </div>
        <div class="demo">
            <alt-dialog title="提示" v-model="show3" :before-close="beforeClose">异步关闭 一秒后隐藏</alt-dialog>
            <alt-button @click="show3 = true" type="success">异步关闭</alt-button>
        </div>
        <div class="demo">
            <alt-dialog title="提示" v-model="show4" show-cancel-button @confirm="confirm" @cancel="cancel">确认弹窗</alt-dialog>
            <alt-button @click="show4 = true" type="success">确认弹窗</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogAlert" type="success">函数调用</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogConfirm" type="success">确认弹窗</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="showDialogConfirm2" type="success">异步关闭</alt-button>
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
            show4: false
        }
    },
    methods: {
        confirm() {
            console.log('confirm')
        },
        cancel() {
            console.log('cancel')
        },
        beforeClose(action, done) {
            console.log('beforeClose', action)
            if (action === 'confirm') {
                console.log('一秒后隐藏')
                setTimeout(() => {
                    done()
                }, 1000)
            } else {
                done()
            }
        },
        showDialogAlert() {
            this.$Dialog.alert({
                title: '提示',
                message:
                    '素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆冉冉檀香透过窗心事我了然宣纸上走笔至此搁一半釉色渲染仕女图韵味被私藏而你嫣然的一笑如含苞待放你的美一缕飘散去到我去不了的地方 素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆冉冉檀香透过窗心事我了然宣纸上走笔至此搁一半釉色渲染仕女图韵味被私藏而你嫣然的一笑如含苞待放你的美一缕飘散去到我去不了的地方素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆冉冉檀香透过窗心事我了然宣纸上走笔至此搁一半釉色渲染仕女图韵味被私藏而你嫣然的一笑如含苞待放你的美一缕飘散去到我去不了的地方素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆冉冉檀香透过窗心事我了然宣纸上走笔至此搁一半釉色渲染仕女图韵味被私藏而你嫣然的一笑如含苞待放你的美一缕飘散去到我去不了的地方',
                confirmButtonText: '确定'
            })
        },
        showDialogConfirm() {
            this.$Dialog
                .confirm({
                    title: '提示',
                    message: '素胚勾勒出青花笔锋浓转淡'
                })
                .then((aciton) => {
                    console.log(aciton)
                })
                .catch((action) => {
                    console.log(action)
                })
        },
        showDialogConfirm2() {
            function beforeClose(action, done) {
                console.log('this.$Dialog.confirm beforeClose', action)
                if (action === 'confirm') {
                    console.log('两秒后隐藏')
                    setTimeout(() => {
                        done()
                    }, 2000)
                } else {
                    done()
                }
            }
            this.$Dialog.confirm({
                title: '提示',
                message: '异步关闭 两秒后隐藏',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose
            })
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    button {
        margin-top: 10px;
    }
}
</style>
