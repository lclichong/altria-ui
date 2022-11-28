<template>
    <div class="c-container">
        <div class="c-demo">
            <p>默认</p>
            <Button>Button</Button>
        </div>

        <div class="c-demo">
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
        <div class="c-demo">
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

        <div class="c-demo">
            <p>禁用</p>
            <Button size="small" disabled="disabled">Button</Button>
        </div>

        <div class="c-demo">
            <p>加载中</p>
            <div>
                <Button loading>Button</Button>
            </div>
            <div>
                <Button type="success" loading>Button</Button>
            </div>
            <div>
                <Button type="error" loading>Button</Button>
            </div>
            <div>
                <Button type="warning" loading>Button</Button>
            </div>
            <div>
                <Button loading load-type="circle">Button</Button>
            </div>
            <div>
                <Button type="success" loading load-type="circle">Button</Button>
            </div>
            <div>
                <Button type="warning" loading load-type="circle">Button</Button>
            </div>
            <div>
                <Button type="error" loading load-type="circle">Button</Button>
            </div>
            <p>点击button，三秒结束loading状态</p>
            <div>
                <Button @click="btnTap" type="success" :loading="loading" load-type="circle">Button</Button>
            </div>
        </div>

        <div class="c-demo">
            <p>阴影</p>
            <div>
                <Button type="default" shadow>Button</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
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
.c-container {
    height: 100%;
    overflow-y: scroll;

    button {
        margin-top: 10px;
    }
}
</style>
