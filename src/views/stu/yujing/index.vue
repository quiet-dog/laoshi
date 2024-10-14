<script lang='ts' setup>
import { ScrollRankingBoard } from '@kjgl77/datav-vue3';
import { useYujingHook } from "./index";
const { tableData } = useYujingHook();
</script>

<template>
    <div class="w-full h-full flex flex-col pt-8 px-5">
        <h1 class="text-2xl"> ⚠️ 课程学习预警 </h1>
        <div class="w-full" style="height: 250px;">
            <ScrollRankingBoard :config="tableData" />
        </div>
    </div>
</template>

<style scoped></style>