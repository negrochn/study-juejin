<template>
  <div>
    <header>实战 2 ：组合多选框组件——CheckboxGroup & Checkbox</header>
    <hr>
    <main>
      <div>
        <p>
          <strong>单独使用的 Checkbox</strong>
        </p>
        <div>
          <i-checkbox v-model="singleValue">单选框</i-checkbox>
          <div>{{ singleValue }}</div>
        </div>
      </div>
      <hr>
      <div>
        <p>
          <strong>组合使用的 CheckboxGroup</strong>
        </p>
        <div>
          <i-checkbox-group v-model="multiValue">
            <i-checkbox label="iphone12mini">iPhone 12 Mini</i-checkbox>
            <i-checkbox label="iphone12">iPhone 12</i-checkbox>
            <i-checkbox label="iphone12pro">iPhone 12 Pro</i-checkbox>
            <i-checkbox label="iphone12promax">iPhone 12 Pro Max</i-checkbox>
          </i-checkbox-group>
          <div>{{ multiValue }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import iCheckbox from '@/components/checkbox/checkbox'
import iCheckboxGroup from '@/components/checkbox/checkbox-group'
export default {
  name: 'checkbox',
  components: {
    iCheckbox,
    iCheckboxGroup,
  },
  data() {
    return {
      singleValue: false,
      multiValue: [],
    }
  },
}
</script>

<style>
</style>