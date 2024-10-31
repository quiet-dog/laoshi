<script lang='ts' setup>
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { PolarComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from "vue-echarts";
import { useGongjiangHook } from "./gongjiang";

use([PolarComponent, LegendComponent, BarChart, CanvasRenderer])
const { options } = useGongjiangHook()

</script>

<template>
    <div class="h-full w-full">
        <h1 class="text-2xl mt-4 ml-5">兵器工匠</h1>
        <div style="height: 250px;" class="flex flex-row">
            <div class="h-full" style="width: 300px;">
                <VChart class="chart" :option="options" ref="echartRef" />
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.chart {
    height: 100%;
    width: 100%;
}
</style>
