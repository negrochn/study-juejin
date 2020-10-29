<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'
import { findComponentsDownload } from '@/utils/assist'

export default {
  name: 'iCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentValue: this.value,
      children: [],
    }
  },
  watch: {
    value() {
      this.updateModel(true)
    },
  },
  mounted() {
    this.updateModel(true)
  },
  methods: {
    // 在 CheckboxGroup 里通过 findComponentsDownload 方法找到所有的 Checkbox ，然后把 CheckboxGroup 的 value 赋值给 Checkbox 的 model ，并根据 Checkbox 的 label ，设置一次当前 Checkbox 的选中状态
    updateModel(update) {
      this.children = findComponentsDownload(this, 'iCheckbox')
      if (this.children) {
        const value = this.value
        this.children.forEach((child) => {
          child.model = value

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    change(data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('iFormItem', 'on-form-change', data)
    },
  },
}
</script>

<style>
</style>