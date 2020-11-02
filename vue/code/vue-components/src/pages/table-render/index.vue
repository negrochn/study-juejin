<template>
  <div>
    <header>实战 5 ：可用 Render 自定义列的表格组件——Table</header>
    <hr>
    <main>
      <i-table
        :columns="columns"
        :data="data"
      />
    </main>
  </div>
</template>

<script>
import iTable from '@/components/table-render/table'

export default {
  name: 'table-render',
  components: {
    iTable,
  },
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name',
          render: (h, { row, index }) => {
            let edit

            // 当前行为聚焦行时
            if (this.editIndex === index) {
              edit = [
                h('input', {
                  domProps: {
                    value: row.name,
                  },
                  on: {
                    input: (event) => {
                      this.editName = event.target.value
                    },
                  },
                }),
              ]
            } else {
              edit = row.name
            }

            return h('div', [edit])
          },
        },
        {
          title: '年龄',
          key: 'age',
          render: (h, { row, index }) => {
            let edit

            // 当前行为聚焦行时
            if (this.editIndex === index) {
              edit = [
                h('input', {
                  domProps: {
                    value: row.age,
                  },
                  on: {
                    input: (event) => {
                      this.editAge = event.target.value
                    },
                  },
                }),
              ]
            } else {
              edit = row.age
            }

            return h('div', [edit])
          },
        },
        {
          title: '出生日期',
          key: 'birthday',
          render: (h, { row, column, index }) => {
            let edit

            // 当前行为聚焦行时
            if (this.editIndex === index) {
              edit = [
                h('input', {
                  domProps: {
                    value: row.birthday,
                  },
                  on: {
                    input: (event) => {
                      this.editBirthday = event.target.value
                    },
                  },
                }),
              ]
            } else {
              const date = new Date(parseInt(row.birthday))
              const year = date.getFullYear()
              const month = date.getMonth() + 1
              const day = date.getDate()
              edit = `${year}-${month}-${day}`
            }

            return h('div', [edit])
          },
        },
        {
          title: '地址',
          key: 'address',
          render: (h, { row, index }) => {
            let edit

            // 当前行为聚焦行时
            if (this.editIndex === index) {
              edit = [
                h('input', {
                  domProps: {
                    value: row.address,
                  },
                  on: {
                    input: (event) => {
                      this.editAddress = event.target.value
                    },
                  },
                }),
              ]
            } else {
              edit = row.address
            }

            return h('div', [edit])
          },
        },
        {
          title: '操作',
          render: (h, { row, index }) => {
            // 如果当前行时编辑状态，则渲染两个按钮
            if (this.editIndex === index) {
              return [
                h(
                  'button',
                  {
                    on: {
                      click: () => {
                        this.data[index].name = this.editName
                        this.data[index].age = this.editAge
                        this.data[index].birthday = this.editBirthday
                        this.data[index].address = this.editAddress
                        this.editIndex = -1
                      },
                    },
                  },
                  '保存'
                ),
                h(
                  'button',
                  {
                    style: {
                      marginLeft: '6px',
                    },
                    on: {
                      click: () => {
                        this.editIndex = -1
                      },
                    },
                  },
                  '取消'
                ),
              ]
            } else {
              // 当前行时默认状态，渲染为一个按钮
              return h(
                'button',
                {
                  on: {
                    click: () => {
                      this.editName = row.name
                      this.editAge = row.age
                      this.editAddress = row.address
                      this.editBirthday = row.birthday
                      this.editIndex = index
                    },
                  },
                },
                '修改'
              )
            }
          },
        },
      ],
      data: [
        {
          name: '张东升',
          age: 38,
          birthday: '405043200000',
          address: '隐秘的角落少年宫',
        },
        {
          name: '朱朝阳',
          age: 10,
          birthday: '1288742400000',
          address: '隐秘的角落六峰山',
        },
        {
          name: '普普',
          age: 8,
          birthday: '1223596800000',
          address: '隐秘的角落福利院',
        },
      ],
      editName: '', // 第一列输入框
      editAge: '', // 第二列输入框
      editBirthday: '', // 第三列输入框
      editAddress: '', // 第四列输入框
      editIndex: -1, // 当前聚焦的输入框的行数
    }
  },
}
</script>

<style>
</style>