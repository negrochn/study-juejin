/**
 * @description 使用栈实现队列的下列操作
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * peek() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 * @example MyQueue queue = new MyQueue();
 * queue.push(1);
 * queue.push(2);
 * queue.peek(); // 返回 1
 * queue.pop(); // 返回 1
 * queue.empty(); // 返回 false
 * @summary 两个栈
 * 
 */
export default class Queen {
  constructor() {
    this.stack = []
    // 辅助栈
    this.stack2 = []
  }

  push(x) {
    // 直接推入栈
    this.stack.push(x)
  }

  pop() {
    // stack2 为空，则将 stack 栈数据插入 stack2 
    if (!this.stack2.length) {
      while(this.stack.length) {
        this.stack2.push(this.stack.pop())
      }
    }
    // stack2 出栈
    return this.stack2.pop()
  }

  // 与 pop 相似，没有将定位到的值出栈
  peek() {
    if (!this.stack2.length) {
      while(this.stack.length) {
        this.stack2.push(this.stack.pop())
      }
    }
    // 缓存 stack2 长度
    const stack2Len = this.stack2.length
    return stack2Len && this.stack2[stack2Len - 1]
  }

  // 如果 stack 和 stack2 均为空，则队列为空
  empty() {
    return this.stack.length === 0 && this.stack2.length === 0
  }
}