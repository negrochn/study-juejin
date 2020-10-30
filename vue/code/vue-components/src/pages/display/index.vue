<template>
  <div>
    <header>实战 3 ：动态渲染 .vue 文件的组件——Display</header>
    <hr>
    <main>
      <i-display :code="code" />
    </main>
  </div>
</template>

<script>
import iDisplay from '@/components/display/display'
import defaultCode from './default-code'

export default {
  name: 'display',
  components: {
    iDisplay,
  },
  data() {
    return {
      code: defaultCode,
    }
  },
}
</script>

<style>
</style>