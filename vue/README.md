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

1. [基础：Vue.js 组件的 3 个 API ：prop 、event 、slot](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E5%9F%BA%E7%A1%80.md)
2. [组件的通信 1 ：provide/inject](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1%201.md)
3. [组建的通信 2 ：派发与广播——自行实现 dispatch 和 broadcast 方法](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1%202.md)
4. [实战 1 ：具有数据校验功能的表单组件——Form](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E5%AE%9E%E6%88%98%201.md)
5. [组件的通信 3 ：找到任意组件实例——findComponents 系列方法](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1%203.md)
6. [实战 2 ：组合多选框组件——CheckboxGroup & Checkbox](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E5%AE%9E%E6%88%98%202.md)
7. [Vue 的构造器——extend 与手动挂在——$mount](https://github.com/negrochn/study-juejin/blob/master/vue/doc/Vue%20%E7%9A%84%E6%9E%84%E9%80%A0%E5%99%A8.md)
8. [实战 3 ：动态渲染 .vue 文件的组件——Display](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E5%AE%9E%E6%88%98%203.md)
9. [实战 4 ：全局提示组件——$Alert](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E5%AE%9E%E6%88%98%204.md)
10. [更灵活的组件：Render 函数与 Functional Render](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E6%9B%B4%E7%81%B5%E6%B4%BB%E7%9A%84%E7%BB%84%E4%BB%B6.md)
11. [实战 5 ：可用 Render 自定义列的表格组件——Table](https://github.com/negrochn/study-juejin/blob/master/vue/doc/%E5%AE%9E%E6%88%98%205.md)

