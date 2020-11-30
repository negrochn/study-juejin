/**
 * @description 给定一个二叉树，返回它的后序遍历序列
 * @example 输入: [1,null,2,3]
 *          输出: [1,2,3]
 *          进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 * @param {TreeNode} root 
 */
export default function postorderTraversal(root) {
  const res = []
  const stack = []
  if (root) {
    stack.push(root)

    while(stack.length) {
      const cur = stack.pop()
      res.unshift(cur.val)
      if (cur.left) {
        stack.push(cur.left)
      }
      if (cur.right) {
        stack.push(cur.right)
      }
    }
  }
  return res
}