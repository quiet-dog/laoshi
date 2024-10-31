<script lang='ts' setup>
import VChart, { THEME_KEY } from "vue-echarts";
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { useTongZhuHook } from "./index";

use([GridComponent, BarChart, CanvasRenderer])

const { options } = useTongZhuHook()
</script>

<template>
    <v-chart class="chart" :option="options" ref="echartRef" />
</template>

<style scoped>
.chart {
    height: 100%;
    width: 100%;
}
</style>
