<template>
    <div class="alt-container">
        <div class="demo">
            <p>基础用法</p>
            <alt-dropdown-menu>
                <alt-dropdown-item v-model="value1" :options="options1" title="区域"></alt-dropdown-item>
                <alt-dropdown-item v-model="value2" :options="options2" title="天气"></alt-dropdown-item>
            </alt-dropdown-menu>
        </div>
        <div class="demo">
            <p>多选</p>
            <alt-dropdown-menu>
                <alt-dropdown-item v-model="value3" :options="options3" title="兴趣爱好"></alt-dropdown-item>
                <alt-dropdown-item v-model="value4" :options="options4" title="技能"></alt-dropdown-item>
            </alt-dropdown-menu>
        </div>
        <div class="demo">
            <p>默认值</p>
            <alt-dropdown-menu>
                <alt-dropdown-item v-model="value5" :options="options5" title="姓名"></alt-dropdown-item>
                <alt-dropdown-item v-model="value6" :options="options6" title="兴趣爱好"></alt-dropdown-item>
            </alt-dropdown-menu>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: [],
            value4: [],
            value5: '李四',
            value6: [
                {
                    value: '篮球'
                },
                {
                    value: '足球'
                }
            ],
            options1: [
                {
                    value: '徐汇区',
                    text: '徐汇区'
                },
                {
                    value: '松江区',
                    text: '松江区'
                }
            ],
            options2: [
                {
                    value: '阴天',
                    text: '阴天'
                },
                {
                    value: '晴天',
                    text: '晴天'
                }
            ],
            options3: [
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
            options4: [
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
            options5: [
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
            options6: [
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
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    .demo {
        padding: 5vw 0px;
        p {
            text-align: left;
            margin-left: 5vw;
            margin-bottom: 3vw;
        }
    }
}
</style>