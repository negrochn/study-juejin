<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      app: this,
    }
  },
  computed: {
    fullName() {
      return this.lastName + this.firstName
    },
  },
  data() {
    return {
      firstName: 'chn',
      lastName: 'negro',
    }
  },
}
</script>

<style>
</style>
