# Header 导航栏

### 引入

```js
import Vue from 'vue'
import { Header } from 'altria-ui'

Vue.use(Header)
```

## 代码演示

### 基础用法

`title`属性设置导航栏的标题。

```html
<alt-header title="标题"></alt-header>
```

### 左侧箭头和文本

`leftArrow`属性可以显示左侧箭头，`leftText`属性设置左侧文本。

```html
<alt-header leftArrow leftText="返回" title="标题"></alt-header>
```

### 点击事件

`click-left`属性设置左侧点击事件，`click-right`属性设置右侧点击事件。

```html
<alt-header
    leftArrow
    leftText="返回"
    @click-left="onClickLeft"
    rightText="右边"
    @click-right="onClickRight"
    title="标题"
></alt-header>
```

```js
export default {
    methods: {
        onClickLeft() {
            this.$Dialog.alert({
                title: '提示',
                message: '左边',
            })
        },
        onClickRight() {
            this.$Dialog.alert({
                title: '提示',
                message: '右边',
            })
        },
    },
}
```

### 使用插槽和自定义样式

`left`插槽对应左侧区域内容，`right`插槽对应右侧区域内容。

```html
<alt-header id="header" title="标题" height="46" @click-left="onClickLeft" @click-right="onClickRight">
    <template #left>
        <alt-icon class="demo-icon__left" name="star-outline" size="17"></alt-icon>
    </template>
    <template #right>
        <alt-icon class="demo-icon__right" name="heart-outline" size="17"></alt-icon>
    </template>
</alt-header>
```

```css
#header {
    --header-background-color: #4caf50;
    --header-title-color: #ffeb3b;
    --header-left-color: #ffeb3b;
    --header-right-color: #ffeb3b;
}
```

## API

### Props

| 参数      | 说明             | 类型               | 默认值  |
| --------- | ---------------- | ------------------ | ------- |
| title     | 标题             | _string_           | -       |
| height    | 导航栏高度       | _string \| number_ | -       |
| leftArrow | 是否显示左侧箭头 | _boolean_          | `false` |
| leftText  | 左侧文本         | _string_           | -       |
| rightText | 右侧文本         | _string_           | -       |

### Slots

| 名称  | 说明               |
| ----- | ------------------ |
| left  | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Events

| 事件名      | 说明               | 回调参数       |
| ----------- | ------------------ | -------------- |
| click-left  | 点击左侧按钮时触发 | _event: Event_ |
| click-right | 点击右侧按钮时触发 | _event: Event_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                       | 默认值                    | 描述 |
| -------------------------- | ------------------------- | ---- |
| --header-background-color  | _var(--accents-6)_        | -    |
| --header-title-font-weight | _var(--font-weight-blod)_ | -    |
| --header-title-color       | _var(--accents-4)_        | -    |
| --header-left-color        | _var(--accents-4)_        | -    |
| --header-right-color       | _var(--accents-4)_        | -    |
