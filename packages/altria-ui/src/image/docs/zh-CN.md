# Image 图片

### 介绍

提供了更方便的尺寸，填充模式，圆形图片的设置方式。

### 引入

```js
import Vue from 'vue'
import { Image } from 'altria-ui'

Vue.use(Image)
```

## 代码演示

### 基础用法

支持 `img` 标签的原生属性，如`width`、`height`、`alt`。

```html
<alt-image width="100" height="80" :src="image"></alt-image>
```

### 填充模式

通过 `fit` 属性可以设置图片的填充模式。

```html
<alt-image width="85" height="85" :src="image" fit="contain"></alt-image>
<alt-image width="85" height="85" :src="image" fit="cover"></alt-image>
<alt-image width="85" height="85" :src="image" fit="fill"></alt-image>
```

```js
export default {
    data() {
        return {
            image: require('../../../public/fj.jpg'),
        }
    },
}
```

### 圆形图片

通过 `round` 属性可以设置圆形图片。

```html
<alt-image round width="100" height="100" :src="image"></alt-image>
```

## API

### Props

| 参数   | 说明                                         | 类型               | 默认值  |
| ------ | -------------------------------------------- | ------------------ | ------- |
| src    | 图片链接                                     | _string_           | -       |
| width  | 宽度，默认单位为`px`                         | _string \| number_ | -       |
| height | 高度，默认单位为`px`                         | _string \| number_ | -       |
| alt    | 替代文本                                    | _string_           | -       |
| fit    | 填充模式，可选值为`fill`、`cover`、`contain` | _string_           | `fill`  |
| round  | 是否显示为圆形图片                           | _boolean_          | `false` |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击图片时触发 | _event: Event_ |
