/**
 * @description 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点
 * @example 输入 1→2→3→4→5 ，输出 5→4→3→2→1
 * @summary 多指针法
 * 
 * @param {ListNode} head 
 */
export default function reverseList(head) {
  // 初始化前驱结点为 null
  let pre = null
  // 初始化目标结点为头结点
  let cur = head
  // 只要目标结点不为 null ，遍历就得继续
  while(cur) {
    // 记录一下 next 结点
    let next = cur.next
    // 反转指针
    cur.next = pre
    // pre 往前走一步
    pre = cur
    // cur 往前走一步
    cur = next
  }
  // 反转结束后，pre 就会变成新链表的头结点
  return pre
}
