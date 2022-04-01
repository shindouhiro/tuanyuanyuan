import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import My from '../pages/My.vue'
import Relative from '../pages/Relative.vue'
import Clues from '../pages/Clues.vue'
import Layout from '../layout/index.vue'
import Image from '../pages/Image.vue'
// 关于我们的页面
import About from '../pages/About.vue'
const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          title: '首页',
          showTitle: false,
          showBar:true
        }
      },
      {
        path: '/my',
        name: 'my',
        component: My,
        meta: {
          title: '我的',
          showTitle: false,
          showBar:true
        }
      },
      {
        path: '/relative',
        name: 'relative',
        component: Relative,
        meta: {
          title: '寻亲大厅',
          showTitle: true,
          showBar:true
        }
      },
      {
        path: '/clues',
        name: 'clues',
        component: Clues,
        meta: {
          title: '线索大厅',
          showTitle: true,
          showBar:true
        }
      },
      {
        path: '/image',
        name: 'image',
        component: Image,
        meta: {
          title: '对比',
          showTitle: false,
          showBar:false
        }
      },
      // 关于我们页面
      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          title: '关于我们',
          showTitle: false,
          showBar:false
          
        }
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
