/**
 * @description 回文字符串的衍生问题，给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * @example 输入 'aba' ，输出 true ；输入 'abca' ，输出 true
 * @summary 对称性和双指针
 * 
 * @param {string} s 
 */
export default function validPalindrome(s) {
  // 缓存字符串的长度
  const len = s.length

  let i = 0, j = len - 1

  // 当左右指针均满足对称时，一起向中间移动
  while(i < j && s[i] === s[j]) {
    i++
    j--
  }

  // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindrome(i + 1, j)) {
    return true
  }

  // 尝试判断跳过右指针元素后字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true
  }

  // 工具方法，用于判断字符串是否回文
  function isPalindrome(st, ed) {
    while(st < ed) {
      if (s[st] !== s[ed]) {
        return false
      }
      st++
      ed--
    }
    return true
  }

  // 默认返回 false
  return false
}