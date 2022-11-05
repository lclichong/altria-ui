<template>
    <div class="c-container">
        <div class="c-b">
            <p>默认</p>
            <Button>Button</Button>
        </div>

        <div class="c-b">
            <p>类型</p>
            <div>
                <Button type="default">default</Button>
            </div>
            <div>
                <Button type="success">success</Button>
            </div>
            <div>
                <Button type="warning">warning</Button>
            </div>
            <div>
                <Button type="error">error</Button>
            </div>
        </div>
        <div class="c-b">
            <p>大小</p>
            <div>
                <Button type="success" size="mini">mini</Button>
            </div>
            <div>
                <Button type="success" size="small">small</Button>
            </div>
            <div>
                <Button type="success" size="medium">medium</Button>
            </div>
            <div>
                <Button type="success" size="large">large</Button>
            </div>
        </div>

        <div class="c-b">
            <p>禁用</p>
            <Button size="small" disabled="disabled">Button</Button>
        </div>

        <div class="c-b">
            <p>加载中</p>
            <div>
                <Button loading>Button</Button>
            </div>
            <div>
                <Button type="success" loading load-type="circle">Button</Button>
            </div>
            <p>三秒后结束</p>
            <div>
                <Button @click="btnTap" type="success" :loading="loading" load-type="circle">Button</Button>
            </div>
        </div>

        <div class="c-b">
            <p>阴影</p>
            <div>
                <Button type="default" shadow>Button</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        setTimeout(() => {
            this.loading = false
        }, 3000)
    },
    components: {},
    data() {
        return {
            loading: true
        }
    },
    methods: {
        btnTap() {
            this.$Dialog.alert({
                title: '提示',
                message: 'btnTap'
            })
        }
    }
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
