/**
 * @description 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值
 * @example 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
 * @summary 双端队列法
 * 
 * @param {number[]} nums 
 * @param {number} k 
 */
export default function maxSlidingWindow(nums, k) {
  // 缓存数组的长度
  const len = nums.length
  // 初始化双端队列
  const queen = []
  // 初始化结果数组
  const result = []

  for (let i = 0; i < len; i++) {
    // 当队尾元素小于当前元素时
    while(queen.length && queen[queen.length - 1] < nums[i]) {
      // 将队尾元素不断出队，直到队尾元素大于等于当前元素
      queen.pop()
    }
    // 入队当前元素
    queen.push(nums[i])
    // 只有在遍历个数大于 k 时才更新结果数组
    if (i >= k - 1) {
      result.push(queen[0])
      // 当双端队列的队首元素与当前元素的索引差值为 k-1 的元素相同时，队首元素出队
      if (queen[0] === nums[i + 1 - k]) {
        queen.shift()
      }
    }
  }
  
  return result
}