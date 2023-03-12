# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

```js
import Vue from 'vue'
import { Cell } from 'altria-ui'

Vue.use(Cell)
```

## 代码演示

### 基础用法

```html
<alt-cell title="单元格" value="内容" />
```

### 使用插槽

可以使用插槽来自定义内容。

```html
<alt-cell>
  <template slot="title">
    <alt-image width="80%" height="20vw" :src="image" fit="contain"></alt-image>
  </template>
  <template slot="value">
    <p>素胚勾勒出青花笔锋浓转淡</p>
    <p>瓶身描绘的牡丹一如你初妆</p>
    <p>冉冉檀香透过窗心事我了然</p>
  </template>
</alt-cell>
```

## API

### props

| 参数  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| title | 左侧标题 | _string_ | -      |
| value | 右侧内容 | _string_ | -      |

### Cell Events

| 事件名 | 说明             | 回调参数       |
| ------ | ---------------- | -------------- |
| click  | 点击单元格时触发 | _event: Event_ |

### Cell Slots

| 名称  | 说明                    |
| ----- | ----------------------- |
| title | 自定义左侧 title 的内容 |
| value | 自定义右侧 value 的内容 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称               | 默认值                | 描述 |
| ------------------ | --------------------- | ---- |
| --cell-title-color | _var(--accents-3)_    | -    |
| --cell-value-color | _var(--accents-2)_    | -    |
| --cell-font-size   | _var(--font-size-md)_ | -    |
| --cell-line-height | _24px_                | -    |
