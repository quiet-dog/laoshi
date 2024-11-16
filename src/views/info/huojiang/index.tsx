import { reactive } from "vue";

export function useHuojiang() {
    const config = reactive({
        // header: ['列1', '列2', '列3'],
        data: [
            ['<div class="rounded-full mt-5" style="background-color:white;width:30px;height:30px" ></div>', '2024', '05-06', "校园获奖情况说明"],
            ['<div class="rounded-full mt-5" style="background-color:white;width:30px;height:30px" ></div>', '2024', '05-06', "校园获奖情况说明"],
            ['<div class="rounded-full mt-5" style="background-color:white;width:30px;height:30px" ></div>', '2024', '05-06', "校园获奖情况说明"],
            ['<div class="rounded-full mt-5" style="background-color:white;width:30px;height:30px" ></div>', '2024', '05-06', "校园获奖情大师赛大大况说明"],
            ['<div class="rounded-full mt-5" style="background-color:white;width:30px;height:30px" ></div>', '2024', '05-06', "校园获奖情大大大大况说明"],
            ['<div class="rounded-full mt-5" style="background-color:white;width:30px;height:30px" ></div>', '2024', '05-06', "校园获奖情况说明"],

        ],
        index: true,
        columnWidth: [50, 70, 70],
        align: ['center'],
        oddRowBGC: 'unset',
        evenRowBGC: 'unset',
        index: false,
    })

    return {
        config
    }
}