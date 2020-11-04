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
    value: Number,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  methods: {
    increase(val) {
      this.$emit('input', this.value + val)
    },
  },
}
</script>

<style>
</style>