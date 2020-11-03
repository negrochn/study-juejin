<template>
  <div>
    递归组件 {{ count }}
    <recursive-component
      :count="count + 1"
      v-if="count <= 5"
    />
  </div>
</template>

<script>
export default {
  name: 'recursive-component',
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style>
</style>