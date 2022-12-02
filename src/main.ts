import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

// Vue.use(VueRouter)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home }
    ]

})

import './assets/css/index.scss'

const app = createApp(App)

app.use(router).mount('#app')
