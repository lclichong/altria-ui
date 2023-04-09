# Swipe 轮播

### 介绍

用于循环播放一组图片或内容。

### 引入

```js
import Vue from 'vue'
import { Swipe, SwipeItem } from 'altria-ui'

Vue.use(Swipe)
Vue.use(SwipeItem)
```

## 代码演示

### 基础用法

```html
<alt-swipe>
    <alt-swipe-item>1</alt-swipe-item>
    <alt-swipe-item>2</alt-swipe-item>
    <alt-swipe-item>3</alt-swipe-item>
    <alt-swipe-item>4</alt-swipe-item>
</alt-swipe>
```

### 轮播

`autoplay`属性设置轮播间隔。

```html
<alt-swipe :autoplay="autoplay">
    <alt-swipe-item v-for="(img, key) in images" :key="key">
        <img :src="img.url" />
    </alt-swipe-item>
</alt-swipe>
```

```js
export default {
    data() {
        return {
            images: [
                {
                    url: require('../../../public/slide1.jpg'),
                },
                {
                    url: require('../../../public/slide2.jpg'),
                },
                {
                    url: require('../../../public/slide3.jpg'),
                },
            ],
            autoplay: 2000,
        }
    },
}
```

### 禁止循环轮播

`loop`属性设置是否开启循环轮播。

```html
<alt-swipe :loop="false">
    <alt-swipe-item v-for="(img, key) in images" :key="key">
        <img :src="img.url" />
    </alt-swipe-item>
</alt-swipe>
```

### 不显示指示器

`show-indicators`属性设置是否显示指示器。

```html
<alt-swipe :show-indicators="false">
    <alt-swipe-item v-for="(img, key) in images" :key="key">
        <img :src="img.url" />
    </alt-swipe-item>
</alt-swipe>
```

## API

### Props

| 参数            | 说明             | 类型               | 默认值  |
| --------------- | ---------------- | ------------------ | ------- |
| autoplay        | 自动轮播间隔     | _string \| number_ | -       |
| duration        | 轮播动画时长     | _string \| number_ | `500ms` |
| loop            | 是否开启循环轮播 | _boolean_          | `true`  |
| show-indicators | 是否显示指示器   | _boolean_          | `true`  |

### SwipeItem Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                    | 默认值             | 描述 |
| ----------------------- | ------------------ | ---- |
| --swipe-indicator-color | _var(--accents-4)_ | -    |
