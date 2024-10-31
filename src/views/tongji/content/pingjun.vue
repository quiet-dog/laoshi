<script lang='ts' setup>
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    ToolboxComponent,
    GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from "vue-echarts";
import { usePingJunHook } from "./pingjun"

use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    ToolboxComponent,
    GridComponent,
    LineChart,
    CanvasRenderer
])

const { options } = usePingJunHook()

</script>

<template>
    <div class="h-full w-full flex flex-col">
        <div class="text-2xl mt-4 ml-5">平均分一览表</div>
        <div class="flex-grow" style="height: 300px;">
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
