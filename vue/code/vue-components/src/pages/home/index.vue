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
      ],
    }
  },
  methods: {},
}
</script>

<style>
</style>