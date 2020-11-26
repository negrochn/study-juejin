/**
 * @description 给定一个没有重复数字的序列，返回其所有可能的全排列
 * @example 示例：   
            输入: [1,2,3]
            输出: [
              [1,2,3],
              [1,3,2],
              [2,1,3],
              [2,3,1],
              [3,1,2],
              [3,2,1]
            ]
 * @summary 递归
 * @param {number[]} nums 
 */
export default function permute(nums) {
  // 缓存数组长度
  const len = nums.length
  // 记录当前的排列内容
  const cur = []
  // 记录所有的排列顺序
  const res = []
  // 避免重复使用同一个数字
  const visited = {}

  // 定义 dfs 函数，入参是坑位的索引（从 0 开始）
  function dfs(nth) {
    // 遍历到不存在的坑位，则触碰递归边界返回
    if (nth === len) {
      // 此时前 len 个坑位已填满，将对应的排序记录下来
      res.push(cur.slice())
      return
    }
    // 检查手里剩下的数字有哪些
    for (let i = 0; i < len; i++) {
      // 如果当前数字是剩下的
      if (!visited[nums[i]]) {
        // 打上已用过标识
        visited[nums[i]] = 1
        // 将数字推入当前排序
        cur.push(nums[i])
        // 向下一个坑位走去
        dfs(nth + 1)
        // 让出当前坑位
        cur.pop()
        // 取消已用过标识
        visited[nums[i]] = 0
      }
    }
  }
  // 从索引为 0 的坑位开始
  dfs(0)
  return res
}