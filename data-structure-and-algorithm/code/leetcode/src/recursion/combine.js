/**
 * @description 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合
 * @example 示例: 输入: n = 4, k = 2
            输出:
            [
              [2,4],
              [3,4],
              [2,3],
              [1,2],
              [1,3],
              [1,4],
            ]
 * @summary 回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路试试
 * @param {number} n 
 * @param {number} k 
 */
export default function combine(n, k) {
  // 初始化结果数组
  const res = []
  // 初始化组合数组
  const cur = []

  // 定义 dfs ，入参是当前遍历到的数字
  function dfs(nth) {
    // 当组合数组的长度等于 k 时，返回
    if (cur.length === k) {
      res.push(cur.slice())
      return
    }
    // 从当前数字开始，遍历 i 到 n 之间的数字
    for (let i = nth; i <= n; i++) {
      // 将当前数字推入组合数组
      cur.push(i)
      // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i + 1)
      // 当前数字不存在于组合中的情况
      cur.pop()
    }
  }
  // 进入 dfs ，起始数字是 1
  dfs(1)
  // 返回结果数组
  return res
}