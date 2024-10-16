import { ref } from "vue";

export function useQianDaoHook() {
    let list = ref([
        {
            title: "某imou的签到",
            createAt: "2024",
            type: "一键签到",
            hava: 2
        },
        {
            title: "某imou的签到",
            createAt: "2024",
            type: "一键签到",
            hava: 2
        },
        {
            title: "某imou的签到",
            createAt: "2024",
            type: "一键签到",
            hava: 2
        },
        {
            title: "某imou的签到",
            createAt: "2024",
            type: "一键签到",
            hava: 2
        },
        {
            title: "某imou的签到",
            createAt: "2024",
            type: "一键签到",
            hava: 2
        },
        {
            title: "某imou的签到",
            createAt: "2024",
            type: "一键签到",
            hava: 2
        }
    ])
    return {
        list
    }
}