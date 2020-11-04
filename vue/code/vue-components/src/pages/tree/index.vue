<template>
  <div>
    <header>实战 7 ：树形控件——Tree</header>
    <hr>
    <main>
      <i-tree
        :data="data"
        :showCheckbox="true"
      />
    </main>
  </div>
</template>

<script>
import iTree from '@/components/tree/tree'

export default {
  name: 'tree',
  components: {
    iTree,
  },
  data() {
    return {
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                },
                {
                  title: 'leaf 1-1-2',
                },
              ],
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1',
                },
                {
                  title: 'leaf 1-2-2',
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
</style>