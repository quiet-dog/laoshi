<script lang='ts' setup>
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { ref } from 'vue';
import VChart, { THEME_KEY } from "vue-echarts";
use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer])
const optitons = ref({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',     // 设置图例为垂直排列
        top: 'center',          // 图例垂直居中
        right: '5%',            // 图例靠右对齐
        itemWidth: 14,          // 图例标记的宽度
        itemHeight: 14,         // 图例标记的高度
        itemGap: 10,            // 图例项之间的间距
        formatter: function (name) {  // 自定义图例格式，控制宽度以形成多列布局
            return `{name|${name}}`;
        },
        textStyle: {
            rich: {
                name: {
                    width: 50,   // 控制每个图例项的宽度，确保每行可以显示两个图例
                    overflow: 'truncate',
                }
            }
        }
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],  // 调整饼图的大小
            center: ['40%', '50%'],  // 调整饼图的位置，向左移动一些，以避免与图例重叠
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: '音乐知识' },
                { value: 735, name: '艺术素养' },
                { value: 580, name: '文化传承' },
                { value: 484, name: '音乐竞赛' },
                { value: 300, name: '音乐素养' },
                { value: 300, name: '合作能力' }
            ]
        }
    ]
})
</script>

<template>
    <v-chart class="chart" :option="optitons" ref="echartRef" />
</template>

<style scoped>
.chart {
    height: 100%;
    width: 100%;
}
</style>
