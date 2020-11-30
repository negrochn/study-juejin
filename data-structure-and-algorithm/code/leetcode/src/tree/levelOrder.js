/**
 * @description 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）
 *              输入：二叉树：[3,9,20,null,null,15,7],
 *              输出：[
                      [3],
                      [9,20],
                      [15,7]
                      ]
 * @summary BFS + 队列
 *
 * @param {*} root 
 */
export default function levelOrder(root) {
  // 初始化结果数组
  const res = []
  // 如果树非空，则继续处理
  if (root) {
    // 初始化队列
    const queen = []
    // 队列第一个元素就是根结点
    queen.push(root)
    // 队列不空，则反复执行以下逻辑
    while(queen.length) {
      // 缓存刚进入循环时队列长度，这一步很关键，因为队列长度后面会发生改变
      const len = queen.length
      // 用来存储当前层级的结点
      let level = []
      // 循环遍历当前层级的结点
      for(let i = 0; i < len; i++) {
        // 取出对面的头部元素
        const top = queen.shift()
        // 将头部元素的值推入 level 数组
        level.push(top.val)
        // 如果当前结点有左孩子，则推入下一层级
        if (top.left) {
          queen.push(top.left)
        }
        // 如果当前结点有右孩子,则推入下一层级
        if (top.right) {
          queen.push(top.right)
        }
      }
      // 将 level 推入结果数组
      res.push(level)
    }
  }
  // 返回结果数组
  return res
}