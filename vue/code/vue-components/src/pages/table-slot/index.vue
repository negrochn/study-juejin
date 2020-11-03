<template>
  <div>
    <header>实战 6 ：可用 slot-scope 自定义列的表格组件——Table</header>
    <hr>
    <main>
      <div>
        <p>
          <strong>方案一（最优解）</strong>
        </p>
        <div>
          <i-table-slot
            :columns="columns"
            :data="data"
          >
            <template
              slot-scope="{ row, index }"
              slot="name"
            >
              <input
                type="text"
                v-model="editName"
                v-if="editIndex === index"
              />
              <span v-else>{{ row.name }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="age"
            >
              <input
                type="text"
                v-model="editAge"
                v-if="editIndex === index"
              />
              <span v-else>{{ row.age }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="birthday"
            >
              <input
                type="text"
                v-model="editBirthday"
                v-if="editIndex === index"
              />
              <span v-else>{{ getBirthday(row.birthday) }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="address"
            >
              <input
                type="text"
                v-model="editAddress"
                v-if="editIndex === index"
              />
              <span v-else>{{ row.address }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="action"
            >
              <div v-if="editIndex === index">
                <button @click="onSave(index)">保存</button>
                <button @click="editIndex = -1">取消</button>
              </div>
              <div v-else>
                <button @click="onEdit(row, index)">编辑</button>
              </div>
            </template>
          </i-table-slot>
        </div>
      </div>
      <div>
        <p>
          <strong>方案二（不推荐）</strong>
        </p>
        <div>
          <i-table
            ref="table"
            :columns="columns2"
            :data="data2"
          >
            <template
              slot-scope="{ row, index }"
              slot="name"
            >
              <input
                type="text"
                v-model="editName2"
                v-if="editIndex2 === index"
              />
              <span v-else>{{ row.name }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="age"
            >
              <input
                type="text"
                v-model="editAge2"
                v-if="editIndex2 === index"
              />
              <span v-else>{{ row.age }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="birthday"
            >
              <input
                type="text"
                v-model="editBirthday2"
                v-if="editIndex2 === index"
              />
              <span v-else>{{ getBirthday(row.birthday) }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="address"
            >
              <input
                type="text"
                v-model="editAddress2"
                v-if="editIndex2 === index"
              />
              <span v-else>{{ row.address }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="action"
            >
              <div v-if="editIndex2 === index">
                <button @click="onSave2(index)">保存</button>
                <button @click="editIndex2 = -1">取消</button>
              </div>
              <div v-else>
                <button @click="onEdit2(row, index)">编辑</button>
              </div>
            </template>
          </i-table>
        </div>
      </div>
      <div>
        <p>
          <strong>方案三</strong>
        </p>
        <div>
          <i-table-render-slot
            :columns="columns"
            :data="data3"
          >
            <template
              slot-scope="{ row, index }"
              slot="name"
            >
              <input
                type="text"
                v-model="editName3"
                v-if="editIndex3 === index"
              />
              <span v-else>{{ row.name }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="age"
            >
              <input
                type="text"
                v-model="editAge3"
                v-if="editIndex3 === index"
              />
              <span v-else>{{ row.age }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="birthday"
            >
              <input
                type="text"
                v-model="editBirthday3"
                v-if="editIndex3 === index"
              />
              <span v-else>{{ getBirthday(row.birthday) }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="address"
            >
              <input
                type="text"
                v-model="editAddress3"
                v-if="editIndex3 === index"
              />
              <span v-else>{{ row.address }}</span>
            </template>

            <template
              slot-scope="{ row, index }"
              slot="action"
            >
              <div v-if="editIndex3 === index">
                <button @click="onSave3(index)">保存</button>
                <button @click="editIndex3 = -1">取消</button>
              </div>
              <div v-else>
                <button @click="onEdit3(row, index)">编辑</button>
              </div>
            </template>
          </i-table-render-slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import iTableSlot from '@/components/table-slot/table'
import iTable from '@/components/table-render/table'
import iTableRenderSlot from '@/components/table-render-slot/table'

export default {
  name: 'table-slot',
  components: {
    iTableSlot,
    iTable,
    iTableRenderSlot,
  },
  data() {
    return {
      columns: [
        {
          title: '姓名',
          slot: 'name',
        },
        {
          title: '年龄',
          slot: 'age',
        },
        {
          title: '出生日期',
          slot: 'birthday',
        },
        {
          title: '地址',
          slot: 'address',
        },
        {
          title: '操作',
          slot: 'action',
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
      columns2: [
        {
          title: '姓名',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.name({
                row,
                column,
                index,
              })
            )
          },
        },
        {
          title: '年龄',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.age({
                row,
                column,
                index,
              })
            )
          },
        },
        {
          title: '出生日期',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.birthday({
                row,
                column,
                index,
              })
            )
          },
        },
        {
          title: '地址',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.address({
                row,
                column,
                index,
              })
            )
          },
        },
        {
          title: '操作',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.action({
                row,
                column,
                index,
              })
            )
          },
        },
      ],
      data2: [],
      editName2: '', // 第一列输入框
      editAge2: '', // 第二列输入框
      editBirthday2: '', // 第三列输入框
      editAddress2: '', // 第四列输入框
      editIndex2: -1, // 当前聚焦的输入框的行数
      data3: [
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
      editName3: '', // 第一列输入框
      editAge3: '', // 第二列输入框
      editBirthday3: '', // 第三列输入框
      editAddress3: '', // 第四列输入框
      editIndex3: -1, // 当前聚焦的输入框的行数
    }
  },
  mounted() {
    // 为了避免初始化报错，不得不把 data 写在 mounted 里
    this.data2 = [
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
    ]
  },
  methods: {
    getBirthday(birthday) {
      const date = new Date(parseInt(birthday))
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()

      return `${year}-${month}-${day}`
    },
    onSave(index) {
      this.data[index].name = this.editName
      this.data[index].age = this.editAge
      this.data[index].birthday = this.editBirthday
      this.data[index].address = this.editAddress
      this.editIndex = -1
    },
    onEdit(row, index) {
      this.editName = row.name
      this.editAge = row.age
      this.editBirthday = row.birthday
      this.editAddress = row.address
      this.editIndex = index
    },
    onSave2(index) {
      this.data2[index].name = this.editName2
      this.data2[index].age = this.editAge2
      this.data2[index].birthday = this.editBirthday2
      this.data2[index].address = this.editAddress2
      this.editIndex2 = -1
    },
    onEdit2(row, index) {
      this.editName2 = row.name
      this.editAge2 = row.age
      this.editBirthday2 = row.birthday
      this.editAddress2 = row.address
      this.editIndex2 = index
    },
    onSave3(index) {
      this.data3[index].name = this.editName3
      this.data3[index].age = this.editAge3
      this.data3[index].birthday = this.editBirthday3
      this.data3[index].address = this.editAddress3
      this.editIndex3 = -1
    },
    onEdit3(row, index) {
      this.editName3 = row.name
      this.editAge3 = row.age
      this.editBirthday3 = row.birthday
      this.editAddress3 = row.address
      this.editIndex3 = index
    },
  },
}
</script>

<style>
</style>