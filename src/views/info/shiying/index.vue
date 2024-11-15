<script lang='ts' setup>
import { useNengliHook } from "./index"
import { NProgress } from "naive-ui";
const { table } = useNengliHook()
</script>

<template>
    <div class="w-full h-1/2 flex flex-col px-4">
        <div class="grow">1</div>
        <div>
            <ElTable :data="table" id="table" :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ textAlign: 'center', }">
                <ElTableColumn prop="project" label="项目" align="center" />
                <ElTableColumn prop="score" label="得分" align="center" />
                <ElTableColumn prop="paiming" label="专业排名" align="center">
                    <template #default="scope">
                        <div style="width: 100px;">
                            <NProgress type="line" :percentage="scope.row.paiming" indicator-placement="inside"
                                processing />
                        </div>
                    </template>
                </ElTableColumn>
            </ElTable>
        </div>
    </div>
</template>

<style scoped>
#table :deep(tbody>.el-table__row .cell) {
    color: white;
    margin: 0 2px;
}

#table {
    background-color: transparent !important;
}

#table :deep(tbody>.el-table__row .cell) {
    margin: 0 2px;
    color: white;
}

#table :deep(.el-table>tr) {
    --el-bg-color: blue !important;
}

#table:deep(>div.el-table__inner-wrapper>div.el-table__body-wrapper>div>div.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default>div>table>tbody) {
    background-color: transparent !important;
}

#table:deep(> div.el-table__inner-wrapper > div.el-table__header-wrapper > table > thead > tr) {
    background-color: transparent !important;
    color: white;
}

#table:deep(> div.el-table__inner-wrapper > div.el-table__header-wrapper > table > thead > tr>th) {
    background-color: transparent !important
}

#table:deep(>div.el-table__inner-wrapper > div.el-table__body-wrapper > div > div.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > div > table > tbody > tr) {
    background-color: transparent !important;
    --el-table-row-hover-bg-color: transparent !important
}

#table :deep(> div.el-table__inner-wrapper > div.el-table__header-wrapper > table > thead > tr > th) {
    border-bottom: unset;
}

#table :deep(> div.el-table__inner-wrapper > div.el-table__body-wrapper > div > div.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > div > table > tbody > tr> td) {
    border-bottom: unset;
}
</style>
