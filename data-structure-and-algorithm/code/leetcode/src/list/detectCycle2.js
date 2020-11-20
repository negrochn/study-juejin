/**
 * @description 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null
 * @summary 快慢指针法
 * 
 * @param {ListNode} head 
 */
export default function detectCycle2(head) {
  let fast = head
  let slow = head
  let hasCycle = false
  let count = 0
  // 用于证明链表存在环，但无法定位环的入口
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      hasCycle = true
      break
    }
  }
  if (hasCycle) {
    slow = slow.next
    count = 1
    // 慢指针继续向前走，计算环的长度
    while (fast !== slow) {
      slow = slow.next
      count++
    }
    slow = head
    fast = head
    // 重置快慢指针的位置，慢指针指向起始位置，快指针指向起始位置的前 count 个位置
    while (count > 0) {
      fast = fast.next
      count--
    }
    count = 0
    // 快慢指针一起向前走，直到相遇，相遇的位置就是环的入口
    while (fast !== slow) {
      slow = slow.next
      fast = fast.next
      count++
    }
  }
  return hasCycle ? `tail connects to node index ${count}` : 'no circle'
}