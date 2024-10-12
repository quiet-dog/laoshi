<script lang='ts' setup>
import { ElTable } from 'element-plus';
import { useRenzhiHook } from "./index";
import { CapsuleChart as DvCapsuleChart } from '@kjgl77/datav-vue3';
import { NProgress } from 'naive-ui';
import LeiDaEchart from "./leida/index.vue";
const { tableData } = useRenzhiHook()
</script>

<template>
    <div class="w-full h-full flex flex-col pt-8 px-5">
        <h1 class="text-2xl"> ❤️ 认知能力概况 </h1>
        <div>
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
        <div class="w-full h-1/2">
            <LeiDaEchart />
        </div>
    </div>
</template>

<style scoped></style>
