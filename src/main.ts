import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@/components/global'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('Icon', Icon)

app.use(createPinia())
app.use(router)

app.mount('#app')
