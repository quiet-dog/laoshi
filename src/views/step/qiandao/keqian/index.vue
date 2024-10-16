<script lang='ts' setup>
import Bg from "@/assets/avatar/7.png";
import { ElIcon } from "element-plus";
import { HelpFilled, Edit, UploadFilled, CaretBottom, CaretTop } from "@element-plus/icons-vue";
import { NButton, NForm, NFormItem, NIcon, NInput, NText, NUpload, NUploadDragger } from "naive-ui";

import { useKeqianHook } from ".";
const { showKeQiandDaoDu, showKeQiandDao, hideKeQiandDao } = useKeqianHook();
</script>

<template>
    <div class="w-full h-full">
        <div class="flex flex-col">
            <div class="flex-row flex gap-x-4">
                <div>
                    <img :src="Bg" width="100px" alt="" srcset="">
                </div>
                <div class="grow flex flex-col justify-center">
                    <h1 class="text-3xl">课堂要求:已编辑</h1>
                    <h1 class="text-1xl mt-2">查看情况: 0/222</h1>
                </div>
                <div class="flex flex-row gap-x-4 mr-14">
                    <div class="flex flex-col justify-center items-center">
                        <ElIcon size="large">
                            <HelpFilled />
                        </ElIcon>
                        <NButton quaternary>预览</NButton>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <ElIcon size="large">
                            <Edit />
                        </ElIcon>
                        <NButton quaternary>编辑</NButton>
                    </div>
                </div>
            </div>
            <div>
                <NForm label-placement="left">
                    <NFormItem label="内容">
                        <NInput type="textarea" />
                    </NFormItem>
                    <NFormItem label="文件">
                        <NUpload id="upload" class="w-1/3 text-center" directory-dnd>
                            <NUploadDragger>
                                <NIcon size="48" :depth="3">
                                    <UploadFilled />
                                </NIcon>
                            </NUploadDragger>
                            <NText style="font-size: 16px">
                                点击或者拖动文件到该区域来上传
                            </NText>
                        </NUpload>
                    </NFormItem>
                </NForm>
                <div style="display: flex; justify-content: flex-end" class="gap-x-5">
                    <NButton round type="primary">
                        确定
                    </NButton>
                    <NButton round type="primary">
                        取消
                    </NButton>
                </div>
            </div>
            <div class="flex flex-row bg-red-100 justify-center py-3 px-2">
                <div class="grow text-3xl">课前导读</div>
                <div class="h-full pt-2">
                    <ElIcon @click="showKeQiandDao" v-show="!showKeQiandDaoDu">
                        <CaretBottom />
                    </ElIcon>
                    <ElIcon @click="hideKeQiandDao" v-show="showKeQiandDaoDu">
                        <CaretTop />
                    </ElIcon>
                </div>
            </div>

            <div class="text-1xl text-white" v-show="showKeQiandDaoDu">
                <h1>12321312</h1>
                <h1>文件: <span>dsadasd</span> </h1>
            </div>

            <div class="flex flex-row bg-red-100 justify-center py-3 px-2">
                <div class="grow text-3xl">活动列表</div>
                <div class="h-full pt-2">
                    按创建时间排序
                </div>
            </div>

            <div class="flex flex-col col-span-9 justify-center">
                <div class="text-white text-2xl font-bold">打回dasdas 到海鸥 <span>
                        <NTag>为签到</NTag>
                    </span></div>
                <div class="mt-4 text-1xl font-medium flex flex-row">
                    <div>
                        创建时间:<span>12312312312</span>
                    </div>
                    <div class="ml-5">
                        创建时间:<span>12312312312</span>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div>签到类型:<span>一键签到</span></div>
                    <div class="ml-6">参与情况:<span>0/3222</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#upload :deep(.n-upload-dragger) {
    background-color: unset;
}
</style>
