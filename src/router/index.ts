import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'

import Index from "../views/index.vue";


const routes: Readonly<RouteRecordRaw[]> = [
    { path: "/", component: Index }

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;