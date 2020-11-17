import ListNode from './listNode'
import deleteDuplicate from './deleteDuplicate'

class List {
  constructor(arr) {
    this.arr = arr.map(val => new ListNode(val))
    for (let i = 0; i < this.arr.length - 1; i++) {
      this.arr[i].next = this.arr[i + 1]
    }
    return this.arr[0]
  }
}

test('deleteDuplicate', () => {
  expect(deleteDuplicate(new List([1, 1, 2]))).toEqual(new List([1, 2]))
  expect(deleteDuplicate(new List([1, 1, 2, 3, 3]))).toEqual(new List([1, 2, 3]))
})