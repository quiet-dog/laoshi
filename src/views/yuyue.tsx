import { reactive, ref } from "vue";
import * as echarts from 'echarts';



export function useYuYueModalHook() {
    let yyShow = ref(false);
    const yyOpenModal = () => {
        console.log("openModal");

        yyShow.value = true;
        console.log(yyShow.value);
    }

    const yyCloseModal = () => {
        yyShow.value = false;
    }

    let kechengShow = ref(false);

    const kechengShowOpenModal = () => {
        console.log("openModal");

        kechengShow.value = true;
        console.log(yyShow.value);
    }

    const kechengShowCloseModal = () => {
        kechengShow.value = false;
    }

    const selectOptions = reactive([
        {
            label: "机舱车间",
            value: "机舱车间"
        }, {
            label: "数控中心",
            value: "数控中心"
        }, {
            label: "仓段智能车间",
            value: "仓段智能车间"
        }, {
            label: "工艺研究所",
            value: "工艺研究所"
        }, {
            label: "工具车间",
            value: "工具车间"
        },
    ])


    const shiChangShow = ref(false);

    const shiChangShowOpenModal = () => {
        shiChangShow.value = true;
    }

    const shiChangShowCloseModal = () => {
        shiChangShow.value = false;
    }

    const shichangData = reactive({
        xAxis: {
            data: ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七', '任务八', '任务九', '任务十']
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#999'
            }
        },
        series: [
            {
                data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ])
                    }
                },
            }
        ]
    })


    const taoLunShow = ref(false);

    const taoLunShowOpenModal = () => {
        taoLunShow.value = true;
    }

    const taoLunShowCloseModal = () => {
        taoLunShow.value = false;
    }

    const taoLunData = reactive({
        xAxis: {
            type: 'category',
            data: ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    })


    const ciShuShow = ref(false);

    const ciShuShowOpenModal = () => {
        ciShuShow.value = true;
    }

    const ciShuShowCloseModal = () => {
        ciShuShow.value = false;
    }

    const ciShuData = reactive({
        xAxis: {
            data: ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七', '任务八', '任务九', '任务十']
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#999'
            }
        },
        series: [
            {
                data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ])
                    }
                },
            }
        ]
    })


    const zuoYeShow = ref(false)
    const zuoYeShowOpenModal = () => {
        zuoYeShow.value = true;
    }
    const zuoYeShowCloseModal = () => {
        zuoYeShow.value = false;
    }

    const zuoYeData = reactive({
        xAxis: {
            data: ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七', '任务八', '任务九', '任务十']
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#999'
            }
        },
        series: [
            {
                data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ])
                    }
                },
            }
        ]
    })

    const canYuShow = ref(false)
    const canYuShowOpenModal = () => {
        canYuShow.value = true;
    }
    const canYuShowCloseModal = () => {
        canYuShow.value = false;
    }
    const canYuData = reactive({
        xAxis: {
            max: 'dataMax'
        },
        yAxis: {
            type: 'category',
            data: ["任务一", "任务二", "任务三", "任务四", "任务五", "任务六", "任务七"],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 6 // only the largest 3 bars will be displayed
        },
        series: [
            {
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: [1, 2, 2, 3, 4, 5, 10],
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            }
        ],
        // legend: {
        //     show: true
        // },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    })




    return {
        yyShow,
        yyOpenModal,
        yyCloseModal,
        selectOptions,
        kechengShowOpenModal,
        kechengShowCloseModal,
        kechengShow,
        shiChangShowOpenModal,
        shiChangShowCloseModal,
        shiChangShow,
        shichangData,
        taoLunShow,
        taoLunShowOpenModal,
        taoLunShowCloseModal,
        taoLunData,
        ciShuShow,
        ciShuShowOpenModal,
        ciShuShowCloseModal,
        ciShuData,
        zuoYeShow,
        zuoYeShowOpenModal,
        zuoYeShowCloseModal,
        zuoYeData,
        canYuShow,
        canYuShowOpenModal,
        canYuShowCloseModal,
        canYuData
    }
}