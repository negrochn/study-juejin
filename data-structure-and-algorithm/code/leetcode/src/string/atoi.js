export default function atoi(s) {
  // 编写正则表达式
  const reg = /\s*([-\+]?\d*).*/
  // 得到捕获组
  const groups = s.match(reg)
  // 计算最大值
  const max = Math.pow(2, 31) - 1
  // 计算最小值
  const min = -max - 1
  // 用于存储转换出来的数字
  let targetNum = 0

  // 如果匹配成功
  if (groups) {
    // 尝试转换捕获到的内容
    targetNum = +groups[1]
    if (isNaN(targetNum)) {
      // 不能进行有效的转换时，返回 0
      targetNum = 0
    }
  }
  // 卡口判断
  if (targetNum > max) {
    return max
  } else if (targetNum < min) {
    return min
  }
  // 返回转换结果
  return targetNum
}