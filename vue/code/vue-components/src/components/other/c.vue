<template>
  <div>
    <button @click="onEmitEvent">触发自定义事件</button>
  </div>
</template>

<script>
export default {
  mounted() {
    // 监听自定义事件 test
    this.$on('test', (text) => {
      alert(text)
    })
  },
  methods: {
    onEmitEvent() {
      // 在当前组件上触发自定义事件 test ，并传值
      this.$emit('test', 'Hello Vue.js')
    },
  },
}
</script>

<style>
</style>