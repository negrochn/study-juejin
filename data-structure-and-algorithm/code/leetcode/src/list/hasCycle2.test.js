import hasCycle2 from './hasCycle2'
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

test('hasCycle2', () => {
  expect(hasCycle2(new CircleList([3, 2, 0, -4], 1))).toBe(true)
  expect(hasCycle2(new CircleList([3, 2, 0, -4]))).toBe(false)
  expect(hasCycle2(new CircleList([3, 2], 0))).toBe(true)
  expect(hasCycle2(new CircleList([3]))).toBe(false)
  expect(hasCycle2(null)).toBe(false)
})