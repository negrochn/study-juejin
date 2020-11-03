<template>
  <div>
    <header>递归组件与动态组件</header>
    <hr>
    <main>
      <div>
        <p>
          <strong>递归组件</strong>
        </p>
        <div>
          <RecursiveComponent />
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>动态组件</strong>
        </p>
        <div>
          <button @click="onChange('A')">显示 A 组件</button>
          <button @click="onChange('C')">显示 C 组件</button>
          <button @click="onChange('D')">显示 D 组件</button>
        </div>
        <component :is="component" />

        <Button>普通按钮</Button>
        <br>
        <Button to="https://juejin.im">链接按钮</Button>
        <br>
        <Button
          to="https://juejin.im"
          target="_blank"
        >新窗口打开链接按钮</Button>
      </div>
    </main>
  </div>
</template>

<script>
import RecursiveComponent from '@/components/other/recursive-component'
import A from '@/components/other/a'
import C from '@/components/other/c'
import D from '@/components/other/d'
import Button from '@/components/other/button'

export default {
  name: 'recursion-dynamic',
  components: {
    RecursiveComponent,
    Button,
  },
  data() {
    return {
      component: A,
    }
  },
  methods: {
    onChange(component) {
      if (component === 'A') {
        this.component = A
      } else if (component === 'C') {
        this.component = C
      } else if (component === 'D') {
        this.component = D
      }
    },
  },
}
</script>

<style>
</style>