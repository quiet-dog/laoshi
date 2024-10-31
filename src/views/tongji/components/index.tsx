import { reactive } from "vue";

export function useTongZhuHook() {
    const options = reactive({
        xAxis: {
            type: 'category',
            data: ['项目前端', '项目后端',]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200],
                type: 'bar'
            }
        ]
    })

    return {
        options
    }
}