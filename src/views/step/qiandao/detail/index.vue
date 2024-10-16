<script lang='ts' setup>
import { NButton, NInput, NPagination, NTabPane, NTabs } from 'naive-ui';
import Bg from "@/assets/avatar/7.png";
import { Charts as DvCharts } from "@kjgl77/datav-vue3"
import { reactive } from 'vue';

const option = reactive({
    title: {
        text: '',
        textStyle: {
            color: '#fff'
        }
    },
    series: [
        {
            type: 'gauge',
            data: [{ name: 'itemA', value: 55 }],
            center: ['50%', '55%'],
            radius: '70%',
            min: 0, // 设置最小值
            max: 100, // 设置最大值
            axisLabel: {
                formatter: '{value}',
                color: '#fff'
            },
            axisTick: {

                show: true,
                length: 20,
                splitNumber: 10,
                lineStyle: {
                    color: '#fff',
                    width: 5,
                    opacity: 1
                }
            },
            spliteLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#fff',
                    wdith: 5,
                    opacity: 1
                }
            },
            pointer: {
                length: '70%', // 指针长度
                width: 8 // 指针宽度
            },
            animationCurve: 'easeInOutBack'
        }
    ]
})

</script>

<template>
    <div class="w-full h-full grid grid-cols-3 gap-x-3">
        <div class="col-span-2 flex flex-col border-2 border-white-500">
            <div style="width: 200px;">
                <NTabs size="large">
                    <NTabPane name="未参与学生" label="未参与学生" />
                    <NTabPane name="已参与学生" label="已参与学生" />
                </NTabs>
            </div>
            <div class="flex flex-row" style="width: 300px;">
                <NInput />
                <NButton class="ml-4">查询</NButton>
            </div>
            <div class="grow text-center flex flex-wrap gap-4">
                <div style="width: 200px;" v-for="item in [1, 1, 1, 1, 1, 1]">
                    <img :src="Bg" width="200px" alt="" srcset="" />
                    <h1>测试名字</h1>
                    <h2>学好: 12313123</h2>
                </div>
            </div>
            <div class="mx-auto">
                <NPagination size="large" :page-count="100" />
            </div>
        </div>
        <div class="grid grid-rows-5 gap-y-2">
            <div class="row-start-1 row-end-4 border-2 border-white-500">
                <div class="border-b-2 h-1/5 text-center text-4xl flex items-center justify-center">签到率</div>
                <div class="h-4/5 w-full">
                    <DvCharts :option="option" style=" min-height:200px;min-width: 200px;" />
                </div>
            </div>
            <div class="row-start-4 row-end-6 border-2 border-white-500">
                <div class="border-b-2 h-1/5 text-center text-4xl flex items-center justify-center">签到Top3</div>
                <div>1</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
