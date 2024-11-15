<script lang='ts' setup>
import Bg from "@/assets/avatar/7.png"
import { ScrollRankingBoard as DvScrollRankingBoard, ScrollBoard as DvScrollBoard, } from '@kjgl77/datav-vue3';
import { reactive } from "vue";
import One from "@/assets/huizhang/normal_u164.png";
import Two from "@/assets/huizhang/normal_u165.png";
import Three from "@/assets/huizhang/normal_u166.png";
import Four from "@/assets/huizhang/normal_u167.png";
import Five from "@/assets/huizhang/normal_u168.png";
import Six from "@/assets/huizhang/normal_u161.png";

const config = reactive({
    // header: ['列1', '列2', '列3'],
    data: [
        ['<div class="text-2xl bg-red-400 rounded-lg">兵器工匠</div>',
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Six}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Two}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Three}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Four}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Five}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${One}" width="50px"  /><span style="height:20px"  class="pl-2" >10人</span></div>`,
        ],
        ['<div class="text-2xl bg-red-400 rounded-lg">进步之星</div>',
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Six}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Two}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Three}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Four}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Five}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${One}" width="50px"  /><span style="height:20px"  class="pl-2" >10人</span></div>`,
        ],
        ['<div class="text-2xl bg-red-400 rounded-lg">合作之星</div>',
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Six}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Two}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Three}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Four}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Five}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${One}" width="50px"  /><span style="height:20px"  class="pl-2" >10人</span></div>`,
        ],
        ['<div class="text-2xl bg-red-400 rounded-lg">优秀作业</div>',
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Six}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Two}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Three}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Four}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${Five}" width="50px"  /><span style="height:20px" class="pl-2" >10人</span></div>`,
            `<div class="flex flex-col" style="color:white" ><img style="position:absolute;top:0px," class="flex-grow" src="${One}" width="50px"  /><span style="height:20px"  class="pl-2" >10人</span></div>`,
        ]

    ],
    index: true,
    // columnWidth: [50, 100, 100],
    align: ['center'],
    oddRowBGC: 'unset',
    evenRowBGC: 'unset',
    align: ['center'],
    index: false,
    rowNum: 2,
})
</script>

<template>
    <div class="h-full w-full flex flex-col" style="overflow-y: hidden;">
        <h1 class="text-2xl mt-4 ml-5" style="color: white;">学习徽章</h1>

        <div class="flex-grow">
            <DvScrollBoard id="scroll" :config="config">

            </DvScrollBoard>
        </div>
        <!-- <div class="flex flex-col w-full" style="height: 100%;">
            <div class="grid grid-cols-7" style="height: 100px;">
                <div>兵器工匠</div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
            </div>
            <div class="grid grid-cols-7" style="height: 100px;">
                <div>兵器工匠</div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
                <div class="flex flex-col">
                    <img :src="Bg" width="50px" alt="" srcset="">
                    <div>1人</div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style scoped>
#scroll :deep(>div > div>.row-item) {
    height: 100px !important;
}
</style>
