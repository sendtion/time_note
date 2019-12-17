// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Bmob from 'hydrogen-js-sdk'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 初始化Bmob
Bmob.initialize('0bd5cb296f8fb20b', '135926')
// 挂载到全局使用
Vue.prototype.Bmob = Bmob
// 开启调试模式
Bmob.debug(true)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
