<template>
  <div>
    <header>基础：Vue.js 组件的三个 API ：props 、event 、slot</header>
    <hr>
    <main>
      <div>
        <p>
          <strong>属性 prop</strong>
        </p>
        <div>
          <i-button size="large">size</i-button>
          <i-button disabled>disabled</i-button>
        </div>
        <div>
          <i-button
            id="btn1"
            class="btn-submit"
          >submit</i-button>
        </div>
      </div>
      <div>
        <p>
          <strong>插槽 slot</strong>
        </p>
        <div>
          <i-button>slot</i-button>
        </div>
      </div>
      <div>
        <p>
          <strong>自定义事件 event</strong>
        </p>
        <div>
          <i-button @on-click="onClick">event</i-button>
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>组件的通信</strong>
        </p>
        <div>
          <A ref="comA" />
          <B />
          <B />
          <B />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import iButton from '@/components/button/button'
import A from '@/components/other/a'
import B from '@/components/other/b'

export default {
  name: 'PropEventSlot',
  components: {
    iButton,
    A,
    B,
  },
  mounted() {
    const comA = this.$refs.comA
    comA.sayHi()
  },
  methods: {
    onClick(event) {
      console.log(event.target)
    },
  },
}
</script>

<style>
</style>