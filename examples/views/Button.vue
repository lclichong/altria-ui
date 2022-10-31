<template>
    <div>
        <div>
            <Button @click="defalutClick" class="c-btn" size="small">按钮</Button>
        </div>
        <div>
            <Button @click="successClick" type="success" class="c-btn" size="small" disabled="disabled">按钮</Button>
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
.c-btn {
    margin-top: 10vw;
    width: 100px;
}
</style>
