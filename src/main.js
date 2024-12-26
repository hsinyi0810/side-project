import App from './App.vue'

import { createApp } from 'vue'
import routes from './routes'; 
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'



import './assets/style/base_all.scss'


const pinia = createPinia()

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // 如果 savedPosition 有值，表示返回到之前的位置（如瀏覽器返回按鈕），則使用該位置
      if (savedPosition) {
        return savedPosition
      } else {
        // 否則捲動到頁面頂端
        return { top: 0 }
      }
    }
  })

  

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')

