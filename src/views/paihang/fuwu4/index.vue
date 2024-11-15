<script lang='ts' setup>
import { NButton, NScrollbar } from 'naive-ui';
import TouXiang from "@/assets/avatar/7.png"
import { useFuwuHook } from "./index.tsx";
const { table, one, showModel } = useFuwuHook();
</script>

<template>
    <div class="h-full w-full pt-12 px-5">
        <NScrollbar style="max-height: 900px;">
            <div class="bg grid grid-cols-7 mt-4 justify-center items-center text-2xl text-white  py-4 px-2">
                <div>序号</div>
                <div>姓名</div>
                <div class="col-span-4 pl-5">分数</div>
                <div> 等级</div>
            </div>
            <div v-for="(item, index) in one"
                class="grid grid-cols-7 mt-5 justify-center items-center  text-white pb-2">
                <div class="flex justify-center items-center ml-2 text-black text-2xl" style="color: white;">
                    {{ index + 1 }}
                </div>
                <div class="text-2xl" style="color: #00e0db;">
                    {{ item?.employ?.name }}
                </div>
                <div class="col-span-4 text-2xl pl-5" style="color:  #f59a23; font-weight: 700;">
                    <NButton style="color: #f59a23;" @click="showModel(item?.id, item?.score)" text>
                        <span style="font-size: 30px;">{{ item?.score }}</span>
                    </NButton>
                </div>
                <div class="text-2xl" style="color: #f59a23;">
                    {{ item?.level }}
                </div>
            </div>
        </NScrollbar>
    </div>
</template>

<style scoped>
.bg {
    border: 1px solid rgba(102, 255, 255, 0.3);
    background-color: rgba(4, 24, 34, 0);
    box-sizing: border-box;
}
</style>
