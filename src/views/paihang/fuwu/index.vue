<script lang='ts' setup>
import { NScrollbar } from 'naive-ui';
import TouXiang from "@/assets/avatar/7.png"
import { useFuwuHook } from "./index.tsx";
const { table } = useFuwuHook();
</script>

<template>
    <div class="h-full w-full pt-12 px-5">
        <NScrollbar style="max-height: 800px;">
            <div v-for="item in table" class="grid grid-cols-7 justify-center items-center  text-white pb-2">
                <div style="width: 30px;height: 30px;background-color: white;border-radius: 50%;"
                    class="flex justify-center items-center ml-2 text-black">
                    1
                </div>
                <div>
                    <img :src="TouXiang" alt="" srcset="">
                </div>
                <div class="col-span-4 text-2xl pl-5">
                    谈大会
                </div>
                <div class="text-2xl">{{ item.score }}</div>
            </div>
        </NScrollbar>
    </div>
</template>

<style scoped></style>
