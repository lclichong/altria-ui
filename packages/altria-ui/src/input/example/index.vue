<template>
    <div class="alt-container">
        <div class="demo">
            <p>默认</p>
            <alt-input v-model="val"></alt-input>
        </div>
        <div class="demo">
            <p>清除</p>
            <alt-input label="文本" clearable v-model="val2"></alt-input>
        </div>
        <div class="demo">
            <p>自定义类型</p>
            <alt-input type="digit" label="整数" placeholder="请输入整数" v-model="digit"></alt-input>
            <alt-input type="number" label="数字" placeholder="请输入数字(支持小数)" v-model="num"></alt-input>
            <alt-input type="password" label="密码" placeholder="请输入密码" v-model="pwd"></alt-input>
        </div>
        <div class="demo">
            <p>禁用输入框</p>
            <alt-input label="文本" readonly value="输入框只读"></alt-input>
            <alt-input label="文本" disabled value="输入框已禁用"></alt-input>
        </div>
        <div class="demo">
            <p>错误提示</p>
            <alt-input label="用户名" :validate="validate" v-model="username"></alt-input>
            <alt-input label="手机号" :validate="validate2" v-model="phone"></alt-input>
        </div>
        <div class="demo">
            <p>按钮插槽</p>
            <alt-input clearable label="短信验证码" v-model="sms">
                <template #button>
                    <alt-button size="mini" type="success">获取验证码</alt-button>
                </template>
            </alt-input>
        </div>
        <div class="demo">
            <p>文本域</p>
            <alt-input label="留言" rows="3" placeholder="请输入留言" type="textarea" v-model="message"></alt-input>
        </div>
    </div>
</template>

<script>
import AltButton from '../../button'

export default {
    components: {
        AltButton
    },
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
                    val: /^1[0-9]{10}$/,
                    errorText: '手机号格式不正确！'
                }
            },
            sms: '',
            message: ''
        }
    }
}
</script>

<style lang="less" scoped>
.alt-container {
    .demo {
        padding: 5vw 0 0 0;
        p {
            text-align: left;
            margin-left: 4vw;
        }
    }

    .demo:last-child {
        padding-bottom: 5vw;
    }
}
</style>