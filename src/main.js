import router from './router'
import { createApp } from 'vue'
import "@/assets/scss/main.scss"
import App from './App.vue'



createApp(App)
    .use(router)
    .mount('#app')
