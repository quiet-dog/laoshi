<script lang='ts' setup>
import { ScrollBoard as DvScrollBoard } from '@kjgl77/datav-vue3';
import { useHuojiang } from "."
const { config } = useHuojiang()
</script>

<template>
    <div class="h-full w-full flex flex-col justify-center items-center border-2 rounded-sm"
        style="color: white;border-color:  #2cf8f9">
        <div class="text-2xl mx-auto">
            <div class="text">获奖情况</div>
        </div>
        <div class="grow w-full">
            <DvScrollBoard :config="config" />
        </div>
        <!-- <div class="w-full" style="height: 80px;background-color: red;">3</div> -->
    </div>
</template>

<style scoped>
.text {
    background: url(@/assets/info/normal_u46.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 50px;
    width: 400px;
    text-align: center;
    line-height: 50px;
}
</style>
