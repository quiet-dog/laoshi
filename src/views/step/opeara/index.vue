<script lang='ts' setup>
import TestBg from "@/assets/avatar/7.png"
import { NButton, NCard, NForm, NInput, NModal, NRadioGroup, NSpace, NRadio, NFormItem } from "naive-ui";
import { useQiandaoHook } from ".";
import KeJianInfo from "./kejian/index.vue";
import CreateQianDao from "./createkejian/index.vue";
import TiWen from "./tiwen/index.vue";
import TaoLun from "./taolun/index.vue";
import CeYan from "./ceyan/index.vue";
import Pk from "./pk/index.vue";
import YinRuHuoDong from "@/assets/active/logo-yrhd.3aa642be.png";
import Refresh from "@/assets/active/logo-sx.4724b5de.png";
import { taoLunImg, kejianImg, jiaoCaiImg, tiWenImg, ceYanImg, zuoYeImg, kaoShiImg, wenJuanImg, touPiaoImg, touNaoImg, xiaoZuPkImg } from "./image.ts";
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
                <img class="mb-4" :src="kejianImg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(1)">
                <img class="mb-4" :src="jiaoCaiImg" width="100px" alt="" srcset="">
                <span class="text-2xl">数字教材</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(2)">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">签到</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(3)">
                <img class="mb-4" :src="tiWenImg" width="100px" alt="" srcset="">
                <span class="text-2xl">提问</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(4)">
                <img class="mb-4" :src="taoLunImg" width="100px" alt="" srcset="">
                <span class="text-2xl">讨论</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(5)">
                <img class="mb-4" :src="ceYanImg" width="100px" alt="" srcset="">
                <span class="text-2xl">测验</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="kejianImg" width="100px" alt="" srcset="">
                <span class="text-2xl">课件</span>
            </div>
            <div class="mx-auto text-center" @click="openModal(7)">
                <img class="mb-4" :src="xiaoZuPkImg" width="100px" alt="" srcset="">
                <span class="text-2xl">小组PK</span>
            </div>
            <div class="mx-auto text-center">
                <img class="mb-4" :src="touNaoImg" width="100px" alt="" srcset="">
                <span class="text-2xl">头脑风暴</span>
            </div>
        </div>
        <div class="flex flex-col w-full gap-y-3">
            <div class="h-32 w-full flex flex-col text-center items-center py-4 border border-white-500">
                <img class="mb-4" :src="YinRuHuoDong" width="60px" alt="" srcset="">
                <span class="text-2xl">引入活动</span>
            </div>
            <div class="h-32 w-full flex flex-col text-center justify-center items-center border border-white-500">
                <img :src="Refresh" alt="" width="60px" srcset="">
                <span class="text-4xl text-white">刷新</span>
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
                    <KeJianInfo @cancel="hideQianDao" v-if="type == 0" />
                    <CreateQianDao @cancel="hideQianDao" v-if="type == 2" />
                    <TiWen @cancel="hideQianDao" v-if="type == 3" />
                    <TaoLun @cancel="hideQianDao" v-if="type == 4" />
                    <CeYan @cancel="hideQianDao" v-if="type == 5" />
                    <Pk @cancel="hideQianDao" v-if="type == 7" />
                </div>
            </div>


        </NCard>
    </NModal>
</template>

<style scoped></style>
