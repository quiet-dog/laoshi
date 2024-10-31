<script lang='ts' setup>
import { ElTable, ElTableColumn } from 'element-plus';
import { NProgress } from 'naive-ui';
import { useJichuHook } from "./index";
const { tableData } = useJichuHook();

</script>

<template>
    <div class="w-full h-full flex flex-col pt-8 px-5">
        <h1 class="text-2xl"> 🩷 基础知识概况 </h1>
        <div class="w-full pt-6">
            <ElTable id="table" :data="tableData" :header-cell-style="{ 'text-align': 'center' }"
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
        <div class="w-full pt-8">
            <div class="grid grid-cols-6 gap-4">
                <div>
                    文化知识
                </div>
                <div class="col-span-5">
                    <NProgress type="line" :percentage="80" indicator-placement="inside" processing>
                        <template>
                        </template>
                    </NProgress>
                </div>
                <div>
                    乐理知识
                </div>
                <div class="col-span-5">
                    <NProgress type="line" :percentage="80" indicator-placement="inside" processing>
                        <template>
                        </template>
                    </NProgress>
                </div>
                <div class="col-start-2 col-end-7">
                    <div class="grid grid-cols-5">
                        <div class="text-right">20</div>
                        <div class="text-right">40</div>
                        <div class="text-right">60</div>
                        <div class="text-right">80</div>
                        <div class="text-right">100</div>
                    </div>
                </div>

            </div>
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
