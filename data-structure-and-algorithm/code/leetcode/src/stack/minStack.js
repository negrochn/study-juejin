export default class MinStack {
  constructor() {
    this.stack = []
    // 辅助栈
    this.stack2 = []
  }

  push(x) {
    this.stack.push(x)

    // 当入栈的值小于当前值时，则推入辅助栈
    if (!this.stack2.length || this.stack2[this.stack2.length - 1] >= x) {
      this.stack2.push(x)
    }
  }

  pop() {
    // 若出栈的值与当前最小值相等，那么辅助栈也要出栈
    if (this.stack.pop() === this.stack2[this.stack2.length - 1]) {
      this.stack2.pop()
    }
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    // 辅助栈的栈顶元素，存的就是目标中的最小值
    return this.stack2[this.stack2.length - 1]
  }
}
