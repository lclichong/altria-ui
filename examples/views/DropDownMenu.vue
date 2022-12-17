<template>
    <div class="container">
        <alt-dropdown-menu>
            <alt-dropdown-item v-model="value1" :options="options1" title="名字"></alt-dropdown-item>
            <alt-dropdown-item v-model="value2" :options="options2" title="兴趣爱好"></alt-dropdown-item>
            <alt-dropdown-item v-model="value3" :options="options3" title="技能"></alt-dropdown-item>
            <alt-dropdown-item v-model="value4" :options="options4" title="性别"></alt-dropdown-item>
        </alt-dropdown-menu>
        <alt-cell v-for="(l, key) in 10" :title="'title' + key" :value="'value' + key" :key="key"></alt-cell>
        <alt-dropdown-menu>
            <alt-dropdown-item v-model="value5" :options="options5" title="区域"></alt-dropdown-item>
            <alt-dropdown-item v-model="value6" :options="options6" title="天气"></alt-dropdown-item>
        </alt-dropdown-menu>
        <div class="button__wrapper">
            <alt-button type="success" size="small" class="btn" @click="getValues">获取值</alt-button>
        </div>
        <div class="button__wrapper">
            <alt-button type="success" size="small" class="btn" @click="getOptions">获取options</alt-button>
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
.container {
    height: 100%;
    .button__wrapper {
        height: 80px;
        text-align: center;
    }
    .btn {
        width: 100px;
        margin-top: 20px;
    }
}
</style>
