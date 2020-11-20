/**
 * @description 给定一个链表，判断链表中是否有环
 * @example 输入 3→2→0→-4 ，n = 2 ，表示 -4 指向 2 ，输出 true
 * @summary 立 flag 法
 * 
 * @param {ListNode} head 
 */
export default function hasCycle(head) {
  // 只要头结点存在，那么就继续遍历
  while(head) {
    // 如果 flag 已经存在，那么说明环存在
    if (head.flag) {
      return true
    } else {
      // 如果 flag 没有立过，就立一个 flag 再往下走
      head.flag = true
      head = head.next
    }
  }
  return false
}