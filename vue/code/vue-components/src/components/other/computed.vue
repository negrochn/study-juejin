<template>
  <div>
    <div>firstName: {{ firstName }}</div>
    <div>lastName: {{ lastName }}</div>
    <div>fullName: {{ fullName }}</div>
    <button @click="fullName = 'Jack Ma'">设置 fullName</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'negro',
      lastName: 'chn',
    }
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(val) {
        const [firstName, lastName] = val.split(' ')
        this.firstName = firstName
        this.lastName = lastName
      },
    },
  },
}
</script>

<style>
</style>