<script lang='ts' setup>
import { NButton, NInput, NPagination, NTabPane, NTabs } from 'naive-ui';
import Bg from "@/assets/avatar/7.png";
import { Charts as DvCharts } from "@kjgl77/datav-vue3"
import { reactive, ref } from 'vue';
import { useDetailHook } from "."
import { watch } from 'fs';

const { info, sign_logs, signTable, page, total, searchName, tabValue, search, option } = useDetailHook();



const changeTab = (val) => {
    if (val == "已参与学生") {
        sign_logs.value = info.value?.can_yu;
    } else {
        sign_logs.value = info.value?.not_can_yu;
    }
    page.value = 1;
}




</script>

<template>
    <div class="w-full h-full grid grid-cols-3 gap-x-3" style="min-height: 800px;">
        <div class="col-span-2 flex flex-col border-2 border-white-500 px-4 py-6">
            <div style="width: 200px;">
                <NTabs size="large" v-model:value="tabValue" @update:value="changeTab">
                    <NTabPane name="未参与学生" label="未参与学生" />
                    <NTabPane name="已参与学生" label="已参与学生" />
                </NTabs>
            </div>
            <div class="flex flex-row" style="width: 300px;">
                <NInput v-model:value="search" />
                <NButton class="ml-4" @click="searchName">查询</NButton>
            </div>
            <div class="grow text-center flex flex-wrap gap-4 mt-6">
                <div style="width: 200px;" v-for="item in signTable">
                    <img :src="'http://127.0.0.1:8040/' + item.avatar" width="200px" alt="" srcset="" />
                    <h1>{{ item.name }}</h1>
                    <h2>学号: {{ item.username }}</h2>
                </div>
            </div>
            <div class="mx-auto">
                <NPagination v-model:page="page" size="large" :page-count="Math.ceil(total / 8)" :page-size="8" />
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
                <template v-for="(item, index) in info.not_can_yu">
                    <div v-if="index < 3" class="text-center text-2xl my-4">
                        {{ item.name }}
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
