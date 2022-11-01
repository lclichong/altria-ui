<template>
    <div class="c-container">
        <div class="c-b">
            <p>默认</p>
            <Button>按钮</Button>
        </div>

        <div class="c-b">
            <p>类型</p>
            <div><Button type="default">default</Button></div>
            <div><Button type="success">success</Button></div>
            <div><Button type="warning">warning</Button></div>
            <div><Button type="error">error</Button></div>
        </div>
        <div class="c-b">
            <p>大小</p>
            <div><Button type="success" size="mini">mini</Button></div>
            <div><Button type="success" size="small">small</Button></div>
            <div><Button type="success" size="medium">medium</Button></div>
            <div><Button type="success" size="large">large</Button></div>
        </div>

        <div class="c-b">
            <p>禁用</p>
            <Button @click="successClick" size="small" disabled="disabled">按钮</Button>
        </div>

        <div class="c-b">
            <p>加载中</p>
            <Button type="success" loading>按钮</Button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    },
    methods: {
        defalutClick() {
            alert('default-button')
        },
        successClick() {
            alert('success-button')
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
