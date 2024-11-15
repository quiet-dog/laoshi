<script lang='ts' setup>
import { ElTable, ElTableColumn } from 'element-plus';
import { useTableHook } from './table';
const { table } = useTableHook();
</script>

<template>
    <div class="w-full">
        <ElTable :data="table" id="table" :header-cell-style="{ 'text-align': 'center' }"
            :cell-style="{ textAlign: 'center', }">
            <ElTableColumn prop="yixiu" label="已修（必修）" align="center" />
            <ElTableColumn prop="daixiu" label="待修（必修）" align="center" />
            <ElTableColumn prop="yixiuX" label="已修（选修）" align="center" />
            <ElTableColumn prop="daixiuX" label="待修（选修）" align="center" />
            <ElTableColumn prop="tongguo" label="通过证书" align="center" />
            <ElTableColumn prop="daishen" label="待审证书" align="center" />
            <ElTableColumn prop="canyu" label="参与活动" align="center" />
            <ElTableColumn prop="qiandao" label="课堂签到" align="center" />
        </ElTable>
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
    color: #00ffff;
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
