/**
 * @description 两数求和问题，给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。假设每种输入指挥对应一个答案。
 * @example nums = [2, 7, 11, 15] ，target = 9
 * @summary 几乎所有的求和问题，都可以转化为求差问题。
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  const map = new Map() // 记录已经遍历过的数字及其对应的索引值
  const len = nums.length // 缓存数组长度
  for (let i = 0; i < len; i++) {
    let j = map.get(target - nums[i]) // 判断当前值对应的 target 的差值是否存在
    if (j != null) { // 如果有对应值，则返回
      return [j, i]
    }
    map.set(nums[i], i) // 否则，记录当前值
  }
}
