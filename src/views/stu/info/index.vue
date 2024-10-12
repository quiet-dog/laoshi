<script lang='ts' setup>
import InfoImg from "@/assets/info/avatar-07418b43.png";
import { ActiveRingChart as DvActiveRingChart } from "@kjgl77/datav-vue3";
import { reactive } from "vue";
import LeiDa from "./leida/index.vue";
import ZheXianEchart from "./zhexian/index.vue";
import LeiDaSan from "./leidasan/index.vue";

const config = reactive([
    {
        name: '周口',
        value: 55
    },
    {
        name: '南阳',
        value: 120
    },
    {
        name: '西峡',
        value: 78
    },
    {
        name: '驻马店',
        value: 66
    },
    {
        name: '新乡',
        value: 80
    }
])
</script>

<template>
    <div class="h-full w-full grid grid-cols-3 gap-3 pt-8 px-5">
        <div class="h-full">
            <div class="flex flex-col justify-center items-center ">
                <img :src="InfoImg" style="width:50%;" alt="" srcset="">
                <h1 class="text-3xl font-bold">石忆颖</h1>
                <h2 class="text-1xl font-semibold">2023级音乐旅行家</h2>
            </div>
            <div style="height: 200px;" class="flex flex-col justify-center items-center">
                <DvActiveRingChart :config="config" style="height: 200px;width: 200px;" />
            </div>
        </div>
        <div class="h-full">
            <div class="w-full h-full flex flex-col justify-center items-center">
                <div class="h-1/2 w-full">
                    <LeiDa />
                </div>
                <div class="h-1/2 w-full">
                    <ZheXianEchart />
                </div>
            </div>
        </div>
        <div class="h-full">
            <div class="w-full h-full flex flex-col justify-center items-center">
                <div class="h-1/2">
                    <LeiDaSan />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
