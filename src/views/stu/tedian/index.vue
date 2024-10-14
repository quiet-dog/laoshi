<script lang='ts' setup>
import { NProgress } from 'naive-ui';
import { useTeDianHook } from './index.tsx';
import LeiDa from "./leida/index.vue";
const { tableData } = useTeDianHook();
</script>

<template>
    <div class="w-full h-full flex flex-col pt-8 px-5">
        <h1 class="text-2xl"> ❤️ 学习特点概况 </h1>
        <div style="height: 250px;">
            <ElTable :data="tableData" :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ textAlign: 'center', }">
                <ElTableColumn prop="project" label="项目" />
                <ElTableColumn prop="score" label="得分" />
                <ElTableColumn prop="paiming" label="专业排名">
                    <template #default="scope">
                        <NProgress type="line" :percentage="scope.row.paiming" indicator-placement="inside" processing>
                            <template>
                            </template>
                        </NProgress>
                    </template>
                </ElTableColumn>
            </ElTable>
        </div>
        <div class="w-full h-1/2" style="height: calc(100% - 250px);">
            <LeiDa />
        </div>
    </div>
</template>

<style scoped></style>
