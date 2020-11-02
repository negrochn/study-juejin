<template>
  <div>
    <Render :render="render" />
  </div>
</template>

<script>
import Render from '@/utils/render.js'

export default {
  components: {
    Render,
  },
  props: {
    render: Function,
  },
}
</script>

<style>
</style>