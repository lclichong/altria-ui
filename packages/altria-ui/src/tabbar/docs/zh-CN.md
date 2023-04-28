# Tabbar 标签栏

### 引入

```js
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'altria-ui'

Vue.use(Tabbar)
Vue.use(TabbarItem)
```

## 代码演示

### 基础用法

```html
<alt-tabbar v-model="active">
    <alt-tabbar-item icon="home-outline">标签</alt-tabbar-item>
    <alt-tabbar-item icon="magnify">标签</alt-tabbar-item>
    <alt-tabbar-item icon="account-circle-outline">标签</alt-tabbar-item>
    <alt-tabbar-item icon="cog-outline">标签</alt-tabbar-item>
</alt-tabbar>
```

```js
export default {
    data() {
        return {
            active: 0,
        }
    },
}
```

### 通过名称匹配

标签设置`name`属性后，`v-model`的值匹配对应的`name`属性。

```html
<alt-tabbar v-model="active">
    <alt-tabbar-item name="home" icon="home-outline">标签</alt-tabbar-item>
    <alt-tabbar-item name="search" icon="magnify">标签</alt-tabbar-item>
    <alt-tabbar-item name="friends" icon="account-circle-outline">标签</alt-tabbar-item>
    <alt-tabbar-item name="setting" icon="cog-outline">标签</alt-tabbar-item>
</alt-tabbar>
```

```js
export default {
    data() {
        return {
            active: 'friends',
        }
    },
}
```

### 徽标提示

设置 `dot` 属性会在图标右上角显示一个小红点，`badge` 属性可以设置具体数量。

```html
<alt-tabbar v-model="active">
    <alt-tabbar-item icon="home-outline">标签</alt-tabbar-item>
    <alt-tabbar-item icon="magnify" dot>标签</alt-tabbar-item>
    <alt-tabbar-item icon="account-circle-outline" badge="5">标签</alt-tabbar-item>
    <alt-tabbar-item icon="cog-outline" badge="99">标签</alt-tabbar-item>
</alt-tabbar>
```

### 自定义颜色

`active-color`属性设置选中菜单的颜色。

```html
<alt-tabbar v-model="active" active-color="#ba68c8">
    <alt-tabbar-item icon="home-outline">标签</alt-tabbar-item>
    <alt-tabbar-item icon="magnify">标签</alt-tabbar-item>
    <alt-tabbar-item icon="account-circle-outline">标签</alt-tabbar-item>
    <alt-tabbar-item icon="cog-outline">标签</alt-tabbar-item>
</alt-tabbar>
```

### 点击事件

```html
<alt-tabbar v-model="active">
    <alt-tabbar-item @click="handleClick" icon="home-outline">标签</alt-tabbar-item>
    <alt-tabbar-item @click="handleClick" icon="magnify">标签</alt-tabbar-item>
    <alt-tabbar-item @click="handleClick" icon="account-circle-outline">标签</alt-tabbar-item>
    <alt-tabbar-item @click="handleClick" icon="cog-outline">标签</alt-tabbar-item>
</alt-tabbar>
```

```js
export default {
    data() {
        return {
            active: 0,
        }
    },
    methods: {
        handleClick(active) {
            this.$Dialog.alert({
                title: '提示',
                message: 'clicked ' + active,
            })
        },
    },
}
```

### 切换事件

```html
<alt-tabbar v-model="active" @change="handleChange">
    <alt-tabbar-item icon="home-outline">标签</alt-tabbar-item>
    <alt-tabbar-item icon="magnify">标签</alt-tabbar-item>
    <alt-tabbar-item icon="account-circle-outline">标签</alt-tabbar-item>
    <alt-tabbar-item icon="cog-outline">标签</alt-tabbar-item>
</alt-tabbar>
```

```js
export default {
    data() {
        return {
            active: 0,
        }
    },
    methods: {
        handleChange(active) {
            this.$Dialog.alert({
                title: '提示',
                message: 'changed to ' + active,
            })
        },
    },
}
```

## API

### Tabbar Props

| 参数         | 说明                       | 类型               | 默认值 |
| ------------ | -------------------------- | ------------------ | ------ |
| v-model      | 当前选中标签的名称或索引值 | _string \| number_ | -      |
| active-color | 选中标签的颜色             | _string_           | -      |

### Tabbar Events

| 事件名 | 说明           | 回调参数                           |
| ------ | -------------- | ---------------------------------- |
| change | 切换标签时触发 | active: 当前选中标签的名称或索引值 |

### TabbarItem Props

| 参数  | 说明                       | 类型               | 默认值  |
| ----- | -------------------------- | ------------------ | ------- |
| name  | 标签名称，作为匹配的标识符 | _string_           | -       |
| icon  | 图标名称                   | _string_           | -       |
| dot   | 是否显示图标右上角小红点   | _boolean_          | `false` |
| badge | 图标右上角徽标的内容       | _string \| number_ | -       |

### TabbarItem Events

| 事件名 | 说明           | 回调参数                           |
| ------ | -------------- | ---------------------------------- |
| click  | 点击标签时触发 | active: 当前选中标签的名称或索引值 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                 | 默认值                 | 描述 |
| ------------------------------------ | ---------------------- | ---- |
| --tabbar-height                      | _50px_                 | -    |
| --tabbar-background-color            | _var(--accents-4)_     | -    |
| --tabbar-item-inactive-color         | _var(--accents-8)_     | -    |
| --tabbar-item-active-color           | _var(--accents-10)_    | -    |
| --tabbar-item-dot-background-color   | _var(--error-default)_ | -    |
| --tabbar-item-badge-background-color | _var(--error-default)_ | -    |
| --tabbar-item-font-size              | _var(--font-size-sm)_  | -    |
| --tabbar-item-icon-size              | _22px_                 | -    |
