/**
 * 
 * @param {ListNode} head 
 * @param {number} m 
 * @param {number} n 
 */
export default function reverseBetween(head, m, n) {
  // 初始化 pre ，指向头结点
  let pre = head
  // i 表示第几个结点
  let i = 1
  // 移动 pre 指针到 m - 1 个节点
  while (i < m - 1) {
    pre = pre.next
    i++
  }
  // 存储反转区间前一个指针
  let left = pre
  // 初始化目标指针
  let cur = pre.next
  // 移动目标指针直到移到区间外
  while(i < n) {
    // 存储目标指针的下一个结点
    let next = cur.next
    // 反转指针
    cur.next = pre
    // pre 向前走一步
    pre = cur
    // cur 向前走一步
    cur = next
    i++
  }
  // 区间内的第一个结点的 next 指向 cur
  left.next.next = cur
  // 将区间前一个结点的 next 指向 pre
  left.next = pre
  // 返回头结点
  return head
}