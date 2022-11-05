<template>
    <div class="c-container">
        <DropDownMenu>
            <DropDownMenuItem v-model="value1" :options="options1" title="测试"></DropDownMenuItem>
            <DropDownMenuItem v-model="value2" :options="options2" title="灯"></DropDownMenuItem>
            <DropDownMenuItem v-model="value3" :options="options3" title="种族"></DropDownMenuItem>
            <DropDownMenuItem v-model="value4" :options="options4" title="性别"></DropDownMenuItem>
        </DropDownMenu>
        <div class="c-button__wrapper">
            <Button type="success" class="c-btn" @click="getValues">获取值</Button>
        </div>
        <div>
            <Button type="success" class="c-btn" @click="getOptions">获取options</Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: [
                {
                    value: '测试数据二'
                }
            ],
            value2: [],
            value3: [],
            value4: '男',
            options1: [
                {
                    value: '测试数据一',
                    text: '测试数据一'
                },
                {
                    value: '测试数据二',
                    text: '测试数据二'
                },
                {
                    value: '测试数据三',
                    text: '测试数据三'
                }
            ],
            options2: [
                {
                    value: '红灯',
                    text: '红灯'
                },
                {
                    value: '绿灯',
                    text: '绿灯'
                }
            ],
            options3: [
                {
                    value: '神',
                    text: '神'
                },
                {
                    value: '魔',
                    text: '魔'
                },
                {
                    value: '人',
                    text: '人'
                }
            ],
            options4: [
                {
                    value: '男',
                    text: '男'
                },
                {
                    value: '女',
                    text: '女'
                }
            ]
        }
    },
    methods: {
        getOptions() {
            console.log('options1', this.options1)
            console.log('options2', this.options2)
            console.log('options3', this.options3)
            console.log('options4', this.options4)
        },
        getValues() {
            console.log('value1', this.value1)
            console.log('value2', this.value2)
            console.log('value3', this.value3)
            console.log('value4', this.value4)
        }
    }
}
</script>

<style lang="less" scoped>
.c-container {
    height: 100vh;
    .c-button__wrapper {
        margin-top: 200px;
    }
    .c-btn {
        width: 100px;
        margin-top: 20px;
    }
}
</style>
