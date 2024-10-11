<script lang='ts' setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide, onMounted } from "vue";

const echartRef = ref(null);

function handleResize() {
    console.log("dasdasd")
    echartRef.value?.resize();
}

use([
    CanvasRenderer,
    BarChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent
]);


const { xDatas = [], color = "", yDatas = [], name = "" } = defineProps<{
    xDatas: string[],
    color: string,
    yDatas: number[],
    name: string
}>();

const option = ref({
    xAxis: {
        type: 'category',
        data: xDatas
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false // 隐藏 Y 轴的轴线
        },
        axisTick: {
            show: false // 隐藏 Y 轴的刻度线
        },
        axisLabel: {
            show: false // 隐藏 Y 轴的标签
        },
        splitLine: {
            show: true, // 保留网格线的显示
            lineStyle: {
                color: '#ccc', // 网格线的颜色
                type: 'dashed' // 可以设置网格线为虚线
            }
        }
    },
    series: [
        {
            data: yDatas,
            type: 'bar',
            name: name,
            itemStyle: {
                color: color // 设置所有柱子的颜色
            }
        }
    ],
    legend: {
        data: [name]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'cross',        // 默认为直线，可选为：'line' | 'shadow' 'cross'
            lable: {

            }

        },
        formatter: function (params) {
            let tooltipText = '';
            params.forEach(function (item) {
                tooltipText += item.marker + item.seriesName + '：' + item.value + '<br>';
            });
            return tooltipText;
        }
    }
});

onMounted(() => {
    window.addEventListener('resize', handleResize);
})
</script>

<template>
    <v-chart class="chart" :option="option" ref="echartRef" />
</template>

<style scoped>
.chart {
    height: 100%;
    width: 100%;
}
</style>
