/**
 * @description 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null
 * @summary 立 flag 法
 * 
 * @param {ListNode} head 
 */
export default function detectCycle(head) {
  let index = 0
  while (head) {
    if (head.flag != null) {
      return `tail connects to node index ${head.flag}`
    } else {
      head.flag = index
      head = head.next
    }
    index++
  }
  return 'no circle'
}