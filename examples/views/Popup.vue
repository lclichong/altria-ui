<template>
    <div class="container">
        <div class="demo">
            <alt-popup v-model="show">
                <div class="content">center</div>
            </alt-popup>
            <alt-button @click="show = !show" type="success">center</alt-button>
        </div>
        <div class="demo">
            <alt-popup v-model="show2" position="top">
                <div class="content">top</div>
            </alt-popup>
            <alt-button @click="show2 = !show2" type="success">top</alt-button>
        </div>
        <div class="demo">
            <alt-popup v-model="show3" position="bottom">
                <div class="content">bottom</div>
            </alt-popup>
            <alt-button @click="show3 = !show3" type="success">bottom</alt-button>
        </div>
        <div class="demo">
            <alt-popup v-model="show4" position="left">
                <div class="content">left</div>
            </alt-popup>
            <alt-button @click="show4 = !show4" type="success">left</alt-button>
        </div>
        <div class="demo">
            <alt-popup v-model="show5" position="right">
                <div class="content">right</div>
            </alt-popup>
            <alt-button @click="show5 = !show5" type="success">right</alt-button>
        </div>
        <div class="demo">
            <alt-dialog title="提示" v-model="show6"> dialog </alt-dialog>
            <alt-button @click="show6 = !show6" type="success">dialog</alt-button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
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
    methods: {},
}
</script>

<style lang="less" scoped>
.container {
    height: 100%;
    .content {
        padding: 5vw;
        width: 60vw;
        background-color: #fff;
        margin: auto;
        box-sizing: border-box;
    }
}
</style>
