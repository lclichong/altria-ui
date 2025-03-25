# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作。

### 引入

```js
import Vue from 'vue'
import { PullRefresh } from 'altria-ui'

Vue.use(PullRefresh)
```

## 代码演示

### 基础用法

```html
<alt-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <p>刷新次数: {{ count }}</p>
</alt-pull-refresh>
```

```js
export default {
    data() {
        return {
            count: 0,
            isLoading: false,
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false
                this.count++
            }, 1000)
        },
    },
}
```

## API

### Props

| 参数     | 说明               | 类型               | 默认值 |
| -------- | ------------------ | ------------------ | ------ |
| v-model  | 是否处于加载中状态 | _boolean_          | -      |
| max-dist | 触发下拉刷新的距离 | _string \| number_ | `150`    |

### Events

| 事件名  | 说明           | 回调参数 |
| ------- | -------------- | -------- |
| refresh | 下拉刷新时触发 | -        |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                           | 默认值             | 描述 |
| ------------------------------ | ------------------ | ---- |
| --pull-refresh-head-height     | _var(--accents-4)_ | -    |
| --pull-refresh-head-font-size  | _var(--font-size-md)_ | -    |
| --pull-refresh-head-text-color | _var(--accents-4)_ | -    |
