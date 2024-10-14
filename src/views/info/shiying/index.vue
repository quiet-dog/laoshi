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

<style scoped></style>
