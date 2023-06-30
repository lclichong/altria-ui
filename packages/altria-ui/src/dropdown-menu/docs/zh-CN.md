# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

### 引入

```js
import Vue from 'vue'
import { DropdownMenu, DropdownItem } from 'altria-ui'

Vue.use(DropdownMenu)
Vue.use(DropdownItem)
```

## 代码演示

### 基础用法

```html
<alt-dropdown-menu>
    <alt-dropdown-item v-model="value1" :options="options1" title="区域"></alt-dropdown-item>
    <alt-dropdown-item v-model="value2" :options="options2" title="天气"></alt-dropdown-item>
</alt-dropdown-menu>
```

```js
export default {
    data() {
        return {
            value1: '',
            value2: '',
            options1: [
                {
                    value: '徐汇区',
                    text: '徐汇区',
                },
                {
                    value: '松江区',
                    text: '松江区',
                },
            ],
            options2: [
                {
                    value: '阴天',
                    text: '阴天',
                },
                {
                    value: '晴天',
                    text: '晴天',
                },
            ],
        }
    },
}
```

### 多选

`v-model`类型是数组时设置为多选。

```html
<alt-dropdown-menu>
    <alt-dropdown-item v-model="value3" :options="options3" title="兴趣爱好"></alt-dropdown-item>
    <alt-dropdown-item v-model="value4" :options="options4" title="技能"></alt-dropdown-item>
</alt-dropdown-menu>
```

```js
export default {
    data() {
        return {
            value3: [],
            value4: [],
            options3: [
                {
                    value: '篮球',
                    text: '篮球',
                },
                {
                    value: '足球',
                    text: '足球',
                },
                {
                    value: '台球',
                    text: '台球',
                },
            ],
            options4: [
                {
                    value: 'Vue',
                    text: 'Vue',
                },
                {
                    value: 'React',
                    text: 'React',
                },
                {
                    value: 'CSS',
                    text: 'CSS',
                },
                {
                    value: 'JavaScript',
                    text: 'JavaScript',
                },
            ],
        }
    },
}
```

### 默认值

```html
<alt-dropdown-menu>
    <alt-dropdown-item v-model="value5" :options="options5" title="姓名"></alt-dropdown-item>
    <alt-dropdown-item v-model="value6" :options="options6" title="兴趣爱好"></alt-dropdown-item>
</alt-dropdown-menu>
```

```js
export default {
    data() {
        return {
            value5: '李四',
            value6: [
                {
                    value: '篮球',
                },
                {
                    value: '足球',
                },
            ],
            options5: [
                {
                    value: '张三',
                    text: '张三',
                },
                {
                    value: '李四',
                    text: '李四',
                },
                {
                    value: '王五',
                    text: '王五',
                },
            ],
            options6: [
                {
                    value: '篮球',
                    text: '篮球',
                },
                {
                    value: '足球',
                    text: '足球',
                },
                {
                    value: '台球',
                    text: '台球',
                },
            ],
        }
    },
}
```

## API

### DropdownItem Props

| 参数    | 说明         | 类型              | 默认值 |
| ------- | ------------ | ----------------- | ------ |
| v-model | 对应选中的值 | _string \| array_ | -      |
| options | 选项数组     | _array_           | -      |
| title   | 菜单标题     | _string_          | -      |

### Options 数据结构

| 参数  | 说明     | 类型     |
| ----- | -------- | -------- |
| text  | 显示文字 | _string_ |
| value | 值       | _string_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                         | 默认值                 | 描述 |
| ---------------------------- | ---------------------- | ---- |
| --dropdown-item-change-color | _var(--error-default)_ | -    |
