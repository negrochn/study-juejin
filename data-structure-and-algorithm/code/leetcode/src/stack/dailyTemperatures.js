/**
 * @description 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替
 * @example 给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]
 * @summary 尝试去维持一个递减栈
 * 
 * @param {number[]} T 
 */
export default function dailyTemperatures(T) {
  // 缓存数组长度
  const len = T.length
  // 初始化一个栈
  const stack = []
  // 初始化结果数组，注意数组定长，占位为 0
  const res = (new Array(len)).fill(0)

  for (let i = 0; i < len; i++) {
    // 若栈不为空，且存在打破递减趋势的温度值
    while(stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const j = stack.pop()
      // 计算当前栈顶温度值与第一个高于它的温度值的索引差值
      res[j] = i - j
    }
    // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i)
  }
  // 返回结果数组
  return res
}