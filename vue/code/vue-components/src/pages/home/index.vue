<template>
  <div>
    <header>Vue.js 组件精讲</header>
    <main>
      <ol>
        <li
          v-for="item in list"
          :key="item.value"
        >
          <router-link :to="{ name: item.value }">{{ item.label }}</router-link>
        </li>
      </ol>
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
          label: '具有数据校验功能的表单组件——Form',
          value: '',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style>
</style>