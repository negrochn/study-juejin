import Vue from 'vue'
import App from './App.vue'
import Alert from '@/components/alert/alert.js'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$Alert = Alert

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
