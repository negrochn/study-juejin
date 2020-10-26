<template>
  <div>{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'A',
    }
  },
  methods: {
    sayHi() {
      alert(`Hi, I'm A`)
    },
  },
}
</script>

<style>
</style>