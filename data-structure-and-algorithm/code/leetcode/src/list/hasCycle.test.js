import hasCycle from './hasCycle'
import ListNode from './listNode'

class CircleList {
  constructor(arr, n) {
    this.arr = arr.map(val => new ListNode(val))
    let len = this.arr.length
    for (let i = 0; i < len - 1; i++) {
      this.arr[i].next = this.arr[i + 1]
    }
    if (n >= 0 && n < len) {
      this.arr[len - 1].next = this.arr[n]
    }

    return this.arr[0]
  }
}

test('hasCycle', () => {
  expect(hasCycle(new CircleList([3, 2, 0, -4], 1))).toBe(true)
  expect(hasCycle(new CircleList([3, 2, 0, -4]))).toBe(false)
})