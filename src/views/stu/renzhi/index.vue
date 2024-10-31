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
        <div style="height: 250px;">
            <ElTable :data="tableData" :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ textAlign: 'center', }" id="table">
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
        <div class="w-full" style="height: calc(100% - 250px);">
            <LeiDaEchart />
        </div>
    </div>
</template>

<style scoped>
#table {
    background-color: transparent !important
}

#table :deep(tbody>.el-table__row .cell) {
    margin: 0 2px;
}

#table :deep(.el-table>tr) {
    --el-bg-color: blue !important;
}

#table:deep(>div.el-table__inner-wrapper>div.el-table__body-wrapper>div>div.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default>div>table>tbody) {
    background-color: transparent !important
}

#table:deep(> div.el-table__inner-wrapper > div.el-table__header-wrapper > table > thead > tr) {
    background-color: transparent !important
}

#table:deep(> div.el-table__inner-wrapper > div.el-table__header-wrapper > table > thead > tr>th) {
    background-color: transparent !important
}

#table:deep(>div.el-table__inner-wrapper > div.el-table__body-wrapper > div > div.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > div > table > tbody > tr) {
    background-color: transparent !important;
    --el-table-row-hover-bg-color: transparent !important
}
</style>
