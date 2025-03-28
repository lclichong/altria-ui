# List 列表

### 介绍

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

### 引入

```js
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
```

## 代码演示

### 基础用法

```html
<alt-list v-model="loading" :finished="finished" @load="onLoad">
    <alt-cell v-for="l,key in list" :key="key" :title="'数据' + key"></alt-cell>
</alt-list>
```

```js
export default {
    created() {
        for (let i = 0; i < 15; i++) {
            this.list.push(i)
        }
    },
    data() {
        return {
            list: [],
            count: 0,
            finished: false,
            loading: false
        }
    },
    methods: {
        onLoad() {
            if (this.loading || this.finished) return
            this.count++
            if (this.count < 5) {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    for (let i = 0; i < 5; i++) {
                        this.list.push(i)
                    }
                }, 2000)
            } else {
                this.finished = true
            }
        }
    }
}
```

## API

### Props

| 参数     | 说明               | 类型               | 默认值 |
| -------- | ------------------ | ------------------ | ------ |
| v-model  | 是否处于加载状态，加载过程中不触发`load`事件 | _boolean_          | `false`     |
| finished | 是否已加载完成，加载完成后不再触发`load`事件 | _boolean_ | `false`    |
| loading-text | 加载过程中的提示文案 | _string_ | `加载中.....`    |
| finished-text | 加载过程中的提示文案 | _string_ | `没有更多了`    |
| threshold | 加载事件触发范围，`0.1` 则表示加载文字元素 `10%` 可见时触发加载事件 | _string_ | `0.1`    |

### Events

| 事件名  | 说明           | 回调参数 |
| ------- | -------------- | -------- |
| load | 加载事件 | -        |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                           | 默认值             | 描述 |
| ------------------------------ | ------------------ | ---- |
| --list-loading-text-size     | _var(--font-size-md)_ | -    |
| --list-loading-text-color  | _var(--accents-2)_ | -    |
| --list-loading-text-height | _50px_ | -    |
