/**
 * @description 给定一个二叉树，返回它的前序（先序）遍历序列
 * @example 输入: [1,null,2,3]
 *          输出: [1,2,3]
 *          进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * @summary 栈结构
 * 
 * @param {TreeNode} root 
 */
export default function preorderTraversal(root) {
  // 初始化结果数组
  const res = []
  // 二叉树存在则继续处理，否则跳过
  if (root) {
    // 初始化栈
    const stack = []
    // 将根结点入栈
    stack.push(root)
  
    // 若栈不为空，则重复入栈、出栈操作
    while (stack.length) {
      // 栈顶元素标记为当前结点
      const cur = stack.pop()
      // 将当前结点的 val 推入结果数组
      res.push(cur.val)
      // 若当前结点有右孩子，则将右孩子入栈
      if (cur.right) {
        stack.push(cur.right)
      }
      // 若当前结点有左孩子，则将左孩子入栈
      if (cur.left) {
        stack.push(cur.left)
      }
    }
  }
  // 返回结果数组
  return res
}