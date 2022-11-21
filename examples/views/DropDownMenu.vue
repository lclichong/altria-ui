<template>
    <div class="c-container">
        <DropDownMenu>
            <DropDownMenuItem v-model="value1" :options="options1" title="名字"></DropDownMenuItem>
            <DropDownMenuItem v-model="value2" :options="options2" title="兴趣爱好"></DropDownMenuItem>
            <DropDownMenuItem v-model="value3" :options="options3" title="技能"></DropDownMenuItem>
            <DropDownMenuItem v-model="value4" :options="options4" title="性别"></DropDownMenuItem>
        </DropDownMenu>
        <Cell v-for="l,key in 10" :title="'title'+key" :value="'value'+key" :key="key"></Cell>
        <DropDownMenu>
            <DropDownMenuItem v-model="value5" :options="options5" title="区域"></DropDownMenuItem>
            <DropDownMenuItem v-model="value6" :options="options6" title="天气"></DropDownMenuItem>
        </DropDownMenu>
        <div class="c-button__wrapper">
            <Button type="success" size="small" class="c-btn" @click="getValues">获取值</Button>
        </div>
        <div>
            <Button type="success" size="small" class="c-btn" @click="getOptions">获取options</Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: [
                {
                    value: '李四'
                }
            ],
            value2: [],
            value3: [],
            value4: '男',
            value5: '',
            value6: '',
            options1: [
                {
                    value: '张三',
                    text: '张三'
                },
                {
                    value: '李四',
                    text: '李四'
                },
                {
                    value: '王五',
                    text: '王五'
                }
            ],
            options2: [
                {
                    value: '篮球',
                    text: '篮球'
                },
                {
                    value: '足球',
                    text: '足球'
                },
                {
                    value: '台球',
                    text: '台球'
                }
            ],
            options3: [
                {
                    value: 'Vue',
                    text: 'Vue'
                },
                {
                    value: 'React',
                    text: 'React'
                },
                {
                    value: 'CSS',
                    text: 'CSS'
                },
                {
                    value: 'JavaScript',
                    text: 'JavaScript'
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
            ],
            options5: [
                {
                    value: '徐汇区',
                    text: '徐汇区'
                },
                {
                    value: '松江区',
                    text: '松江区'
                }
            ],
            options6: [
                {
                    value: '阴天',
                    text: '阴天'
                },
                {
                    value: '晴天',
                    text: '晴天'
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
            console.log('options5', this.options5)
            console.log('options6', this.options6)
        },
        getValues() {
            console.log('value1', this.value1)
            console.log('value2', this.value2)
            console.log('value3', this.value3)
            console.log('value4', this.value4)
            console.log('value5', this.value5)
            console.log('value6', this.value6)
        }
    }
}
</script>

<style lang="less" scoped>
.c-container {
    height: 100vh;
    .c-button__wrapper {
        margin-top: 100px;
    }
    .c-btn {
        width: 100px;
        margin-top: 20px;
    }

    .c-mt-200 {
        margin-top: 200px;
    }
}
</style>
