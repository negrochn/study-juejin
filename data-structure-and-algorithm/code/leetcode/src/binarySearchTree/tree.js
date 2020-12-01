export class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

export default class Tree {
  constructor(data) {
    this.root = null
    // 临时存储所有节点，方便寻找父子节点
    let nodeList = []
    const len = data.length
    for (let i = 0; i < len; i++) {
      if (data[i] === null) {
        continue
      }
      const node = new TreeNode(data[i])
      nodeList.push(node)

      // const n = Math.floor(Math.log2(i + 1))
      if (i > 0) {
        const p = Math.floor((i - 1) / 2)
        if (i % 2 === 1) {
          nodeList[p].left = node
        } else {
          nodeList[p].right = node
        }
      }
    }
    this.root = nodeList[0]
    return this.root
  }
}