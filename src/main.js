import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'virtual:windi.css'
import './assets/font/iconfont.css'
import './assets/style/global.scss'

import Vant, { Lazyload } from 'vant'
const whiteList = ['/login', '/home', '/']
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) next()
  if (to.path !== '/login') {
    next({ path: '/login' })
  } else {
    console.log('ok')
    next()
  }
})

createApp(App).use(router).use(Vant).use(Lazyload).mount('#app')
