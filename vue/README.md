# 《Vue.js 组件精讲》学习总结

## 组件的分类

- 页面组件
- 基础组件
- 业务组件



### 页面组件

作为路由的渲染，不会被复用，没有 props 和自定义事件。

### 基础组件

高度抽象的 API ，被大量使用，不包含业务，例如 iView 。

### 业务组件

寄托于项目，被多个页面复用，可以使用 Vuex 、axios 、ECharts 等。



## 组件的三个 API

- prop
- slot
- event



### prop

定义可配置的属性，推荐对象形式（type 、default 、validator）。

单向数据流。

`inheritAttrs: false` 不会影响 class 和 style 。



### slot

分发组件内容，分为：

- 默认插槽

- 具名插槽

  多个插槽时使用，如子组件 `<slot name="xxx">` ，父组件 `<template v-slot:xxx>` 。

- 作用域插槽

  插槽内容能够访问子组件数据时使用，如子组件 `<slot :slotData="user">` ，`<template v-slot="slotProps">{{ slotProps.slotData.name }}</template>` 。



### event

通过 `$emit` 触发自定义事件。

`.native` 区分原生事件和自定义事件。



## 组件的通信

- ref
- \$parent/\$children
- provide/inject
- dispatch/broadcast



### ref

给元素或组件注册引用的信息。



### \$parent/\$children

基于当前上下文访问父组件或全部子组件。



ref 和 \$parent/\$children 的问题是，无法在跨级或兄弟间通信。



### provide/inject

祖先组件使用 provide 向下提供数据，子孙组件通过 inject 注入。



用于子组件获取父组件（包括跨级）的状态，建立一种主动提供与依赖注入的关系。

provide 和 inject 绑定**不是可响应**的，除非是对象。



**替代 Vuex**

把整个 app.vue 实例通过 provide 对外提供，任何组件只要通过 inject 注入 app ，就可以通过 `this.app.xxx` 访问 app.vue 的 data 、computed 、methods 等内容。



**使用场景**

具有联动关系的组件，如具有数据校验功能的 Form 。



provide/inject 的问题

1. 父组件向子组件（支持跨级）传递数据
2. 子组件向父组件（支持跨级）传递数据



### dispatch/broadcast

**\$on 与 \$emit**

组件使用 \$emit 触发自定义事件，并用 \$on 监听。



**已废弃的 \$dispatch 和 \$broadcast**

\$dispatch 向上级派发事件且上级用 \$on 监听，\$broadcast 向下级广播事件且下级用 \$on 监听。

就近原则，第一次接收到后停止冒泡，除非返回 true 。



**自行实现 dispatch 和 broadcast 方法**

*功能*

- 子组件调用 dispatch ，向上级指定的组件实例（最近的）触发自定义事件并传递数据，且该上级组件已通过 \$on 监听
- 父组件调用 broadcast ，向下级指定的组件实例（最近的）触发自定义事件并传递数据，且下级组件已通过 \$on 监听



*关键点*

如何正确地向上或向下找到对应的组件实例，并在它上面触发方法。



*惯用伎俩*

通过遍历来匹配组件的 name 选项。



*原理*

向上或向下遍历，根据 name 找到组件实例，调用 \$emit 触发自定义事件，并通过 \$on 监听。



*与 Vue.js 1.x 的不同点*

- 需要额外传入组件的 name 作为第一个参数
- 无冒泡机制
- 第三个参数传递的数据，只能是一个（较多时可以传入一个对象）