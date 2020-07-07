

## 简介

[mobile-web](https://github.com/Adonis0123/mobile-web) 是一个移动端前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [vant](https://github.com/youzan/vant)实现。它使用了大漠的移动端适配方案，使本项目可以更好的适配各种机型



你需要在本地安装 [node](http://nodejs.org/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [vant](https://github.com/youzan/vant)，提前了解和学习这些知识会对使用本项目有很大的帮助。




## 开发功能

```
- 根据命令自动生成views页面、components组件代码

- 自动引入和导出组件，不需要一个一个import

- router、vuex按模块划分

- 根据命名分包处理，可以分成生产环境和预生产环境

- 打包使用gzip压缩，并进行了相对应的拆包处理

- 使用gulpfile一键打包部署
```

## 组件

```
- Svg组件

- Loading组件

- RequestFail组件

- Scroll组件
```

## 开发


# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run serve
```


## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash

# 代码格式检查并自动修复
npm run lint
```


Copyright (c) 2020-present HuangZhiHua
