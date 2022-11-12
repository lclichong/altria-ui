<template>
    <div class="c-container">
        <div class="c-demo">
            <Popup v-model="show">
                <div class="content">center</div>
            </Popup>
            <Button @click="show = !show" type="success">center</Button>
        </div>
        <div class="c-demo">
            <Popup v-model="show2" position="top">
                <div class="content">top</div>
            </Popup>
            <Button @click="show2 = !show2" type="success">top</Button>
        </div>
        <div class="c-demo">
            <Popup v-model="show3" position="bottom">
                <div class="content">bottom</div>
            </Popup>
            <Button @click="show3 = !show3" type="success">bottom</Button>
        </div>
        <div class="c-demo">
            <Popup v-model="show4" position="left">
                <div class="content">left</div>
            </Popup>
            <Button @click="show4 = !show4" type="success">left</Button>
        </div>
        <div class="c-demo">
            <Popup v-model="show5" position="right">
                <div class="content">right</div>
            </Popup>
            <Button @click="show5 = !show5" type="success">right</Button>
        </div>
        <div class="c-demo">
            <Dialog v-model="show6">
                <div class="content">dialog</div>
            </Dialog>
            <Button @click="show6 = !show6" type="success">dialog</Button>
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
            show6: false
        }
    },
    methods: {}
}
</script>

<style lang="less" scoped>
.c-container {
    height: 100%;
    .c-demo {
        padding: 5vw;
    }
    .content {
        padding: 5vw;
        width: 60vw;
        background-color: #fff;
        margin: auto;
        box-sizing: border-box;
    }
}
</style>
