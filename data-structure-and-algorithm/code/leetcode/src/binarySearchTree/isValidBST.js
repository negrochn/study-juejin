/**
 * @description 给定一个二叉树，判断其是否是一个有效的二叉搜索树
 * @example 输入
 *  2
   / \
  1   3
 * 输出: true
 * @summary 递归+二叉树定义
 * 
 * @param {TreeNode} root 
 */
export default function isValidBST(root) {
  // 定义递归函数
  function dfs(root, minVal, maxVal) {
    // 若为空树，则合法
    if (!root) {
      return true
    }
    // 若右孩子不大于根节点，或左孩子不小于根节点，则不合法
    if (root.val <= minVal || root.val >= maxVal) {
      return false
    }
    // 左右子树都必须符合二叉树的数据域大小关系
    return dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal)
  }
  // 初始化最小值和最大值为极小和极大
  return dfs(root, -Infinity, Infinity)
}