import { createMemoryHistory, createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Index from "../views/index.vue";
import Student from "@/views/stu/index.vue";
import PaiHang from "@/views/paihang/index.vue";
import Info from "@/views/info/index.vue";
import Step from "@/views/step/index.vue";
import KeJian from "@/views/step/kejian/index.vue";
import QianDao from "@/views/step/qiandao/index.vue";
import KeZhong from "@/views/step/qiandao/liebiao/index.vue";
import KeQian from "@/views/step/qiandao/keqian/index.vue";


const routes: Readonly<RouteRecordRaw[]> = [
    { path: "/", component: Student },
    { path: "/home", component: Index },
    { path: "/student", component: Student },
    { path: "/paihang", component: PaiHang },
    { path: "/info", component: Info },
    {
        path: "/step", component: Step, children: [
            { path: "kejian", component: KeJian },
            {
                path: "qianDao", component: QianDao, children: [
                    { path: "kezhong", component: KeZhong },
                    { path: "keqian", component: KeQian }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;