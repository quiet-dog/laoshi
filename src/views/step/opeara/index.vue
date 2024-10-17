<script lang='ts' setup>
import TestBg from "@/assets/avatar/7.png"
import { NButton, NCard, NForm, NInput, NModal, NRadioGroup, NSpace, NRadio, NFormItem } from "naive-ui";
import { useQiandaoHook } from ".";
import KeJianInfo from "./kejian/index.vue";
import CreateQianDao from "./createkejian/index.vue";
import TiWen from "./tiwen/index.vue";
import TaoLun from "./taolun/index.vue";
import CeYan from "./ceyan/index.vue";
const { qianDaoForm, qianDaoShow, hideQianDao, showQianDao, type, openModal, title, detailInfo } = useQiandaoHook();
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
            <div class="mx-auto text-center" @click="openModal(0)">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(1)">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(2)">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">签到</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(3)">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">提问</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(4)">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">讨论</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(5)">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">测验</span>
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
    <NModal v-model:show="qianDaoShow">
        <NCard style="width: 800px;">
            <div class="flex flex-row gap-x-4">
                <div class="flex flex-col gap-y-4">
                    <h1 class="text-2xl" style="width: 200px;"> <span class="text-sky-500">|</span> {{ title }}</h1>
                    <div>{{ detailInfo }}</div>
                </div>

                <div class="grow">
                    <KeJianInfo v-if="type == 0" />
                    <CreateQianDao v-if="type == 2" />
                    <TiWen v-if="type == 3" />
                    <TaoLun v-if="type == 4" />
                    <CeYan v-if="type == 5" />
                </div>
            </div>


        </NCard>
    </NModal>
</template>

<style scoped></style>
