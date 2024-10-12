import { createMemoryHistory, createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Index from "../views/index.vue";
import Student from "@/views/stu/index.vue";


const routes: Readonly<RouteRecordRaw[]> = [
    { path: "/", component: Student },
    { path: "/home", component: Index },
    { path: "/student", component: Student }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;