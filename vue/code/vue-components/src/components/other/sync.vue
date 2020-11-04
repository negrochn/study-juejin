<template>
  <div>
    <button @click="increase(-1)">减 1</button>
    <span style="color: red; padding: 6px;">{{ value }}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
    },
  },
  methods: {
    increase(val) {
      this.$emit('update:value', this.value + val)
    },
  },
}
</script>

<style>
</style>