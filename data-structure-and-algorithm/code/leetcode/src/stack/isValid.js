const left2Right = {
  "(": ")",
  "[": "]",
  "{": "}"
}
/**
 * @description 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效
 * @example 输入 () ，输出 true ；输入 ()[]{} ，输出 true ；输入 (] ，输出 false
 * @summary 题目中若涉及括号问题，则很有可能和栈相关
 * 
 * @param {string} s 
 */
export default function isValid(s) {
  // 初始化栈
  let stack = []
  for (let i = 0; i < s.length; i++) {
    // 缓存字符串长度
    const char = s[i]
    // 判断是否是左括号
    if (char === '(' || char === '[' || char === '{') {
      // 左括号，则插入栈
      stack.push(char)
    } else {
      // 右括号，则判断左右括号是否配对，不匹配则返回 false
      if (left2Right[stack.pop()] !== char) {
        return false
      }
    }
  }
  // 若所有的括号都能配对，那么最后栈是空的
  return !stack.length
}