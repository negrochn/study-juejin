# Vue.js 组件精讲

Vue.js 最精髓的，正是它的组件与组件化。写一个 Vue 工程，也就是在写一个个的组件。



**组件的分类**

1. 页面组件

   作为路由的渲染，不会被复用，没有 props 和自定义事件。

2. 基础组件

   具有高度抽象的 API ，会被大量使用，不包含业务，例如 iView 。

3. 业务组件

   寄托于项目，被多个页面复用，可以使用 Vuex 、axios 、ECharts 等。



**小册内容**

1. [基础：Vue.js 组件的 3 个 API ：prop 、event 、slot](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E5%9F%BA%E7%A1%80%EF%BC%9A%E7%BB%84%E4%BB%B6%E7%9A%84%E4%B8%89%E4%B8%AA%20API%20%EF%BC%9Aprop%20%E3%80%81event%20%E3%80%81slot.md)
2. [组件的通信 1 ：provide/inject](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1%201.md)
3. [组建的通信 2 ：派发与广播——自行实现 dispatch 和 broadcast 方法](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1%202.md)