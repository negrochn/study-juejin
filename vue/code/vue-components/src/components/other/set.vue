<template>
  <div>
    <div>
      数组：
      <ul>
        <li
          v-for="(item, index) in arr"
          :key="index"
        >{{ item }}</li>
      </ul>
    </div>
    <button @click="onArrClick">改变数组第 2 项的值</button>
    <div>
      对象：
      <ul>
        <li
          v-for="(value, key) in obj"
          :key="key"
        >{{ key }}: {{ value }}</li>
      </ul>
    </div>
    <button @click="onObjClick">增加对象的属性</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['a', 'b', 'c'],
      obj: {
        a: 1,
      },
    }
  },
  methods: {
    onArrClick() {
      // this.arr[1] = 'x' // 不是响应式的
      this.$set(this.arr, 1, 'x')
    },
    onObjClick() {
      // this.obj.b = 2 // 不是响应式的
      this.$set(this.obj, 'b', 2)
    },
  },
}
</script>

<style>
</style>