/**
 * @description 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。说明：解集不能包含重复的子集。
 * @example 示例: 输入: nums = [1,2,3]
            输出:
            [
              [3],
              [1],
              [2],
              [1,2,3],
              [1,3],
              [2,3],
              [1,2],
              []
            ]
 * @summary 递归
 *
 * @param {number[]} nums 
 */
export default function subsets(nums) {
  // 缓存数组长度
  const len = nums.length
  // 初始化结果数组
  const res = []
  // 初始化当前数组
  const cur = []

  function dfs(nth) {
    // 每次进入，都意味着当前数组进行了更新，故直接推入到结果数组中
    res.push(cur.slice())
    // 从当前数字的索引开始，遍历
    for (let i = nth; i < len; i++) {
      // 当前数字存在于组合中的情况
      cur.push(nums[i])
      // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i + 1)
      // 当前数字不存在于组合中的情况
      cur.pop()
    }
  }
  // 开始递归
  dfs(0)
  return res
}