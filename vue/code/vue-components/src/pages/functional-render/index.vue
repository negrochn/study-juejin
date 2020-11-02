<template>
  <div>
    <header>更灵活的组件：Render 函数与 Functional Render</header>
    <hr>
    <main>
      <E :render="render" />
    </main>
  </div>
</template>

<script>
import E from '@/components/other/e'

export default {
  name: 'functional-render',
  components: {
    E,
  },
  data() {
    return {
      render: (h) => {
        return h(
          'div',
          {
            style: {
              color: 'red',
            },
          },
          '自定义内容'
        )
      },
    }
  },
}
</script>

<style>
</style>