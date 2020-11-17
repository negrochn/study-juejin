import ListNode from './listNode'
import mergeTwoLists from './mergeTwoLists'

class List {
  constructor(arr) {
    this.arr = arr.map(val => new ListNode(val))
    for (let i = 0; i < this.arr.length - 1; i++) {
      this.arr[i].next = this.arr[i + 1]
    }
    return this.arr[0]
  }
}

test('mergeTwoLists', () => {
  const l1 = new List([1, 2, 4])
  const l2 = new List([1, 3, 4])
  expect(mergeTwoLists(l1, l2)).toEqual(new List([1, 1, 2, 3, 4, 4]))
})