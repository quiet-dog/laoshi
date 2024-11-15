<script lang='ts' setup>
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { PolarComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from "vue-echarts";
import { useGongjiangHook } from "./gongjiang";
import { NProgress } from 'naive-ui';

use([PolarComponent, LegendComponent, BarChart, CanvasRenderer])
const { options } = useGongjiangHook()

</script>

<template>
    <div class="h-full w-full" style="color: white">
        <h1 class="text-2xl mt-4 ml-5">兵器工匠之星</h1>
        <div style="height: 250px;" class="flex flex-row">
            <div class="h-full" style="width: 300px;">
                <VChart class="chart" :option="options" ref="echartRef" />
            </div>
            <div class="flex-grow">
                <h1 class="text-2xl pb-2">姓名</h1>
                <div class="grid grid-cols-10 gap-y-4">
                    <div class="col-start-1 col-end-3">工业设计</div>
                    <div class="col-start-3 col-end-11">
                        <NProgress type="line" :percentage="50" :height="24" border-radius="12px 12px 0 0"
                            fill-border-radius="12px 0 12px 12px">
                            <template>
                            </template>
                        </NProgress>
                    </div>

                    <div class="col-start-1 col-end-3">策略优化</div>
                    <div class="col-start-3 col-end-11">
                        <NProgress type="line" :percentage="50" :height="24" border-radius="12px 12px 0 0"
                            fill-border-radius="12px 0 12px 12px">
                            <template>
                            </template>
                        </NProgress>
                    </div>

                    <div class="col-start-1 col-end-3">虚拟调试</div>
                    <div class="col-start-3 col-end-11">
                        <NProgress type="line" :percentage="50" :height="24" border-radius="12px 12px 0 0"
                            fill-border-radius="12px 0 12px 12px">
                            <template>
                            </template>
                        </NProgress>
                    </div>

                    <div class="col-start-1 col-end-3">产线联调</div>
                    <div class="col-start-3 col-end-11">
                        <NProgress type="line" :percentage="50" :height="24" border-radius="12px 12px 0 0"
                            fill-border-radius="12px 0 12px 12px">
                            <template>
                            </template>
                        </NProgress>
                    </div>

                    <div class="col-start-1 col-end-3">在线检测</div>
                    <div class="col-start-3 col-end-11">
                        <NProgress type="line" :percentage="50" :height="24" border-radius="12px 12px 0 0"
                            fill-border-radius="12px 0 12px 12px">
                            <template>
                            </template>
                        </NProgress>
                    </div>
                </div>

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
