// 由一个组件，向上找到最近的指定组件
function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) {
      name = parent.$options.name
    }
  }
  return parent
}

// 由一个组件，向上找到所有的指定组件
function findComponentsUpward(context, componentName) {
  let parents = []
  const parent = context.$parent

  if (parent) {
    if (parent.$options.name === componentName) {
      parents.push(parent)
      return parents.concat(findComponentsUpward(parent, componentName))
    } else {
      return []
    }
  }
}

// 由一个组件，向下找到最近的指定组件
function findComponentDownload(context, componentName) {
  const children = context.$children
  let ch = null

  if (children.length) {
    for (const child of children) {
      const name = child.$options.name

      if (name === componentName) {
        ch = child
        break
      } else {
        ch = findComponentDownload(child, componentName)
        if (ch) {
          break
        }
      }
    }
  }
  return ch
}

// 由一个组件，向下找到所有的指定组件
function findComponentsDownload(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) {
      components.push(child)
    }
    const foundChildren = findComponentsDownload(child, componentName)
    return components.concat(foundChildren)
  }, [])
}

// 由一个组件，找到指定组件的兄弟组件
function findBothersComponents(context, componentName, exceptMe = true) {
  let brothers = context.$parent.$children.filter(child => {
    return child.$options.name === componentName
  })
  let index = brothers.findIndex(brother => brother._uid === context._uid)
  if (exceptMe) {
    brothers.splice(index, 1)
  }
  return brothers
}

function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

// 深拷贝
function deepCopy(data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownload,
  findComponentsDownload,
  findBothersComponents,
  deepCopy
}