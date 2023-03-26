<template>
    <div class="alt-container">
        <div class="demo">
            <p>按钮类型</p>
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
            <p>尺寸</p>
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
            <alt-button disabled="disabled">button</alt-button>
        </div>

        <div class="demo">
            <p>加载中</p>
            <div>
                <alt-button type="success" loading>button</alt-button>
            </div>
            <div>
                <alt-button type="warning" loading load-type="circle">button</alt-button>
            </div>
            <div>
                <alt-button type="error" loading load-type="circle" load-text="加载中...">button</alt-button>
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
                <alt-button type="success" color="linear-gradient(to right, #ff6034, #9c27b0)">button</alt-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="less" scoped>
.alt-container {
    .alt-button {
        margin-top: 10px;
    }
}
</style>
