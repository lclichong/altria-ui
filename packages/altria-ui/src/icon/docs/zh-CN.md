# Icon 图标

### 介绍

基于字体的图标库。

### 引入

```js
import Vue from 'vue'
import { Icon } from 'altria-ui'

Vue.use(Icon)
```

## 代码演示

### 基础用法

通过 `name` 属性设置不同的图标，所有可用的图标名称见右侧示例。

```html
<alt-icon name="checkbox-marked-circle"></alt-icon>
```

### 尺寸

通过 `size` 属性设置不同大小的图标组件。

```html
<alt-icon name="checkbox-marked-circle"></alt-icon> 
<alt-icon size="30" name="checkbox-marked-circle"></alt-icon>
```

### 颜色

通过 `color` 属性设置图标的颜色。

```html
<alt-icon color="#2196f3" size="30" name="checkbox-marked-circle"></alt-icon>
<alt-icon color="#2196f3" size="30" name="check-circle-outline"></alt-icon>
```

### 点击事件

```html
<alt-icon @click="handleClick" color="#2196f3" size="30" name="checkbox-marked-circle"></alt-icon>
```

```js
export default {
    methods: {
        handleClick() {
            this.$Dialog.alert({
                title: '提示',
                message: '点击成功',
            })
        },
    },
}
```

## API

### Props

| 参数  | 说明     | 类型               | 默认值 |
| ----- | -------- | ------------------ | ------ |
| name  | 图标名称 | _string_           | -      |
| size  | 图标大小 | _string \| number_ | -      |
| color | 图标颜色 | _string_           | -      |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击图标时触发 | _event: Event_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称        | 默认值 | 描述 |
| ----------- | ------ | ---- |
| --icon-size | _20px_ | -    |
