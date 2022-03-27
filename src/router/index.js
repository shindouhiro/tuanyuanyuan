import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import My from '../pages/My.vue'
import Relative from '../pages/Relative.vue'
import Clues from '../pages/Clues.vue'
import Layout from '../layout/index.vue'
import Image from '../pages/Image.vue'
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
          title: '首页'
        }
      },
      {
        path: '/my',
        name: 'my',
        component: My,
        meta: {
          title: '我的'
        }
      },
      {
        path: '/relative',
        name: 'relative',
        component: Relative,
        meta: {
          title: '寻亲大厅'
        }
      },
      {
        path: '/clues',
        name: 'clues',
        component: Clues,
        meta: {
          title: '线索大厅'
        }
      },
      {
        path: '/image',
        name: 'image',
        component: Image,
        meta: {
          title: '对比'
        }
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
