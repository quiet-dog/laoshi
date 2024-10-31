<script lang='ts' setup>
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
    DatasetComponent,
    GridComponent,
    VisualMapComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from "vue-echarts";
use([
    DatasetComponent,
    GridComponent,
    VisualMapComponent,
    BarChart,
    CanvasRenderer
])

import { useCanyuHook } from "./canyu"
const { options } = useCanyuHook()

</script>

<template>
    <div class="h-full w-full">
        <h1 style="height: 50px;" class="text-2xl mt-4 ml-5">课堂活动参与度</h1>
        <div style="height: calc(100% - 100px);" class="w-full">
            <VChart class="chart" :option="options" />
        </div>
    </div>
</template>

<style scoped>
.chart {
    height: 100%;
    width: 100%;
}
</style>
