import detectCycle2 from './detectCycle2'
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

test('detectCycle2', () => {
  expect(detectCycle2(new CircleList([3, 2, 0, -4], 1))).toBe('tail connects to node index 1')
  expect(detectCycle2(new CircleList([1, 2], 0))).toBe('tail connects to node index 0')
  expect(detectCycle2(new CircleList([1]))).toBe('no circle')
})