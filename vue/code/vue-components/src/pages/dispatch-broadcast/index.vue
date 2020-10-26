<template>
  <div>
    <header>组件的通信 2 ：派发与广播——自行实现 dispatch 和 broadcast 方法</header>
    <hr>
    <main>
      <div>
        <p>
          <strong>$on 与 $emit</strong>
        </p>
        <div>
          <C />
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>自行实现 dispatch 和 broadcast 方法</strong>
        </p>
        <div>
          <D />
          <button @click="onClick">触发事件</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'
import C from '@/components/other/c'
import D from '@/components/other/d'

export default {
  name: 'DispatchBroadcast',
  components: {
    C,
    D,
  },
  mixins: [Emitter],
  methods: {
    onClick() {
      this.broadcast('D', 'on-message', `Hello D, I'm dispatch-broadcast`)
    },
  },
}
</script>

<style>
</style>