# Input 输入框

### 介绍

输入框用于处理用户的输入数据。

### 引入

```js
import Vue from 'vue'
import { Input } from 'altria-ui'

Vue.use(Input)
```

## 代码演示

### 基础用法

```html
<alt-input v-model="val"></alt-input>
```

### 清除

`clearable`属性可以显示清除图标，点击后清空输入框的内容。

```html
<alt-input label="文本" clearable v-model="val"></alt-input>
```

### 自定义类型

`type`属性可以设置不同类型的输入框，默认值为`text`。

```html
<alt-input type="digit" label="整数" placeholder="请输入整数" v-model="digit"></alt-input>
<alt-input type="number" label="数字" placeholder="请输入数字(支持小数)" v-model="num"></alt-input>
<alt-input type="password" label="密码" placeholder="请输入密码" v-model="pwd"></alt-input>
```

### 禁用输入框

`readonly`属性设置输入框为只读状态，`disabled`属性设置输入框为禁用状态。

```html
<alt-input label="文本" readonly value="输入框只读"></alt-input>
<alt-input label="文本" disabled value="输入框已禁用"></alt-input>
```

### 错误提示

`validate`属性可以设置输入框的校验规则，`noEmpty`表示这是一个必填项、`errorText`属性显示对应的错误提示、`reg`属性设置正则表达式的校验。

```html
<alt-input label="用户名" :validate="validate" v-model="username"></alt-input>
<alt-input label="手机号" :validate="validate2" v-model="phone"></alt-input>
```

```js
export default {
    data() {
        return {
            username: '',
            phone: '',
            validate: {
                noEmpty: true,
                errorText: '用户名不能为空！',
            },
            validate2: {
                noEmpty: true,
                errorText: '手机号不能为空！',
                reg: {
                    val: /^1[0-9]{10}$/,
                    errorText: '手机号格式不正确！',
                },
            },
        }
    },
}
```

### 按钮插槽

通过 `button` 插槽可以在输入框右侧显示按钮。

```html
<alt-input clearable label="短信验证码" v-model="sms">
    <template #button>
        <alt-button size="mini" type="success">获取验证码</alt-button>
    </template>
</alt-input>
```

### 文本域

`type`属性为`textarea`时显示文本域。

```html
<alt-input label="留言" rows="3" placeholder="请输入留言" type="textarea" v-model="message"></alt-input>
```

## API

### Props

| 参数        | 说明                                                                                                              | 类型               | 默认值  |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| v-model     | 绑定的值                                                                                                          | _string \| number_ | -       |
| label       | 输入框左侧文本                                                                                                    | _string_           | -       |
| type        | 输入框类型，可选值为`text`、`digit`、`number`、`password`、`textarea`                                             | _string_           | `text`  |
| rows        | 文本域的显示行数                                                                                                  | _string_           | `1`     |
| placeholder | 输入框的提示文字                                                                                                  | _string_           | -       |
| clearable   | 是否显示清除图标，点击后清空输入框                                                                                | _boolean_          | `false` |
| disabled    | 是否设置输入框为禁用状态                                                                                          | _boolean_          | `false` |
| readonly    | 是否设置输入框为只读状态                                                                                          | _boolean_          | `false` |
| validate    | 输入框的校验规则，`noEmpty`表示这是一个必填项、`errorText`属性显示对应的错误提示、`reg`属性设置正则表达式的校验。 | _object_           | -       |

### Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| input  | 输入时触发 | _event: Event_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                      | 默认值                 | 描述 |
| ------------------------- | ---------------------- | ---- |
| --input-border-color      | _var(--accents-1)_     | -    |
| --input-color             | _var(--accents-8)_     | -    |
| --input-placeholder-color | _var(--accents-2)_     | -    |
| --input-icon-bg-bolor     | _var(--accents-9)_     | -    |
| --input-height            | _24px_                 | -    |
| --input-label-color       | _var(--accents-8)_     | -    |
| --input-error-color       | _var(--error-default)_ | -    |
| --input-font-size         | _var(--font-size-md)_  | -    |
