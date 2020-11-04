<template>
  <div>
    <i-tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    />
  </div>
</template>

<script>
import iTreeNode from './node'
import { deepCopy } from '@/utils/assist'

export default {
  name: 'iTree',
  components: {
    iTreeNode,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cloneData: [],
    }
  },
  watch: {
    data() {
      this.rebuildData()
    },
  },
  created() {
    this.rebuildData()
  },
  methods: {
    rebuildData() {
      this.cloneData = deepCopy(this.data)
    },
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData)
    },
  },
}
</script>

<style>
</style>