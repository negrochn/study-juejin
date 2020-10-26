<template>
  <div>{{ title }}</div>
</template>

<script>
export default {
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