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
import { usePingJunHook } from "./pingjun";
import Bg from "@/assets/normal_u348.png";

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
    <div class="h-full w-full flex flex-col" style="color: white;">
        <div class="text-2xl mt-4 ml-5">平均分一览表</div>
        <div class="flex-grow flex flex-row" style="height: 300px;">
            <div class="grid grid-cols-2 px-4" style="width: 400px;">
                <div class="bg">
                    小组一
                </div>
                <div class="bg">
                    小组二
                </div>
                <div class="bg">
                    小组三
                </div>
                <div class="bg">
                    小组四
                </div>
            </div>
            <div class="flex-grow">
                <VChart class="chart" :option="options" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.chart {
    height: 100%;
    width: 100%;
}

.bg {
    background: url(@/assets/normal_u348.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100px;
    width: 150px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #22f2ff
}
</style>
