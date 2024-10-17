<script lang='ts' setup>
import { Delete, Document, HelpFilled, View } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';
import { NButton, NTag } from 'naive-ui';
import Bg from "@/assets/avatar/7.png";

</script>

<template>
    <div class="w-full h-full flex flex-col px-12">
        <div class="h-1/5 grid grid-cols-12 w-full">
            <div class="col-span-1">
                <ElIcon style="font-size: 100px;color: blue;">
                    <Document />
                </ElIcon>
            </div>
            <div class="flex flex-col col-span-9 justify-center text-2xl">
                <div>
                    课后安排:<span>未签到</span>
                </div>
                <div class="text-1xl">查看情况:---</div>
            </div>
            <div class="col-start-11 col-end-13 grid grid-cols-2">
                <div class="flex flex-col items-center justify-center">
                    <ElIcon size="large">
                        <HelpFilled />
                    </ElIcon>
                    <NButton quaternary>预览</NButton>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <ElIcon size="large">
                        <Delete />
                    </ElIcon>
                    <NButton quaternary>删除</NButton>
                </div>
            </div>
        </div>
        <div class="flex flex-row">
            <div class="grow text-2xl">活动列表</div>
            <div>按创建时间排序</div>
        </div>
        <div class="flex flex-row justify-center items-center w-full" style="height: 300px;">
            暂无数据
        </div>
        <div class="text-white text-2xl"><span class="pr-2">|</span>课后分析</div>
        <div class="grid grid-cols-2 gap-x-2 border-2 border-white-500 items-center mt-4" style="height: 150px;">
            <div class="flex flex-row px-4 py-4 items-center h-2/3 border-r-2 border-white-500 gap-x-4">
                <div>
                    <img :src="Bg" width="50px" alt="" srcset="">
                </div>
                <div class="grow">
                    <h1 class="text-2xl">学生评价</h1>
                    <h1>评价人数:0/42</h1>
                </div>
                <div class="flex flex-col items-center">
                    <ElIcon size="large">
                        <View />
                    </ElIcon>
                    查看
                </div>
            </div>
            <div class="flex flex-row px-4 py-4 items-center gap-x-4">
                <div>
                    <img :src="Bg" width="50px" alt="" srcset="">
                </div>
                <div class="grow">
                    <h1 class="text-2xl">学生总结</h1>
                    <h1>总结人数:0/42</h1>
                </div>
                <div class="flex flex-col items-center">
                    <ElIcon size="large">
                        <View />
                    </ElIcon>
                    详情
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-2 border-2 border-white-500 items-center mt-4" style="height: 150px;">
            <div class="flex flex-row px-4 py-4 items-center h-2/3 border-r-2 border-white-500 gap-x-4">
                <div>
                    <img :src="Bg" width="50px" alt="" srcset="">
                </div>
                <div class="grow">
                    <h1 class="text-2xl">教学过程</h1>
                    <div class="flex flex-row gap-x-7">
                        <div>课前:0</div>
                        <div>课中:1</div>
                        <div>课后:0</div>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <ElIcon size="large">
                        <View />
                    </ElIcon>
                    查看
                </div>
            </div>
            <div class="flex flex-row px-4 py-4 items-center gap-x-4">
                <div>
                    <img :src="Bg" width="50px" alt="" srcset="">
                </div>
                <div class="grow">
                    <h1 class="text-2xl">学生表现</h1>
                    <h1>参与人数:0/42</h1>
                </div>
                <div class="flex flex-col items-center">
                    <ElIcon size="large">
                        <View />
                    </ElIcon>
                    查看
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
