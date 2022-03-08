import { cache, mapMenuToRoute } from '@/utils'
import { createApp } from 'vue'
import App from './App.vue'

import store from '@/store'
import router from '@/router'

import 'normalize.css'
import '@/assets/css/index.less'
const token = cache.getCache('token')
if (token) {
  mapMenuToRoute((store.state as any).login.userMenus)
}
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
