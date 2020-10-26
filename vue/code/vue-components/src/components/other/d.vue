<template>
  <div>D</div>
</template>

<script>
export default {
  name: 'D',
  created() {
    this.$on('on-message', this.showMessage)
  },
  methods: {
    showMessage(text) {
      alert(text)
    },
  },
}
</script>

<style>
</style>