import { reactive } from "vue";

export function useGongjiangHook() {
    const options = reactive({
        angleAxis: {},
        radiusAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu'],
            z: 10
        },
        polar: {},
        series: [
            {
                type: 'bar',
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [2, 4, 6, 8],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }
        ],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    })


    return {
        options
    }
}