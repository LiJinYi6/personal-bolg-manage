
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import './assets/style/init.less'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')

