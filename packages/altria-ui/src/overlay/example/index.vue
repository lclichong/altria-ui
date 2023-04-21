<template>
    <div class="alt-container">
        <div class="demo">
            <alt-overlay v-model="show"> </alt-overlay>
            <alt-button @click="show = true" type="success">显示遮罩</alt-button>
        </div>
        <div class="demo">
            <alt-overlay v-model="show2">
                <div class="content" @click.stop></div>
            </alt-overlay>
            <alt-button @click="show2 = true" type="success">嵌入内容</alt-button>
        </div>
    </div>
</template>

<script>
import AltButton from '../../button'

export default {
    components: {
        AltButton
    },
    data() {
        return {
            show: false,
            show2: false
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    .content {
        background-color: #fff;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        margin: auto;
        width: 30vw;
        height: 30vw;
    }
}
</style>