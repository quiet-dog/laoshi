import { reactive } from "vue"

export function useYujingHook() {
    let tableData = reactive({
        data: [
            {
                name: "测试数据挨打",
                value: 80
            }, {
                name: "测试数据挨打",
                value: 80
            }, {
                name: "测试数据挨打",
                value: 80
            }, {
                name: "测试数据挨打",
                value: 80
            }, {
                name: "测试数据挨打",
                value: 80
            }, {
                name: "测试数据挨打",
                value: 80
            }, {
                name: "测试数据挨打",
                value: 80
            }, {
                name: "测试数据挨打",
                value: 80
            },
        ]
    })

    return {
        tableData
    }
}