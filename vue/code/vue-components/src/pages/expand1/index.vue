<template>
  <div>
    <header>扩展：Vue.js 容易忽略的 API 详解</header>
    <hr>
    <main>
      <div>
        <p>
          <strong>nextTick</strong>
        </p>
        <div>
          <NextTick />
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>v-model 语法糖</strong>
        </p>
        <div>
          <VModel v-model="number" />
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>.sync 修饰符</strong>
        </p>
        <div>
          <Sync :value.sync="number" />
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>$set</strong>
        </p>
        <div>
          <Set />
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>计算属性的 set</strong>
        </p>
        <div>
          <Computed />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NextTick from '@/components/other/next-tick'
import VModel from '@/components/other/v-model'
import Sync from '@/components/other/sync'
import Set from '@/components/other/set'
import Computed from '@/components/other/computed'

export default {
  components: {
    NextTick,
    VModel,
    Sync,
    Set,
    Computed,
  },
  data() {
    return {
      number: 0,
    }
  },
}
</script>

<style>
</style>