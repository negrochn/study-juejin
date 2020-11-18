import reverseBetween from './reverseBetween'
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

test('reverseBetween', () => {
  expect(reverseBetween(new List([1, 2, 3, 4, 5]), 2, 4)).toEqual(new List([1, 4, 3, 2, 5]))
  expect(reverseBetween(new List([1, 2, 3, 4, 5]), 3, 4)).toEqual(new List([1, 2, 4, 3, 5]))
})