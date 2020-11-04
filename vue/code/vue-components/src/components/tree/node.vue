<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span
        class="tree-expand"
        @click="onExpand"
      >
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <i-checkbox
        v-if="showCheckbox"
        :value="data.checked"
        @input="onCheck"
      />
      <span>{{ data.title }}</span>
      <template v-for="(item, index) in data.children">
        <i-tree-node
          v-if="data.expand"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
        />
      </template>
    </li>
  </ul>
</template>

<script>
import iCheckbox from '@/components/checkbox/checkbox'
import { findComponentUpward } from '@/utils/assist'

export default {
  name: 'iTreeNode',
  components: {
    iCheckbox,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tree: findComponentUpward(this, 'iTree'),
    }
  },
  watch: {
    'data.children': {
      handler(data) {
        if (data) {
          const checkedAll = !data.some((item) => !item.checked)
          this.$set(this.data, 'checked', checkedAll)
        }
      },
      deep: true,
    },
  },
  methods: {
    onExpand() {
      this.$set(this.data, 'expand', !this.data.expand)

      if (this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data)
      }
    },
    onCheck(checked) {
      this.updateTreeDown(this.data, checked)

      if (this.tree) {
        this.tree.emitEvent('on-check-change', this.data)
      }
    },
    updateTreeDown(data, checked) {
      this.$set(data, 'checked', checked)

      if (data.children && data.children.length) {
        data.children.forEach((item) => {
          this.updateTreeDown(item, checked)
        })
      }
    },
  },
}
</script>

<style>
.tree-ul,
.tree-li {
  list-style: none;
  padding-left: 10px;
}
.tree-expand {
  cursor: pointer;
}
</style>