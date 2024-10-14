<script lang='ts' setup>
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { onMounted, ref } from 'vue';
import VChart, { THEME_KEY } from "vue-echarts";

use([GridComponent, BarChart, CanvasRenderer])




const option = ref({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
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
