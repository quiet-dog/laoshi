<script lang='ts' setup>
import { use } from 'echarts/core'
import { RadarChart } from 'echarts/charts'
import { TitleComponent, LegendComponent, } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { onMounted, ref } from 'vue';
import VChart, { THEME_KEY } from "vue-echarts";

use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer,])
const option = ref({
    title: {
        text: ''
    },
    // legend: {
    //     data: ['分数', '排名'],
    //     left: 0
    // },

    radar: {
        center: ['50%', '54%'],
        radius: '70%',
        // shape: 'circle',
        indicator: [
            { name: '创新能力 88.8分\n专业排名 第22名', max: 6500 },
            { name: '创新能力 88.8分\n专业排名 第22名', max: 16000 },
            { name: '创新能力 88.8分\n专业排名 第22名', max: 30000 },
            { name: '创新能力 88.8分\n专业排名 第22名', max: 38000 },
            { name: '创新能力 88.8分\n专业排名 第22名', max: 52000 },
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000],
                    name: '分数'
                },
                // {
                //     value: [5000, 14000, 28000, 26000, 42000],
                //     name: '排名'
                // }
            ]
        }
    ]
})

const echartRef = ref(null);
function handleResize() {
    console.log("dasdasd")
    echartRef.value?.resize();
}
onMounted(() => {
    window.addEventListener('resize', handleResize)
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
