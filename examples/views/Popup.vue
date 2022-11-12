<template>
    <div class="c-container">
        <div class="c-demo">
            <Popup v-model="show">
                <div class="content">center</div>
            </Popup>
            <Button @click="show = !show" type="success">center</Button>
        </div>
        <div class="c-demo">
            <Popup v-model="show2" position="bottom">
                <div class="content">bottom</div>
            </Popup>
            <Button @click="show2 = !show2" type="success">bottom</Button>
        </div>
        <div class="c-demo">
            <Popup v-model="show3" position="left">
                <div class="content">left</div>
            </Popup>
            <Button @click="show3 = !show3" type="success">left</Button>
        </div>
        <div class="c-demo">
            <Popup v-model="show4" position="right">
                <div class="content">right</div>
            </Popup>
            <Button @click="show4 = !show4" type="success">right</Button>
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
            show4: false
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
        padding: 4vw 21vw;
        background-color: #fff;
        margin: auto;
    }
}
</style>
