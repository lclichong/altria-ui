<template>
    <div class="alt-container">
        <div class="demo">
            <alt-popup v-model="show">
                <div class="content">内容</div>
            </alt-popup>
            <alt-button @click="show = !show" type="success">展示弹出层</alt-button>
        </div>
        <div class="demo">
            <alt-popup v-model="show2" position="top">
                <div class="content"></div>
            </alt-popup>
            <alt-button @click="show2 = !show2" type="success">顶部弹出</alt-button>
        </div>
        <div class="demo">
            <alt-popup v-model="show3" position="bottom">
                <div class="content"></div>
            </alt-popup>
            <alt-button @click="show3 = !show3" type="success">底部弹出</alt-button>
        </div>
        <div class="demo">
            <alt-popup v-model="show4" position="left">
                <div class="content"></div>
            </alt-popup>
            <alt-button @click="show4 = !show4" type="success">左侧弹出</alt-button>
        </div>
        <div class="demo">
            <alt-popup v-model="show5" position="right">
                <div class="content"></div>
            </alt-popup>
            <alt-button @click="show5 = !show5" type="success">右侧弹出</alt-button>
        </div>
    </div>
</template>

<script>
import AltButton from '../../button'

export default {
    components: { AltButton },
    data() {
        return {
            show: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false
        }
    },
    methods: {}
}
</script>

<style lang="less" scoped>
.alt-container {
    height: calc(100% - 56px);

    button {
        margin-top: 10px;
    }
    .content {
        padding: 20vw;
    }
}
</style>