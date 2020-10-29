# Vue 的构造器——extend 与手动挂在——$mount

## 使用场景

常规的组件使用方式

- 所有的内容，都是在 #app 节点内渲染的
- 组件的模板，是事先定义好的
- 由于组件的特性，注册的组件只能在当前位置渲染



特殊场景

- 组件的模板是通过调用接口从服务端获取的，需要动态渲染组件
- 实现类似原生 window.alert() 的提示框组件，它的位置是在 `<body>` 下，而非 `<div id="app">` ，并且不会通过常规的组件自定义标签的形式使用，而是像 JS 调用函数一样使用



## 用法

创建一个 Vue 实例时，都会有一个选项 el ，来指定实例的根节点，如果不写 el 选项，那组件就处于未挂载状态。



Vue.extend ，是基于 Vue 构造器，创建一个“子类”，参数跟 new Vue 的基本一样，但 data 跟组件一样是个函数，再配合 $mount ，就可以让组件渲染，并挂载到任意指定的节点上，比如 body 。

```js
import Vue from 'vue'

const AlertComponent = Vue.extend({
  template: '<div>{{ message }}</div>',
  data() {
    return {
      message: 'Hello, Alert'
    }
  }
})
```

以上可以解决异步获取 template 模板的问题。



$mount 对组件进行手动渲染

- 先 $mount ，再将元素 appendChild

  ```js
  const component = new AlertComponent().$mount()
  
  document.body.appendChild(component.$el)
  ```

- 在 $mount 里写参数来指定挂载的节点

  ```js
  new AlertComponent().$mount('#app')
  
  // 不用 $mount ，直接在创建实例时指定 el 选项
  new AlertComponent({ el: '#app' })
  ```



除了用 extend 外，可以直接创建 Vue 实例，并且用一个 Render 函数来渲染一个 .vue 文件。

```js
import Vue from 'vue'
import Notification from './notification'

const props = {} // 这里可以传入一些组件的 props 选项

const Instance = new Vue({
  render(h) {
    return h(Notification, {
      props
    })
  }
})

const component = Instance.$mount()
document.body.appendChild(component.$el)

// 想操作 Render 的 Notification 实例
const notification = Instance.$children[0]
```

用 \$mount 手动渲染的组件，也需要用 \$destroy 手动销毁，必要时也可以用 removeChild 把节点从 DOM 中移除。