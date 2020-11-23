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
  let parent = context.$parent

  if (parent) {
    if (parent.$options.name === componentName) {
      parents.push(parent)
    }
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}

// 由一个组件，向下找到最近的指定组件
function findComponentDownload(context, componentName) {
  let children = context.$children
  let child = null

  if (children.length) {
    for (const ch of children) {
      if (ch.$options.name === componentName) {
        child = ch
        break
      } else {
        child = findComponentDownload(ch, componentName)
        if (child) {
          break
        }
      }
    }
  }
  return child
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
function findBrotherComponents(context, componentName, exceptMe = true) {
  let brothers = context.$parent.$children.filter(brother => {
    return brother.$options.name === componentName
  })
  let index = brothers.findIndex(brother => brother._uid === context._uid)
  if (exceptMe) {
    brothers.splice(index, 1)
  }
  return brothers
}

export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownload,
  findComponentsDownload,
  findBrotherComponents
}