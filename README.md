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
yarn add element-plus
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

设置 jsconfig.json，似乎默认就设置好了。可以用@符号代指 src 目录。

### 关闭 eslint

# 项目分析

全局组件：

- Header
  - 放一个搜索框
- Footer

路由组件：

- Home
- Search
