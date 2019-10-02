// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//  引入  配置文件
import  config from './config/config.js'
Vue.prototype.$twCof = config;

import zoom from '@/libs/zoom'
zoom()
window.addEventListener('resize',zoom)

import iosAlertView from 'vue-ios-alertview'
Vue.use(iosAlertView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
