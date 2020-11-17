import ListNode from './listNode'

/**
 * @description 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的
 * @example 输入 1→2→4 ，1→3→4 ，输出 1→1→2→3→4→4
 * @summary 处理链表的本质，是处理链表结点之间的指针关系
 * 
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 */
export default function mergeTwoLists(l1, l2) {
  // 定义头结点，确保链表可以被访问到
  const head = new ListNode()
  // cur 就是咱们那根针
  let cur = head
  // 针开始在 l1 和 l2 间穿梭
  while(l1 && l2) {
    // 如果 l1 的节点值较小
    if (l1.val <= l2.val) {
      // 先串起 l1
      cur.next = l1
      // l1 指针向前一步
      l1 = l1.next
    } else {
      // l2 较小时，串起 l2 结点
      cur.next = l2
      // l2 指针向前一步
      l2 = l2.next 
    }
    // 针在串起一个结点后，也会往前一步
    cur = cur.next
  }
  // 处理链表不等长的情况
  cur.next = l1 !== null ? l1 : l2
  // 返回起始节点
  return head.next
}