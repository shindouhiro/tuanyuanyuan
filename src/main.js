import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'virtual:windi.css'

import Vant, { Lazyload } from 'vant'

createApp(App).use(router).use(Vant).use(Lazyload).mount('#app')
