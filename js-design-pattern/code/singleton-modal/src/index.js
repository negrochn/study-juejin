// 核心逻辑，采用闭包的思想实现单例模式
const Modal = (function() {
  let modal = null
  return function() {
    if (!modal) {
      modal = document.createElement('div')
      modal.innerHTML = '我是一个全局唯一的 Modal'
      modal.id = 'modalId'
      modal.style.display = 'none'
      document.body.appendChild(modal)
    }
    return modal
  }
})()

// 点击打开模态框
document.getElementById('btn-open').addEventListener('click', function() {
  // 未点击则不创建 Modal 实例，避免不必要的内存占用，此处不用 new Modal 的形式调用也可以
  const modal = new Modal()
  modal.style.display = 'block'
})

// 点击关闭模态框
document.getElementById('btn-close').addEventListener('click', function() {
  const modal = new Modal()
  if (modal) {
    modal.style.display = 'none'
  }
})