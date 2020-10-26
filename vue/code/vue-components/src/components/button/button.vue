<template>
  <button
    :class="'i-button-size' + size"
    :disabled="disabled"
    @click="onClick"
  >
    <slot name="icon"></slot>
    <slot>default</slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

export default {
  inheritAttrs: false, // 不希望组件的根元素继承 attribute ，不会影响 style 和 calss 的绑定
  name: 'iButton',
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(event) {
      this.$emit('on-click', event) // 通过 $emit 触发自定义事件 on-click ，在父级通过 @on-click 来监听
    },
  },
}
</script>

<style>
</style>