<template>
  <div>
    <header>实战 4 ：全局提示组件——$Alert</header>
    <hr>
    <main>
      <button @click="onOpen1">打开提示 1</button>
      <button @click="onOpen2">打开提示 2</button>
    </main>
  </div>
</template>

<script>
export default {
  name: 'alert',
  methods: {
    onOpen1() {
      this.$Alert.info({
        content: '我是提示信息 1',
      })
    },
    onOpen2() {
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3,
      })
    },
  },
}
</script>

<style>
</style>