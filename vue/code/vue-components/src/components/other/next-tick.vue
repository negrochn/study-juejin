<template>
  <div>
    <p
      v-if="show"
      ref="node"
    >内容</p>
    <button @click="onShow">显示</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    onShow() {
      this.show = true
      console.log(this.$refs.node) // undefined
      this.$nextTick(() => {
        console.log(this.$refs.node) // <p>内容</p>
      })
    },
  },
}
</script>

<style>
</style>