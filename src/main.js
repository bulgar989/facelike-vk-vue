import { createApp } from 'vue'
import Vue3TouchEvents from "vue3-touch-events";
import store from './store'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.use(Vue3TouchEvents, {disableClick: false});
app.mount('#app')
