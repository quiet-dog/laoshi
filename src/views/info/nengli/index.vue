<script lang='ts' setup>
import { useNengliHook } from "./index.tsx"
import { NProgress } from "naive-ui";
import Bg from "@/assets/info/normal_u30.png";
const { table } = useNengliHook()
</script>

<template>
    <div class="w-full h-full flex flex-col px-4 border-2 rounded-sm pt-4" style="color: white;border-color:  #2cf8f9">
        <div class="text-2xl mx-auto">
            <div class="text">专业能力概况</div>
        </div>
        <div class="grow">
            <ElTable :data="table" size="large" id="table" :header-cell-style="{ 'text-align': 'center' }"
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
.text {
    background: url(@/assets/info/normal_u30.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 50px;
    width: 400px;
    text-align: center;
    line-height: 50px;
}

#table {
    background-color: transparent !important;
    color: white;
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

#table :deep(> div.el-table__inner-wrapper > div.el-table__body-wrapper > div > div.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > div > table > tbody > tr) {
    height: 52px;
}
</style>
