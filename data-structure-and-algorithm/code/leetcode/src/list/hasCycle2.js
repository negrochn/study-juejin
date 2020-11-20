/**
 * @description 给定一个链表，判断链表中是否有环
 * @example 输入 3→2→0→-4 ，n = 2 ，表示 -4 指向 2 ，输出 true
 * @summary 快慢指针法
 * 
 * @param {ListNode} head 
 */
export default function hasCycle2(head) {
  // 初始化快指针为头结点
  let fast = head
  // 初始化慢指针为头结点
  let slow = head
  // 快指针及快指针的下一个结点存在，则一直遍历
  while(fast && fast.next) {
    // 慢指针往前走一步
    slow = slow.next
    // 快指针往前走两步
    fast = fast.next.next
    // 快慢指针相遇，则返回 true
    if (fast === slow) {
      return true
    }
  }
  // 快慢指针无法相遇，返回 false
  return false
}
