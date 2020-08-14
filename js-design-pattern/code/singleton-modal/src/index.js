// 模态框创建逻辑，复用单例模式
const Modal = (function() {
  let modal = null
  return function() {
    if (!modal) {
      modal = document.createElement('div')
      modal.innerHTML = '您还未登录！'
      modal.id = 'modalId'
      modal.style.display = 'none'
      document.body.appendChild(modal)
    }
    return modal
  }
})()

// 定义打开按钮
class OpenButton {
  // 点击后展示弹框（旧逻辑）
  onClick() {
    const modal = new Modal()
    modal.style.display = 'block'
  }
}

// 定义按钮对应的装饰器
class Decorator {
  // 将按钮实例传入
  constructor(openButton) {
    this.openButton = openButton
  }
  onClick() {
    this.openButton.onClick()
    // 装饰了一层新逻辑
    this.changeButtonStatus()
  }
  changeButtonStatus() {
    this.changeButtonText()
    this.disableButton()
  }
  changeButtonText() {
    const btn = document.getElementById('btn-open')
    btn.innerHTML = '快去登录'
  }
  disableButton() {
    const btn = document.getElementById('btn-open')
    btn.setAttribute('disabled', true)
  }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

// 点击打开模态框
document.getElementById('btn-open').addEventListener('click', function() {
  // openButton.onClick()
  // 分别验证两个 onClick ，验证装饰器是否生效
  decorator.onClick()
})

// 点击关闭模态框
document.getElementById('btn-close').addEventListener('click', function() {
  const modal = document.getElementById('modalId')
  if (modal) {
    modal.style.display = 'none'
  }
})