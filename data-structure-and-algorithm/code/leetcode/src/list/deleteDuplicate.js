/**
 * @description 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次
 * @example 输入 1→1→2 ，输出 1→2 ；输入 1→1→2→3→3 ，输出 1→2→3
 * @summary 判断前后两个元素值是否相等
 * 
 * @param {ListNode} head 
 */
export default function deleteDuplicate(head) {
  // 确定 cur 指针，初始位置为链表第一个结点
  let cur = head
  // 遍历链表
  while(cur && cur.next) {
    // 若当前结点和它后面一个结点值相等（重复）
    if (cur.val === cur.next.val) {
      // 删除靠后的那个结点（去重）
      cur.next = cur.next.next
    } else {
      // 若不重复，继续遍历
      cur = cur.next
    }
  }
  return head
}