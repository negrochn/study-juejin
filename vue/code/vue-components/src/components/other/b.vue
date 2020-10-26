<template>
  <div>
    <div>{{ title }}</div>
    <div>通过 inject 接收的数据：{{ name }}</div>
  </div>
</template>

<script>
export default {
  inject: ['name'],
  data() {
    return {
      title: 'B',
    }
  },
  methods: {
    sayHi() {
      alert(`Hi, I'm B`)
    },
  },
}
</script>

<style>
</style>