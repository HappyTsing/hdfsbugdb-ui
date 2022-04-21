# hdfsbugdb

## Description

本项目用于存储毕业设计的前端显示页面

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

查看默认配置

```
vue inspect > output.js
```

See [Configuration Reference](https://cli.vuejs.org/config/).

# Prepare

## 安装依赖

```shell
yarn add vue-router@4
yarn add vuex@next --save
yarn add axios
# element-plus自动导入还需要安装并配置一些东西，详见官网
yarn add element-plus

yarn add svg-sprite-loader -D

# vue-count-to 在vue3无法使用，在issue里看到别人打包的v3版本
yarn add vue-countup-v3
```

## 项目框架

src 中存在如下文件夹：

- api：axios，使用 ajax 请求后端的 api
- assets：静态文件
- components：组件，存放.vue 文件，称为一般组件。会直接在 template 中以 <组件名/>的方式调用
- composables：响应式 api。vue3.0 引入，[参见](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)
- router：vue router
- store：vuex，[vuex 项目架构](https://vuex.vuejs.org/zh/guide/structure.html)
- views：同样存放.vue 文件，不同的是这里的文件都充当视图的作用，即会被路由，称为路由组件。如 about.vue，会路由到：/about。也有人将其命名为 pages

## 开发前设置

### @/_->src/_

设置 jsconfig.json，脚手架已经默认设置。可以用@符号代指 src 目录。

### 关闭 eslint

```JavaScript
lintOnSave: false
```

### 配置 svg 优雅使用

1. 最原始的 icon 使用方式 直接嵌入 svg 代码

2. [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)

```JavaScript
/* vue.config.js */
const path = require("path");
// 定义resolve方法，获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
    chainWebpack: (config) => {
    // 配置svg默认规则排除icons目录中svg文件处理
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();

    // 新增icons规则，设置svg-sprite-loader处理icons目录中svg文件
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  },
})
```

配置完后，在 `main.js` 中导入 svg 即可使用

```javascript
// main.js
import "@/icons/svg/bug.svg";

// <template>
<svg>
  <use xlink:href="#icon-bug"></use>
</svg>;
```

但是这样做还需要每次都引入，很麻烦。因此我们抽象出一个全局组件： `@components/SygIcon/index.vue`
其中将使用逻辑抽象了出来，并进行了一些计算属性的操作。

```JavaScript
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
export default {
  name: "SvgIcon",
}
```

并且在 `@icons/index.js`中书写引入逻辑，只需要在 `main.js` 中导入该文件，以后就无需每次都导入 svg 了。
最终使用时，只需要如此：

```javascript
<template>
  <svg-icon icon-class="qq" class-name="qq-style"></svg-icon>
</template>
```

其中 icon-class 传入你的 svg 文件名，class-name 传入你想写给这个 svg 的样式。

# 项目分析

全局组件：

- Header
  - 放一个搜索框,点击时跳转到搜索
- Content：存放主要内容，其中有个<router-view/>
- Footer

路由组件：路由组件的内容会最终显示在 Content 中

- Home：显示统计信息
  - 第一行 @Home/components/PanelGroup.vue
    - 研究的数据库类型 HDFS
    - issue 的时间跨度 19/03/30 - 22/03/01
    - issue 数量 477
    - 最后更新时间
  - 第二行
    - 一个横跨的大表，展示
- Search
