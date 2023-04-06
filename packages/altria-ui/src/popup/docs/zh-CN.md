# Popup 弹出层

### 介绍

弹出层用于展示弹窗、提示信息等内容。

### 引入

```js
import Vue from 'vue'
import { Popup } from 'altria-ui'

Vue.use(Popup)
```

## 代码演示

### 基础用法

通过 `v-model` 设置弹出层是否展示。

```html
<alt-popup v-model="show">
    <div class="content">内容</div>
</alt-popup>
<alt-button @click="show = true" type="success">展示弹出层</alt-button>
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

### 弹出位置

通过 `position` 属性设置不同的弹出位置，可以设置`top`、`bottom`、`left`、`right`、`center`。

```html
<alt-popup v-model="show" position="top"></alt-popup>
```

## API

### Props

| 参数     | 说明                                                         | 类型      | 默认值   |
| -------- | ------------------------------------------------------------ | --------- | -------- |
| v-model  | 是否显示弹出层                                               | _boolean_ | `false`  |
| position | 弹出位置，可选值为`top`、`bottom`、`left`、`right`、`center` | _string_  | `center` |
| overlay  | 是否显示遮罩层                                               | _boolean_ | `true`   |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                       | 默认值             | 描述 |
| -------------------------- | ------------------ | ---- |
| --popup-content-background | _var(--accents-4)_ | -    |
| --popup-fade-opacity       | _0_                | -    |
| --popup-fade-time          | _0.25s_            | -    |
