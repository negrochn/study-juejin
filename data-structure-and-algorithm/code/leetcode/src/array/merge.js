/**
 * @description 合并两个有序数组，给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * @example nums1 = [1, 2, 3, 0, 0, 0] ，m = 3 ，nums2 = [2, 5, 6] ，n = 3 ，输出[1, 2, 2, 3, 5, 6]
 * @summary 双指针法
 * 
 * @param {number[]} nums1 
 * @param {number} m 
 * @param {number[]} nums2 
 * @param {number} n 
 * @return {void}
 */
export default function merge(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while(i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      k--
      i--
    } else {
      nums1[k] = nums2[j]
      k--
      j--
    }
  }
  while(j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }

  return nums1
}