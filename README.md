<div align="center">
  <h1>ALTRIA-UI</h1>
  <p>基于 Vue2 的移动端组件库</p>
  <br>
</div>

### 快速上手

1. 运行 `yarn add altria-ui` 或者 `npm install altria-ui` 安装。

2. 

```js
import Vue from 'vue'
import App from './App.vue'
import altria from 'altria-ui'
import 'altria-ui/es/index.css'

Vue.use(altria)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

## 浏览器支持

altria-ui 支持现代浏览器以及 Android >= 4.0、iOS >= 8.0

## 文档

- [中文文档](https://lclichong.github.io/altria-ui/)