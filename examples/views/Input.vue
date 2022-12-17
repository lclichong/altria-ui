<template>
    <div class="container">
        <p>默认</p>
        <alt-input v-model="val"></alt-input>
        <p>清除</p>
        <alt-input label="文本" clearable v-model="val2"></alt-input>
        <p>自定义类型</p>
        <alt-input type="digit" label="整数" placeholder="请输入整数" v-model="digit"></alt-input>
        <alt-input type="number" label="数字" placeholder="请输入数字(支持小数)" v-model="num"></alt-input>
        <alt-input type="password" label="密码" placeholder="请输入密码" v-model="pwd"></alt-input>
        <p>禁用输入框</p>
        <alt-input label="文本" readonly value="输入框只读"></alt-input>
        <alt-input label="文本" disabled value="输入框已禁用"></alt-input>
        <p>错误提示</p>
        <alt-input label="用户名" :validate="validate" v-model="username"></alt-input>
        <alt-input label="手机号" :validate="validate2" v-model="phone"></alt-input>
        <p>按钮插槽</p>
        <alt-input clearable label="短信验证码" v-model="sms">
            <template #button>
                <alt-button size="mini" type="success">获取验证码</alt-button>
            </template>
        </alt-input>
        <p>textarea</p>
        <alt-input label="留言" rows="3" placeholder="请输入留言" type="textarea" v-model="message"></alt-input>
        <div class="demo">
            <alt-button @click="getVal" type="success">获取值</alt-button>
        </div>
        <div class="demo">
            <alt-button @click="num = 666.66" type="success">赋值</alt-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: '',
            val2: '',
            digit: '',
            num: '',
            pwd: '',
            username: '',
            phone: '',
            validate: {
                noEmpty: true,
                errorText: '用户名不能为空！'
            },
            validate2: {
                noEmpty: true,
                errorText: '手机号不能为空！',
                reg: {
                    val: /^1[3-9]{1}[0-9]{9}$/,
                    errorText: '手机号格式不正确！'
                }
            },
            sms: '',
            message: ''
        }
    },
    methods: {
        getVal() {
            console.log('val', this.val)
            console.log('val2', this.val2)
            console.log('digit', this.digit)
            console.log('num', this.num)
            console.log('pwd', this.pwd)
            console.log('username', this.username)
            console.log('message', this.message)
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    height: 100%;
}
</style>
