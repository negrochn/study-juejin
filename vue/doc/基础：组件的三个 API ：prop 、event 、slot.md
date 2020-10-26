# 基础：Vue.js 组件的 3 个 API ：prop 、event 、slot

## 组件的构成

Vue.js 组件的 3 个 API ：prop 、event 、slot 。



**属性 prop**

定义**可配置**的属性，推荐**对象**的形式（ type 、default 、validator），单向数据流，`inheritAttrs: false` 。



**插槽 slot**

分发组件的内容，分为：

- 默认插槽

- 具名插槽

  多个插槽时使用，如子组件 `<slot name="xxx">` ，父组件 `<template v-slot:"xxx">` 。

- 作用域插槽

  插槽内容能够访问子组件数据时，如子组件 `<slot :slotData="user">` ，父组件 `<template v-slot="slotProps">{{ slotProps.slotData.firstName }}</template>` 。



**自定义事件 event**

通过 $emit 触发自定义事件。`.native` 区分原生事件和自定义事件。



```vue
<!-- button.vue -->
<template>
  <button
    :class="'i-button-size' + size"
    :disabled="disabled"
    @click="onClick"
  >
    <slot name="icon"></slot>
    <slot>default</slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

export default {
  inheritAttrs: false, // 不希望组件的根元素继承 attribute ，不会影响 style 和 calss 的绑定
  name: 'iButton',
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(event) {
      this.$emit('on-click', event) // 通过 $emit 触发自定义事件 on-click ，在父级通过 @on-click 来监听
    },
  },
}
</script>

<style>
</style>
```

```vue
<!-- 使用 button.vue -->
<template>
  <div>
    <header>基础：Vue.js 组件的三个 API ：props 、event 、slot</header>
    <main>
      <div>
        <p>
          <strong>属性 prop</strong>
        </p>
        <div>
          <i-button size="large">size</i-button>
          <i-button disabled>disabled</i-button>
        </div>
        <div>
          <i-button
            id="btn1"
            class="btn-submit"
          >submit</i-button>
        </div>
      </div>
      <div>
        <p>
          <strong>插槽 slot</strong>
        </p>
        <div>
          <i-button>slot</i-button>
        </div>
      </div>
      <div>
        <p>
          <strong>自定义事件 event</strong>
        </p>
        <div>
          <i-button @on-click="onClick">event</i-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import iButton from '@/components/button/button'

export default {
  name: 'PropEventSlot',
  components: {
    iButton,
  },
  methods: {
    onClick(event) {
      console.log(event.target)
    },
  },
}
</script>

<style>
</style>
```



## 组件的通信

![组件关系图](https://user-gold-cdn.xitu.io/2018/10/18/166864d066bbcf69?imageslim)

A 和 B 、B 和 C 、B 和 D 是父子关系，C 和 D 是兄弟关系，A 和 C 是隔代关系（可能隔多代）。



Vue.js 内置的通信手段有：

- `ref` ：给元素或组件注册引用信息
- `$parent/$children` ：访问父/子实例

这两种方法直接得到组件实例，可以直接调用组件的方法或访问数据，但无法在跨级或兄弟间通信。

