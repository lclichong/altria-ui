<template>
    <div class="alt-container">
        <div class="demo">
            <p>默认</p>
            <alt-button>button</alt-button>
        </div>

        <div class="demo">
            <p>类型</p>
            <div>
                <alt-button type="default">default</alt-button>
            </div>
            <div>
                <alt-button type="success">success</alt-button>
            </div>
            <div>
                <alt-button type="warning">warning</alt-button>
            </div>
            <div>
                <alt-button type="error">error</alt-button>
            </div>
        </div>
        <div class="demo">
            <p>大小</p>
            <div>
                <alt-button type="success" size="mini">mini</alt-button>
            </div>
            <div>
                <alt-button type="success" size="small">small</alt-button>
            </div>
            <div>
                <alt-button type="success" size="medium">medium</alt-button>
            </div>
            <div>
                <alt-button type="success" size="large">large</alt-button>
            </div>
        </div>

        <div class="demo">
            <p>禁用</p>
            <alt-button size="small" disabled="disabled">button</alt-button>
        </div>

        <div class="demo">
            <p>加载中</p>
            <div>
                <alt-button loading>button</alt-button>
            </div>
            <div>
                <alt-button type="success" loading>button</alt-button>
            </div>
            <div>
                <alt-button type="error" loading>button</alt-button>
            </div>
            <div>
                <alt-button type="warning" loading>button</alt-button>
            </div>
            <div>
                <alt-button loading load-type="circle">button</alt-button>
            </div>
            <div>
                <alt-button type="success" loading load-type="circle">button</alt-button>
            </div>
            <div>
                <alt-button type="warning" loading load-type="circle" load-text="加载中...">button</alt-button>
            </div>
            <div>
                <alt-button type="error" loading load-type="circle" load-text="加载中...">button</alt-button>
            </div>
            <p>点击alt-button，三秒结束loading状态</p>
            <div>
                <alt-button @click="btnTap" type="success" :loading="loading" load-type="circle">button</alt-button>
            </div>
        </div>

        <div class="demo">
            <p>阴影</p>
            <div>
                <alt-button type="default" shadow>button</alt-button>
            </div>
        </div>

        <div class="demo">
            <p>自定义颜色</p>
            <div>
                <alt-button type="success" color="#7232dd">button</alt-button>
            </div>
            <div>
                <alt-button type="success" color="linear-gradient(to right, rgb(255, 96, 52), #9c27b0)"
                    >button</alt-button
                >
            </div>
            <div>
                <alt-button
                    type="success"
                    color="#4caf50"
                    :loading="loading2"
                    load-type="circle"
                    load-color="#ff9800"
                    load-text="加载中..."
                    >Loading</alt-button
                >
                <alt-button @click="loading2 = !loading2">改变Loading的值</alt-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            loading2: true,
        }
    },
    methods: {
        btnTap() {
            this.$Dialog.alert({
                title: '提示',
                message: '点击了',
            })
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 3000)
        },
    },
}
</script>

<style lang="less" scoped>
.alt-container {
    height: 100%;
    overflow-y: scroll;

    .alt-button {
        margin-top: 10px;
    }
}
</style>
