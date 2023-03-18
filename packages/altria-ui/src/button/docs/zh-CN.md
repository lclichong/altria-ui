# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

```js
import Vue from 'vue'
import { Button } from 'altria-ui'

Vue.use(Button)
```

## 代码演示

### 按钮类型

按钮支持 `default`、`success`、`warning`、`error` 四种类型，默认为 `default`。

```html
<alt-button type="default">default</alt-button>
<alt-button type="success">success</alt-button>
<alt-button type="warning">warning</alt-button>
<alt-button type="error">error</alt-button>
```

### 尺寸

通过 `size` 属性设置不同大小的按钮组件。

```html
<alt-button type="success" size="mini">mini</alt-button>
<alt-button type="success" size="small">small</alt-button>
<alt-button type="success" size="medium">medium</alt-button>
<alt-button type="success" size="large">large</alt-button>
```

### 禁用

通过 `disabled` 禁止任何交互响应。

```html
<alt-button disabled="disabled">button</alt-button>
```

### 加载中

表示正在运行或加载中的状态。

```html
<alt-button type="success" loading>button</alt-button>
<alt-button type="warning" loading load-type="circle">button</alt-button>
<alt-button type="error" loading load-type="circle" load-text="加载中..."> button </alt-button>
```

### 阴影

使用阴影突出显示更高层级的按钮。

```html
<alt-button type="default" shadow>button</alt-button>
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```html
<alt-button type="success" color="#7232dd">button</alt-button>
<alt-button type="success" color="linear-gradient(to right, #ff6034, #9c27b0)"> button </alt-button>
```

## API

### Props

| 属性      | 说明             | 类型      | 可选值                             | 默认      |
| --------- | ---------------- | --------- | ---------------------------------- | --------- |
| type      | 按钮属性         | _string_  | `default, success, warning, error` | `default` |
| size      | 按钮大小         | _string_  | `mini, small, medium, large`       | `medium`  |
| disabled  | 是否禁用按钮     | _boolean_ | `true, false`                      | `false`   |
| loading   | 是否启用加载中   | _boolean_ | `true, false`                      | `false`   |
| load-type | 设置加载中的风格 | _string_  | `default, circle`                  | `default` |
| load-text | 加载状态提示文字 | _string_  | `-`                                | `-`       |
| shadow    | 是否显示阴影     | _boolean_ | `true, false`                      | `false`   |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击按钮时触发 | _event: Event_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                         | 默认值                   | 描述 |
| ---------------------------- | ------------------------ | ---- |
| --button-default-color       | _var(--primary-default)_ | -    |
| --button-success-color       | _var(--success-default)_ | -    |
| --button-warning-color       | _var(--warning-default)_ | -    |
| --button-error-color         | _var(--error-default)_   | -    |
| --button-mini-width          | _85px_                   | -    |
| --button-small-width         | _150px_                  | -    |
| --button-medium-width        | _200px_                  | -    |
| --button-large-width         | _250px_                  | -    |
| --button-mini-height         | _30px_                   | -    |
| --button-small-height        | _35px_                   | -    |
| --button-medium-height       | _40px_                   | -    |
| --button-large-height        | _45px_                   | -    |
| --button-disabled-text-color | _var(--accents-2)_       | -    |
| --button-disabled-bg-color   | _var(--accents-1)_       | -    |
