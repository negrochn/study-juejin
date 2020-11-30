/**
 * @description 翻转一棵二叉树
 * @example 输入：
 *   4
   /   \
  2     7
 / \   / \
1   3 6   9
 * 输出：
 *   4
   /   \
  7     2
 / \   / \
9   6 3   1
 * @param {TreeNode} root 
 */
export default function invertTree(root) {
  // 定义递归边界
  if (!root) {
    return root
  }
  // 递归交换右孩子结点
  let right = invertTree(root.right)
  // 递归交换左孩子结点
  let left = invertTree(root.left)
  // 交换当前遍历到的两个左右孩子结点
  root.left = right
  root.right = left
  return root
}