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
    background-color: red;
    margin: 0 2px;
}
</style>
