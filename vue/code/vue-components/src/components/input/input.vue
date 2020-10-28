<template>
  <input
    type="text"
    :value="currentValue"
    @input="onInput"
    @blur="onBlur"
  >
</template>

<script>
import Emitter from '@/mixins/emitter'

export default {
  name: 'iInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentValue: this.value,
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
  },
  methods: {
    onInput(event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    onBlur() {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    },
  },
}
</script>

<style>
</style>