# 快速上手

### 介绍

Vue2 的移动端组件库

## 安装

### 通过 npm 安装

```bash
npm i altria-ui -S
```

## 引入组件

### 方式一. 按需引入

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
{
  "plugins": [
    ["import", {
      "libraryName": "altria-ui",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

### 方式二. 导入所有组件

```js
import Vue from 'vue'
import altria from 'altria-ui'
import 'altria-ui/es/index.css'

Vue.use(altria)
```

配置按需引入后，将不允许直接导入所有组件。
