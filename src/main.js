import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'virtual:windi.css'
import './assets/font/iconfont.css'
import './assets/style/global.scss'

import Vant, { Lazyload } from 'vant'
router.beforeEach((to, from, next) => {
  if (to.name === 'login') next()
  if (to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

createApp(App).use(router).use(Vant).use(Lazyload).mount('#app')
