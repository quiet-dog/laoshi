import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueQrcode from "@chenfengyuan/vue-qrcode";



createApp(App).component(VueQrcode.name!, VueQrcode).use(router).mount('#app')
