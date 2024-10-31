<script lang='ts' setup>
import { Delete, VideoPlay } from "@element-plus/icons-vue";
import { useQianDaoHook } from "."
import { NButton, NCard, NIcon, NModal, NScrollbar } from "naive-ui";
import dayjs from "dayjs";
import { QrCode20Filled } from "@vicons/fluent";
import { DevicesFoldOutlined } from "@vicons/material";
import { DocumentSigned } from "@vicons/carbon";
import { BrandKickstarter } from "@vicons/tabler";
const { list, deleteA, startActive, endActive, showQr, showQrCode, showUrl, goRouter } = useQianDaoHook();

</script>

<template>
    <div>
        <div class="flex flex-row">
            <div class="text-white text-2xl font-bold"><span class="text-2xl text-blue-400">|</span>活动列表</div>
            <div class="grow"></div>
            <div class="flex-row flex">
                <NButton>导入课件</NButton>
                <NButton>合并签到</NButton>
            </div>
        </div>
        <div class="grid grid-cols-12 w-full border-2 border-solid rounded-sm py-10 my-4" v-for="item in list">
            <div class="col-span-1 flex flex-row justify-center items-center">
                <NIcon size="large">
                    <DevicesFoldOutlined style="font-size: 50px;color: cadetblue;" v-if="item.tao_lun_model != null" />
                    <DocumentSigned style="font-size: 50px;color: blue;" v-if="item.sign_model != null" />
                    <BrandKickstarter style="font-size: 50px;color: blue;" v-if="item.pk_model != null" />
                </NIcon>
            </div>
            <div class="flex flex-col col-span-9 justify-center">

                <template v-if="item.sign_model != null">
                    <div class="text-white text-2xl font-bold">【签到】{{ item.sign_model.title }}
                        <!-- <span>
                            <NTag>未签到</NTag>
                        </span> -->
                    </div>
                    <div class="mt-4 text-1xl font-medium flex flex-row">
                        <div>
                            创建时间:<span>{{ dayjs(item.sign_model.created_at).format("YYYY-MM-DD HH:mm:ss") }}</span>
                        </div>
                        <!-- <div class="ml-5">
                            创建时间:<span>12312312312</span>
                        </div> -->
                    </div>
                    <div class="flex flex-row">
                        <div>签到类型:<span>{{ item.sign_model.type }}</span></div>
                        <div class="ml-6">参与情况:<span>0/40</span></div>
                    </div>
                </template>

                <template v-if="item.pk_model != null">
                    <div class="text-white text-2xl font-bold">【小组PK】{{ item.pk_model.title }}

                        <!-- <span>
                            <NTag>未签到</NTag>
                        </span> -->
                    </div>
                    <div class="mt-4 text-1xl font-medium flex flex-row">
                        <div>
                            创建时间:<span>{{ dayjs(item.pk_model.created_at).format("YYYY-MM-DD HH:mm:ss") }}</span>
                        </div>
                        <!-- <div class="ml-5">
                            创建时间:<span>12312312312</span>
                        </div> -->
                    </div>
                    <div class="flex flex-row">
                        <div>小组数:<span>{{ item.pk_model.count }}</span></div>
                        <div class="ml-6">参与情况:<span>{{ item?.can_yu?.length }}/40</span></div>
                    </div>
                </template>

                <template v-if="item.tao_lun_model != null">
                    <div class="text-white text-2xl font-bold">【讨论】{{ item.tao_lun_model.title }}
                    </div>
                    <div class="mt-4 text-1xl font-medium flex flex-row">
                        <div>
                            创建时间:<span>{{ dayjs(item.tao_lun_model.created_at).format("YYYY-MM-DD HH:mm:ss") }}</span>
                        </div>
                        <div class="ml-5">
                            开始时间:<span>12312312312</span>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <div>讨论次数:<span>{{ item?.tao_lun_model?.comment_model?.length }}</span></div>
                    </div>
                </template>


            </div>
            <div class="col-start-11 col-end-13 flex flex-row gap-x-6">
                <!--  v-if="!item.is_end && item.is_start" -->
                <div class="flex flex-col items-center text-white justify-center"
                    v-if="item.sign_model != null && item.is_start && !item.is_end">
                    <div>
                        <NIcon size="large">
                            <QrCode20Filled />
                        </NIcon>
                    </div>
                    <NButton text size="large" @click="showQrCode(item.id)">
                        二维码
                    </NButton>
                </div>
                <div class=" flex flex-col items-center text-white justify-center" v-if="!item.is_end">
                    <div>
                        <ElIcon size="large">
                            <VideoPlay v-if="!item.is_start" />
                            <Delete v-else />
                        </ElIcon>
                    </div>
                    <NButton text size="large" v-if="!item.is_start" @click="startActive(item.id, item)">
                        开始
                    </NButton>
                    <NButton text size="large" v-else @click="endActive(item.id, item)">
                        结束
                    </NButton>
                </div>
                <div class="flex flex-col items-center text-white justify-center" @click="goRouter(item)">
                    <div>
                        <ElIcon size="large">
                            <VideoPlay />
                        </ElIcon>
                    </div>
                    <NButton text size="large">
                        查看
                    </NButton>
                </div>
                <div class="flex flex-col items-center text-red-600 justify-center" @click="deleteA(item.id)">
                    <div>
                        <ElIcon size="large">
                            <Delete />
                        </ElIcon>
                    </div>
                    <div>
                        <NButton text size="large">
                            删除
                        </NButton>
                    </div>
                </div>
            </div>
        </div>

        <NModal v-model:show="showQr">
            <NCard style="width: 700px;height: 700px;" class="flex flex-row justify-center items-center">
                <VueQrcode :value="showUrl" :options="{ width: 400 }" class="mx-auto" />
            </NCard>
        </NModal>
    </div>
</template>

<style scoped></style>
