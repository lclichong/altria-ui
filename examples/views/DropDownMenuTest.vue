<template>
    <div class="c-container">
        <DropDownMenu>
            <DropDownMenuItem v-model="value1" :options="options1" title="投资类"></DropDownMenuItem>
            <DropDownMenuItem v-model="value2" :options="options2" title="存款类"></DropDownMenuItem>
        </DropDownMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: [],
            value2: [],
            options1: [
                {
                    value: '1',
                    text: '贵金属',
                },
                {
                    value: '2',
                    text: '基金',
                },
            ],
            options2: [
                {
                    value: 'a',
                    text: 'a',
                },
                {
                    value: 'b',
                    text: 'b',
                },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
.c-container {
    height: 100vh;
}
</style>
