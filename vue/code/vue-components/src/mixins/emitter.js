function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      // 不断向上遍历更新当前组件的父组件实例，
      // 直到匹配到定义的 componentName 与某个上级组件的 name 选项一致时，结束循环
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      // 在找到的组件实例上，调用 $emit 触发自定义事件 eventName 并传递参数 params
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
