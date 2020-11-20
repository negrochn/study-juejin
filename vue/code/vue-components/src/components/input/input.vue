<template>
  <input
    type="text"
    :value="value"
    @input="onInput"
    @blur="onBlur"
  />
</template>

<script>
import Emitter from '@/mixins/emitter.js'

export default {
  name: 'iInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(event) {
      const value = event.target.value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    onBlur() {
      this.dispatch('iFormItem', 'on-form-blur', this.value)
    }
  }
}
</script>

<style>
</style>