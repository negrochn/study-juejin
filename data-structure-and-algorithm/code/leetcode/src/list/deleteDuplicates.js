import ListNode from './listNode'

/**
 * @description 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字
 * @example 输入 1→2→3→3→4→4→5 ，输出 1→2→5 ；输入 1→1→1→2→3 ，输出 2→3
 * 
 * @param {ListNode} head 
 */
export default function deleteDuplicates(head) {
  // 极端情况：0 个或 1 个节点，则不会重复，直接返回
  if (!head || !head.next) {
    return head
  }
  // dummy 结点
  let dummy = new ListNode()
  // dummy 永远指向头结点
  dummy.next = head
  // cur 从 dummy 开始遍历
  let cur = dummy
  // 当 cur 的后面有至少两个节点时
  while(cur.next && cur.next.next) {
    // 对 cur 后面的两个节点的 val 进行比较
    if (cur.next.val === cur.next.next.val) {
      // 若值重复，则记下这个值
      let val = cur.next.val
      // 反复地排查后面的元素是否存在多次重复该值的情况
      while(cur.next && cur.next.val === val) {
        // 若有，则删除
        cur.next = cur.next.next
      }
    } else {
      // 若不重复，则正常遍历
      cur = cur.next
    }
  }
  // 返回链表的起始节点
  return dummy.next
}