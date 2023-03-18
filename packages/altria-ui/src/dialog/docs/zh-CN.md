# Dialog 弹出框

### 介绍

弹出框常用于消息提示、消息确认。支持组件调用和函数调用两种方式。

### 引入

```js
import Vue from 'vue'
import { Dialog } from 'altria-ui'

Vue.use(Dialog)
```

## 组件调用

### 消息弹窗

用于提示一些消息，只包含一个确认按钮。

```html
<alt-dialog title="提示" v-model="show"> 素胚勾勒出青花笔锋浓转淡 </alt-dialog>
<alt-button @click="show = true" type="success">消息弹窗</alt-button>
```

```js
export default {
    data() {
        return {
            show: false,
        }
    },
}
```

### 不显示遮罩

`overlay` 属性为 `false` 则不显示遮罩

```html
<alt-dialog v-model="show" :overlay="false" title="提示" message="瓶身描绘的牡丹一如你初妆"></alt-dialog>
<alt-button @click="show = true" type="success">不显示遮罩</alt-button>
```

### 异步关闭

通过 `before-close` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```html
<alt-dialog title="提示" v-model="show" :before-close="beforeClose">异步关闭 一秒后隐藏</alt-dialog>
<alt-button @click="show = true" type="success">异步关闭</alt-button>
```

```js
export default {
    methods: {
        beforeClose(action, done) {
            if (action === 'confirm') {
                setTimeout(() => {
                    done()
                }, 1000)
            } else {
                done()
            }
        },
    },
}
```

### 确认弹窗

`show-cancel-button` 属性为 `true` 时显示确认弹窗，用于确认消息，包含确认和取消按钮。

```html
<alt-dialog title="提示" show-cancel-button @confirm="confirm" @cancel="cancel" v-model="show">确认弹窗</alt-dialog>
<alt-button @click="show = true" type="success">确认弹窗</alt-button>
```

```js
export default {
    methods: {
        confirm() {
            console.log('confirm')
        },
        cancel() {
            console.log('cancel')
        },
    },
}
```

## 函数调用

### 消息弹窗

引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 `$Dialog` 方法，`$Dialog.alert` 方法展示消息弹窗，在所有组件内部都可以直接调用此方法。

```html
<alt-button @click="showDialogAlert" type="success">函数调用</alt-button>
```

```js
export default {
    methods: {
        showDialogAlert() {
            this.$Dialog.alert({
                title: '提示',
                message: '素胚勾勒出青花笔锋浓转淡瓶身描绘的牡丹一如你初妆...',
                confirmButtonText: '确定',
            })
        },
    },
}
```

### 确认弹窗

`$Dialog.confirm` 方法展示确认弹窗。

```html
<alt-button @click="showDialogConfirm" type="success">确认弹窗</alt-button>
```

```js
export default {
    methods: {
        showDialogAlert() {
            this.$Dialog
                .confirm({
                    title: '提示',
                    message: '素胚勾勒出青花笔锋浓转淡',
                })
                .then((aciton) => {
                    console.log(aciton)
                })
                .catch((action) => {
                    console.log(action)
                })
        },
    },
}
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```html
<alt-button @click="showDialogConfirm" type="success">异步关闭</alt-button>
```

```js
export default {
    methods: {
        showDialogAlert() {
            function beforeClose(action, done) {
                if (action === 'confirm') {
                    setTimeout(() => {
                        done()
                    }, 2000)
                } else {
                    done()
                }
            }
            this.$Dialog.confirm({
                title: '提示',
                message: '素胚勾勒出青花笔锋浓转淡',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose,
            })
        },
    },
}
```

## API

### 方法

| 方法名          | 说明             | 参数      | 返回值    |
| --------------- | ---------------- | --------- | --------- |
| $Dialog.alert   | 展示消息提示弹窗 | `options` | `Promise` |
| $Dialog.confirm | 展示消息确认弹窗 | `options` | `Promise` |

### Options

通过函数调用 `Dialog` 时，支持传入以下选项：

| 参数              | 说明                                     | 类型                     | 默认值  |
| ----------------- | ---------------------------------------- | ------------------------ | ------- |
| title             | 标题                                     | _string_                 | -       |
| message           | 内容                                     | _string_                 | -       |
| time              | 展示时长(ms)                             | _number_                 | -       |
| overlay           | 是否显示遮罩                             | _boolean_                | `true`  |
| beforeClose       | 关闭前的回调函数，调用 done() 后关闭弹窗 | _(action, done) => void_ | -       |
| confirmButtonText | 确认按钮文案                             | _string_                 | `确定`  |
| cancelButtonText  | 取消按钮文案                             | _string_                 | `取消`  |
| showConfirmButton | 是否显示确认按钮                         | _boolean_                | `true`  |
| showCancelButton  | 是否显示取消按钮                         | _boolean_                | `false` |

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数                | 说明                                     | 类型                     | 默认值  |
| ------------------- | ---------------------------------------- | ------------------------ | ------- |
| v-model             | 是否显示弹窗                             | _boolean_                | -       |
| title               | 标题                                     | _string_                 | -       |
| message             | 内容                                     | _string_                 | -       |
| time                | 展示时长(ms)                             | _number_                 | -       |
| overlay             | 是否显示遮罩                             | _boolean_                | `true`  |
| before-close        | 关闭前的回调函数，调用 done() 后关闭弹窗 | _(action, done) => void_ | -       |
| confirm-button-text | 确认按钮文案                             | _string_                 | -       |
| cancel-button-text  | 取消按钮文案                             | _string_                 | -       |
| show-confirm-button | 是否显示确认按钮                         | _boolean_                | `true`  |
| show-cancel-button  | 是否显示取消按钮                         | _boolean_                | `false` |

### Events

通过组件调用 `Dialog` 时，支持以下事件：
| 事件 | 说明 | 回调参数 |
| ----- | ------ | ------ |
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                          | 默认值                   | 描述 |
| ----------------------------- | ------------------------ | ---- |
| --dialog-background           | _var(--accents-4)_       | -    |
| --dialog-content-color        | _var(--accents-2)_       | -    |
| --dialog-confirm-button-color | _var(--success-default)_ | -    |
| --dialog-cancel-button-color  | _var(--accents-3)_       | -    |
| --dialog-overlay-background   | _var(--overlay-default)_ | -    |
