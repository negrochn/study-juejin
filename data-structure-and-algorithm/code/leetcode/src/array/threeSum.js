/**
 * @description 三叔求和问题，给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * @example nums = [-1, 0, 1, 2, -1, -4] ，满足要求的三元组集合为 [[-1, 0, 1], [-1, -1, 2]]
 * @summary 双指针法中的“对撞指针”法
 * 
 * @param {number[]} nums 
 */
export default function threeSum(nums) {
  nums = nums.sort((a, b) => a - b) // 数组排序
  
  const len = nums.length // 保存数组长度
  let res = [] // 用于存放结果数组
  // 遍历到倒数第 3 个就足够了，因为左右两指针会遍历后面两个数
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1 // 左指针
    let k = len - 1 // 右指针
    
    // 如果遇到重复的数就跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k] // 三数之和
      if (sum > 0) {
        k--
        // 处理右指针重复的情况
        while(j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else if (sum < 0) {
        j++
        // 处理左指针重复的情况
        while(j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else {
        res.push([nums[i], nums[j], nums[k]]) // 得到目标数字组合，存入数组
        j++
        k--
        while(j < k && nums[j] === nums[j - 1]) {
          j++
        }
        while(j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }
  // 返回结果数组
  return res
}