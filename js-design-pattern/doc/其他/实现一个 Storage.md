# 实现一个 Storage

**描述**

- 实现 Storage ，使得该对象为单例，基于 localStorage 进行封装。
- 实现方法 setItem(key, value) 和 getItem(key) 。



**思路**

关键点，getInstance() 和 instance 。

```js
// 静态方法版本

// 定义 Storage
class Storage {
  static getInstance() {
    // 判断是否已经 new 过一个实例
    if (!Storage.instance) {
      // 若这个唯一的实例不存在，name先创建它
      Storage.instance = new Storage()
    }
    // 返回这个唯一的实例
    return Storage.instance
  }
  getItem(key) {
    return localStorage.getItem(key)
  }
  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
}

const s1 = Storage.getInstance()
const s2 = Storage.getInstance()
s1.setItem('name', 'negrochn')
s1.getItem('name') // negrochn
s2.getItem('name') // negrochn

s1 === s2 // true
```

```js
// 闭包版本

// 先实现一个基础的 StorageBase 类，把 getItem 和 setItem 方法放在它的原型链上
function StorageBase() {}
StorageBase.prototype.getItem = function(key) {
  return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function(key, value) {
  return localStorage.setItem(key, value)
}

// 以闭包的形式创建一个引用自由变量的构造函数
const Storage = (function() {
  let instance = null
  return function() {
    // 判断自由变量是否为 null
    if (!instance) {
      // 如果为 null 则 new 出一个唯一实例
      instance = new StorageBase()
    }
    return instance
  }
})()

const s1 = Storage()
const s2 = Storage()
s1.setItem('name', 'negrochn')
s1.getItem('name') // negrochn
s2.getItem('name') // negrochn

s1 === s2 // true
```

