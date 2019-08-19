// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App.vue'
import router from './router/router'
import VueRouter from 'vue-router'
import axios from 'axios'

// 导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 min-ui 中的组件
import { Button,Toast } from 'mint-ui'
// Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 安装路由
Vue.use(VueRouter)
// 注册mint-ui的组件
Vue.component(Toast.name, Toast)
Vue.component(Button.name, Button)
/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  render: c => c(app),
  router
})
