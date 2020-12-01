import { TreeNode } from './tree'

/**
 * 
 * @param {number[]} nums 
 */
export default function sortedArrayToBST(nums) {
  // 有序数组做递归，提取数组根节点
  function dfs(nums) {
    // 处理边界问题
    if (nums.length === 0) {
      return null
    }
    // 二分，取出中间元素的索引值
    const mid = Math.floor(nums.length / 2)
    // 将中间元素作为当前子树的根节点
    const cur = new TreeNode(nums[mid])
    // 递归构建左子树
    cur.left = dfs(nums.slice(0, mid))
    // 递归构建右子树
    cur.right = dfs(nums.slice(mid + 1))
    // 返回当前结点
    return cur
  }
  // 返回根节点
  return dfs(nums)
}