# Vuex
vuex入门


1、首先执行
vue init webpack learnvuex

2、安装Vuex
npm install vuex --save

3、在src目录中创建一个vuex文件夹，放置我们共享的值


理解Vuex

官方文档的话就是：

Vuex是一个专门为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件状态，
并以响应的规则保证状态以一种可预测的方式发生变化。

大白话：
Vuex就是为了data中需要共享的属性而专门开发的一个存储容器，
在这个容器中，我们把共享的值放入，就可以在所有的组件中获取，使用，操作。

vuex包含五个基础对象：

state：存储状态，也就是变量

getters：派生状态。也就是set、get中的get，有两个参数

mutations：提交状态修改。不支持异步操作，第一个参数默认是state。外部调用store.commit('')

actions：异步操作，第一个参数默认是store

modules：store的子模块，内容相当于是store的一个实例



