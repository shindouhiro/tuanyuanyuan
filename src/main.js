import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'virtual:windi.css'
import './assets/font/iconfont.css'
import './assets/style/global.scss'

import Vant, { Lazyload } from 'vant'

// router.beforeEach(async (to, from, next) => {
//   // canUserAccess() 返回 `true` 或 `false`
//   if (to.name !== 'login') next('/login')
//   else next()
// })

createApp(App).use(router).use(Vant).use(Lazyload).mount('#app')
