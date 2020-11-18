import reverseList from './reverseList'
import ListNode from './listNode'

class List {
  constructor(arr) {
    this.arr = arr.map(val => new ListNode(val))
    for (let i = 0; i < this.arr.length - 1; i++) {
      this.arr[i].next = this.arr[i + 1]
    }
    return this.arr[0]
  }
}

test('reverseList', () => {
  expect(reverseList(new List([1, 2, 3, 4, 5]))).toEqual(new List([5, 4, 3, 2, 1]))
  expect(reverseList(new List([1]))).toEqual(new List([1]))
  expect(reverseList(null)).toEqual(null)
})
