import { createMemoryHistory, createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Index from "../views/index.vue";
import Student from "@/views/stu/index.vue";
import PaiHang from "@/views/paihang/index.vue";
import Info from "@/views/info/index.vue";


const routes: Readonly<RouteRecordRaw[]> = [
    { path: "/", component: Student },
    { path: "/home", component: Index },
    { path: "/student", component: Student },
    { path: "/paihang", component: PaiHang },
    { path: "/info", component: Info }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;