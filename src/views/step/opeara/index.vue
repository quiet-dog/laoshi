<script lang='ts' setup>
import TestBg from "@/assets/avatar/7.png"
import { NButton, NCard, NForm, NInput, NModal, NRadioGroup, NSpace, NRadio, NFormItem } from "naive-ui";
import { useQiandaoHook } from ".";
const { qianDaoForm, qianDaoShow, hideQianDao, showQianDao } = useQiandaoHook();
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
            <div class="mx-auto text-center" @click="showQianDao">
                <img class="mb-4" :src="TestBg" width="100px" alt="" srcset="">
                <span class="text-2xl">签到</span>
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
    <NModal v-model:show="qianDaoShow">
        <NCard style="width: 600px;">
            <NForm :model="qianDaoForm">
                <NFormItem label="签到标题" path="title">
                    <NInput v-model:value="qianDaoForm.title" />
                </NFormItem>
                <NFormItem label="是否自动结束" path="isAuto">
                    <NRadioGroup v-model:value="qianDaoForm.isAuto">
                        <NSpace>
                            <NRadio label="是" :value="true" />
                            <NRadio label="否" :value="false" />
                        </NSpace>
                    </NRadioGroup>
                    <span>开启[自动签到],该签到在当天24点自动结束</span>
                </NFormItem>
                <NFormItem label="签到类型">
                    <NRadioGroup v-model:value="qianDaoForm.type">
                        <NSpace>
                            <NRadio label="是" :value="'扫码签到'" />
                        </NSpace>
                    </NRadioGroup>
                </NFormItem>
            </NForm>

            <div class="flex flex-row justify-center gap-4">
                <NButton type="primary" size="small">保存</NButton>
                <NButton type="primary" size="small">开始活动</NButton>
                <NButton type="primary" size="small">取消</NButton>
            </div>
        </NCard>
    </NModal>
</template>

<style scoped></style>
