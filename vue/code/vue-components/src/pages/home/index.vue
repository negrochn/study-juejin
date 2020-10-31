<template>
  <div>
    <header>Vue.js 组件精讲</header>
    <main>
      <ul>
        <li
          v-for="item in list"
          :key="item.value"
        >
          <router-link :to="{ name: item.value }">{{ item.label }}</router-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [
        {
          label: '基础：Vue.js 组件的三个 API ：props 、event 、slot',
          value: 'prop-event-slot',
        },
        {
          label: '组件的通信 1 ：provide/inject',
          value: 'provide-inject',
        },
        {
          label:
            '组件的通信 2 ：派发与广播——自行实现 dispatch 和 broadcast 方法',
          value: 'dispatch-broadcast',
        },
        {
          label: '实战 1 ：具有数据校验功能的表单组件——Form',
          value: 'form',
        },
        {
          label: '实战 2 ：组合多选框组件——CheckboxGroup & Checkbox',
          value: 'checkbox',
        },
        {
          label: '实战 3 ：动态渲染 .vue 文件的组件——Display',
          value: 'display',
        },
        {
          label: '实战 4 ：全局提示组件——$Alert',
          value: 'alert',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style>
</style>