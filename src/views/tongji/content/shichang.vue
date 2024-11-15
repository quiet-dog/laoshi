<script lang='ts' setup>
import ZiYuan from "@/assets/renwu/r11.png";
import CanYu from "@/assets/renwu/r2222.png";
import FaTie from "@/assets/renwu/r3333.png";
import JiaoShi from "@/assets/renwu/r44.png";
</script>

<template>
    <div class="h-full w-full" style="color: white;font-size: larger;font-weight: bolder">
        <h1 class="text-2xl mt-4 ml-5">时长统计</h1>
        <h1 class="text-center text-3xl" style="color: #f59a23;">1231分钟</h1>
        <div class="mt-5">
            <div class="grid grid-rows-2 grid-cols-2 mx-auto justify-items-stretch gap-x-16">
                <div class="flex flex-row justify-self-end pr-4">
                    <div>
                        <img :src="ZiYuan" width="70px" alt="" srcset="">
                    </div>
                    <div class="px-4">
                        <h1 class="text-red-500">139个</h1>
                        <h1 style="color:  #959caa;">资源数量</h1>
                    </div>
                </div>
                <div class=" flex flex-row">
                    <div>
                        <img :src="CanYu" width="70px" alt="" srcset="">
                    </div>
                    <div class="px-4">
                        <h1 style="color:  #f59a23;">30人</h1>
                        <h1 style="color:  #959caa;">参与学生</h1>
                    </div>
                </div>
                <div class="flex flex-row justify-self-end">
                    <div>
                        <img :src="FaTie" width="70px" alt="" srcset="">
                    </div>
                    <div class="px-4">
                        <h1 style="color:  #47d67e;">593帖</h1>
                        <h1 style="color:  #959caa;">学生发帖数</h1>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div>
                        <img :src="JiaoShi" width="70px" alt="" srcset="">
                    </div>
                    <div class="px-4">
                        <h1 style="color: #60a5fa">asdsa贴</h1>
                        <h1 style="color:  #959caa;">教师发帖数</h1>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
