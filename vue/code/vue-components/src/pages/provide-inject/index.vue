<template>
  <div>
    <header>组件的通信 1 ：provide/inject</header>
    <hr>
    <main>
      <div>
        <p>
          <strong>使用 provide/inject</strong>
        </p>
        <div>
          <B />
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>替代 Vuex</strong>
        </p>
        <div>
          通过 app 获取的 computed 数据：
          {{ this.app.fullName }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import B from '@/components/other/b'

export default {
  name: 'ProvideInject',
  provide: {
    name: 'provide-inject',
  },
  inject: ['app'],
  components: {
    B,
  },
}
</script>

<style>
</style>