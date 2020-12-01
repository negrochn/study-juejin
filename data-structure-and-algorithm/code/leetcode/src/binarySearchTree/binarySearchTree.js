class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  // 向树中插入一个新的键
  insert(val) {
    const newNode = new Node(val)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  // 在树中查找一个键，如果结点存在则返回 true ，否则返回 false
  search(val) {
    return this.searchNode(this.root, val)
  }
  // 中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  // 先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  // 后序遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  // 返回树中最小的值/键
  min() {
    return this.minNode(this.root)
  }
  // 返回树中最大的值/键
  max() {
    return this.maxNode(this.root)
  }
  // 从树中移除某个键
  remove(val) {
    this.root = this.removeNode(this.root, val)
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  searchNode(node, val) {
    if (node === null) {
      return false
    }
    if (val < node.val) {
      return this.searchNode(node.left, val)
    } else if (val > node.val) {
      return this.searchNode(node.right, val)
    } else {
      return true
    }
  }
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.val)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.val)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.val)
    }
  }
  minNode(node) {
    if (node) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.val
    }
    return null
  }
  maxNode(node) {
    if (node) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.val
    }
    return null
  }
  removeNode(node, val) {
    if (node === null) {
      return null
    }
    if (val < node.val) {
      node.left = this.removeNode(node.left, val)
      return node
    } else if (val > node.val) {
      node.right = this.removeNode(node.right, val)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      }
      if (node.right === null) {
        node = node.left
        return node
      }

      const aux = findMinNode(node.right)
      node.val = aux.val
      node.right = removeNode(node.right, aux.val)
      return node
    }
  }
  findMinNode(node) {
    while(node && node.left) {
      node = node.left
    }
    return node
  }
}