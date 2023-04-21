# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素。

### 引入

```js
import Vue from 'vue'
import { Overlay } from 'altria-ui'

Vue.use(Overlay)
```

## 代码演示

### 基础用法

通过 `v-model` 设置遮罩层是否展示。

```html
<alt-overlay v-model="show"></alt-overlay> 
<alt-button @click="show = true" type="success">显示遮罩</alt-button>
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

### 嵌入内容

通过默认插槽的方式嵌入内容。

```html
<alt-overlay v-model="show2">
    <div class="content" @click.stop></div>
</alt-overlay>
<alt-button @click="show2 = true" type="success">嵌入内容</alt-button>
```

```css
.content {
    background-color: #fff;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    width: 30vw;
    height: 30vw;
}
```

## API

### Props

| 参数    | 说明           | 类型               | 默认值  |
| ------- | -------------- | ------------------ | ------- |
| v-model | 是否显示遮罩层 | _boolean_          | `false` |
| z-index | z-index 层级   | _string \| number_ | `2000`  |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                       | 默认值                   | 描述 |
| -------------------------- | ------------------------ | ---- |
| --overlay-background-color | _var(--overlay-default)_ | -    |
