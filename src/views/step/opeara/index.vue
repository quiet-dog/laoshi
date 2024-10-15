<script lang='ts' setup>
import TestBg from "@/assets/avatar/7.png"
import { NButton } from "naive-ui";
</script>

<template>
    <div class="flex flex-col items-center gap-y-12">
        <div class="flex flex-row">
            <div>
                <NButton size="large" quaternary type="tertiary">如何签到?</NButton>
            </div>
            <div>
                <NButton size="large" type="primary">如何签到?</NButton>
            </div>
        </div>
        <div class="grid grid-cols-3 w-full gap-y-8">
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
        </div>
        <div class="flex flex-col w-full gap-y-3">
            <div class="h-32 w-full flex flex-col text-center items-center py-4" style="background-color: red;">
                <img class="mb-4" :src="TestBg" width="60px" alt="" srcset="">
                <span class="text-2xl">引入活动</span>
            </div>
            <div class="h-32 w-full flex flex-col text-center justify-center" style="background-color: blue;">
                <span class="text-4xl text-white">任务统计</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
