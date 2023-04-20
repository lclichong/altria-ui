# Loading 加载

### 介绍

加载图标，用于数据加载时的动画。

### 引入

```js
import Vue from 'vue'
import { Loading } from 'altria-ui'

Vue.use(Loading)
```

## 代码演示

### 基础用法

```html
<alt-loading></alt-loading>
```

### 尺寸

通过 `size` 属性设置尺寸。

```html
<alt-loading color="#333" size="mini"></alt-loading>
<alt-loading color="#1989fa" size="small"></alt-loading>
<alt-loading color="#ff976a" size="medium"></alt-loading>
<alt-loading color="#ee0a24" size="large"></alt-loading>
```

### 加载类型

通过 `load-type` 属性设置不同的加载类型。

```html
<alt-loading color="#77DFD6" load-type="default" />
<alt-loading color="#77DFD6" load-type="circle" />
```

### 渐变

```html
<alt-loading :color="['green', 'yellow']" size="large" />
```

### 加载文案

通过 `load-text` 属性设置加载文案。

```html
<alt-loading load-type="circle" load-text="加载中..." />
<alt-loading color="#9c27b0" load-type="circle" load-text="加载中..." />
```

## API

### Props

| 参数      | 说明                                                      | 类型              | 默认值    |
| --------- | --------------------------------------------------------- | ----------------- | --------- |
| color     | 颜色                                                      | _string \| array_ | -         |
| size      | 加载图标尺寸，可选项有 `mini`、`small`、`medium`、`large` | _string_          | `medium`  |
| load-type | 加载类型，可选项有 `default`、`circle`                    | _string_          | `default` |
| load-text | 加载文案                                                  | _string_          | -         |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                          | 默认值             | 描述 |
| ----------------------------- | ------------------ | ---- |
| --loading-default-color       | _var(--accents-7)_ | -    |
| --loading-default-mini-size   | _5px_              | -    |
| --loading-default-small-size  | _6px_              | -    |
| --loading-default-medium-size | _7px_              | -    |
| --loading-default-large-size  | _8px_              | -    |
| --loading-circle-mini-size:   | _20px_             | -    |
| --loading-circle-small-size   | _25px_             | -    |
| --loading-circle-medium-size  | _30px_             | -    |
| --loading-circle-large-size   | _35px_             | -    |
