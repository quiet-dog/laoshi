<script lang='ts' setup>
import LayoutIndex from '@/layout/index.vue' // Adjusted path if the file is in the parent directory
import Comment from '@/components/comment/Comment.vue';
import Comment1 from '@/components/comment1/index.vue';
import "element-plus/es/components/row/style/css"
import 'element-plus/es/components/col/style/css'
import Ziyuan from '@/assets/kecheng/img1-47a51186.webp';
import { reactive, ref } from 'vue';
import { ScrollRankingBoard as DvScrollRankingBoard, ScrollBoard as DvScrollBoard, DigitalFlop as DvDigitalFlop } from '@kjgl77/datav-vue3';
import MusicEchart from '@/components/music-echart/index.vue';
import SuyangEchart from '@/components/suyang-echart/index.vue';
import ChengzhangGuiji from "@/assets/chengzhangguiji/img7-b328bf18.webp";
import XuexiJindu from "@/assets/chengzhangguiji/img8-d9175497.webp";
import ZhiNengXuanRen from "@/assets/zhihuiketang/img4-811f52a2.webp";
import NumberTo from "@/components/number-to/index.vue";
import { useIntervalFn } from '@vueuse/core';
import KechengModal from '@/components/kecheng-modal/index.vue';
import { useKechengModalHook } from '@/components/kecheng-modal/index';
import { NModal, NCard, NForm, NFormItem, NSelect, NDatePicker, NButton } from 'naive-ui';
import Sucai from "@/assets/sucai/img1-CoMqH3MY.png";
import { useRouter } from 'vue-router';
import { useYuYueModalHook } from "./yuyue";

const { closeModal, openModal, show } = useKechengModalHook();

const { yyCloseModal, yyOpenModal, yyShow, selectOptions } = useYuYueModalHook();


const config = reactive({
    // header: ['列1', '列2', '列3'],
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3'],
    ],
    index: true,
    columnWidth: [50],
    align: ['center'],
})

const xDatas = reactive(["2021级别", "2022级别"])
const yDatas = reactive([100, 200])

const number = ref(10000)

useIntervalFn(() => {
    number.value = Math.floor(Math.random() * 10000)
}, 1000)

const router = useRouter();
function goStudent() {
    router.push('/student')
}

</script>

<template>

    <LayoutIndex>

        <div class="flex flex-col h-full">
            <div style="height: 40%;" class="mb-4">
                <div class="flex flex-row h-full">
                    <div class="basis-1/4 w-full">
                        <div class="bg-yellow w-full h-full">
                            <Comment title="课程资源" containerHeight="100%" containerWidth="100%" :titleWidth="200"
                                :animate="false">
                                <div class="grid grid-cols-3 text-red pt-8">
                                    <div class="col-start-1 col-span-1">
                                        <div class="flex flex-col justify-center items-center relative top-5"
                                            @click="openModal">
                                            <img :src="Ziyuan" width="50%">
                                            <p class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-start-3 col-span-1">
                                        <div class="flex flex-col justify-center items-center  relative top-5">

                                            <img :src="Ziyuan" width="50%">
                                            <p class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-start-2 col-span-1">
                                        <div class="flex flex-col justify-center items-center">

                                            <img :src="Ziyuan" width="50%">
                                            <p class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-start-1 col-span-1">
                                        <div class="flex flex-col justify-center items-center  relative -top-5">

                                            <img :src="Ziyuan" width="50%">
                                            <p class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-start-3 col-span-1">
                                        <div class="flex flex-col justify-center items-center relative -top-5">

                                            <img :src="Ziyuan" width="50%">
                                            <p class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <!-- <div class="grid grid-cols-2 gap4">
                                    <div class="flex flex-col justify-center items-center">

                                        <img :src="Ziyuan" width="40%">
                                        <p>资源数量:
                                            <NumberTo :number="number" /> 个
                                        </p>
                                        <p>使用人次:
                                            <NumberTo :number="number" />次
                                        </p>
                                    </div>
                                    <div class="flex flex-col justify-center items-center">
                                        <img :src="Ziyuan" width="40%">
                                        <p>资源数量:
                                            <NumberTo :number="number" /> 个
                                        </p>
                                        <p>使用人次:
                                            <NumberTo :number="number" /> 次
                                        </p>
                                    </div>
                                    <div class="flex flex-col justify-center items-center">
                                        <img :src="Ziyuan" width="40%">
                                        <p>资源数量:
                                            <NumberTo :number="number" />个
                                        </p>
                                        <p>使用人次:
                                            <NumberTo :number="number" />次
                                        </p>
                                    </div>
                                    <div class="flex flex-col justify-center items-center">
                                        <img :src="Ziyuan" width="40%">
                                        <p>资源数量:
                                            <NumberTo :number="number" />个
                                        </p>
                                        <p>使用人次:
                                            <NumberTo :number="number" />次
                                        </p>
                                    </div>
                                </div> -->
                            </Comment>
                        </div>
                    </div>
                    <div class="basis-1/2 w-full">
                        <Comment1 containerHeight="100%" containerWidth="100%">
                            two
                        </Comment1>
                    </div>
                    <div class="basis-1/4 w-full">
                        <div class="bg-yellow w-full h-full">
                            <Comment title="乐游中国" containerHeight="100%" containerWidth="100%" :titleWidth="200"
                                :animate="false">
                                <div style="width: 95%;" class="h-full pt-14" demo-bg>
                                    <dv-scroll-board :config="config" style="width:100%;height:92%"
                                        :oddRowBGC="'#ffffff'" :evenRowBGC="'#ffffff'" id="scrool-data" />
                                </div>
                            </Comment>
                        </div>
                    </div>
                </div>

            </div>
            <div style="height: calc(100% - 40%);">
                <div class="flex flex-row h-full">
                    <div class="basis-1/4 w-full">
                        <div class="bg-yellow w-full h-full">
                            <Comment title="课程数据" containerHeight="90%" containerWidth="100%" :titleWidth="200"
                                :animate="false">
                                <div class="flex flex-row h-full gap-4 w-full pt-16">
                                    <div class="h-full w-1/2">
                                        <MusicEchart :xDatas="xDatas" :yDatas="yDatas" color="red" name="音乐平台数据对比" />
                                    </div>
                                    <div class="h-full w-1/2">
                                        <MusicEchart :xDatas="xDatas" :yDatas="yDatas" color="red" name="音乐平台数据对比" />
                                    </div>
                                </div>
                            </Comment>
                        </div>
                    </div>
                    <div class="basis-1/2 w-full h-full">
                        <Comment title="学生成长轨迹" containerHeight="90%" containerWidth="100%" :titleWidth="200"
                            :animate="false">
                            <div class="w-full h-full pt-16">

                                <div class="flex flex-row h-1/2">
                                    <div class="basis-1/2 h-full">
                                        <SuyangEchart />
                                    </div>
                                    <div class="basis-1/2 h-full">
                                        <div class="flex flex-row h-full justify-center items-center">
                                            <div class="w-full flex flex-col justify-center items-center">
                                                <img :src="ChengzhangGuiji" style="width: 200px;" alt="" srcset="">
                                                <h1>学生画像</h1>
                                            </div>
                                            <div class="w-full flex flex-col justify-center items-center">
                                                <img :src="ChengzhangGuiji" style="width: 200px;" alt="" srcset="">
                                                <h1>学生画像</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-row h-1/2">
                                    <div class="basis-1/2 h-full">
                                        <div class="flex flex-col justify-center items-center">
                                            <div class="flex flex-row">
                                                <img :src="XuexiJindu" height="100px" width="100px" alt="">
                                                <div class="pt-5">
                                                    学习进度<br>
                                                    <div>12<span
                                                            style="margin-left: 25%; color: rgb(0, 255, 255);">↑1.5%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-row">
                                                <img :src="XuexiJindu" height="100px" width="100px" alt="">
                                                <div class="pt-5">
                                                    学习进度<br>
                                                    <div>12<span
                                                            style="margin-left: 25%; color: rgb(0, 255, 255);">↑1.5%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="basis-1/2">
                                        <div class="flex flex-col justify-center items-center">
                                            <div class="flex flex-row">
                                                <img :src="XuexiJindu" height="100px" width="100px" alt="">
                                                <div class="pt-5">
                                                    学习进度<br>
                                                    <div>12<span
                                                            style="margin-left: 25%; color: rgb(0, 255, 255);">↑1.5%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-row">
                                                <img :src="XuexiJindu" height="100px" width="100px" alt="">
                                                <div class="pt-5">
                                                    学习进度<br>
                                                    <div>12<span
                                                            style="margin-left: 25%; color: rgb(0, 255, 255);">↑1.5%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </Comment>
                    </div>
                    <div class="basis-1/4 w-full h-full">
                        <div class="bg-yellow w-full h-full">
                            <Comment title="智慧课堂" containerHeight="90%" containerWidth="100%" :titleWidth="200"
                                :animate="false">
                                <div class="w-full h-full pt-12">
                                    <div class="flex flex-row h-1/2  justify-center items-center ">
                                        <div class="flex flex-col justify-center items-center">
                                            <img :src="ZhiNengXuanRen" height="200px" width="200px" alt="" srcset="">
                                            <h1>智慧课堂</h1>
                                        </div>
                                        <div class="flex flex-col justify-center items-center">
                                            <img :src="ZhiNengXuanRen" height="200px" width="200px" alt="" srcset="">
                                            <h1>智能选人</h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-row h-1/2  justify-center items-center " @click="yyOpenModal">
                                        <div class="flex flex-col justify-center items-center">
                                            <img :src="ZhiNengXuanRen" height="200px" width="200px" alt="" srcset="">
                                            <h1>企业预约</h1>
                                        </div>
                                        <div class="flex flex-col justify-center items-center">
                                            <img :src="ZhiNengXuanRen" height="200px" width="200px" alt="" srcset="">
                                            <h1>项目预约</h1>
                                        </div>
                                    </div>
                                </div>
                            </Comment>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </LayoutIndex>



    <!-- 课程资源类的 -->
    <NModal v-model:show="show">
        <NCard style="width: 600px;" title="文物素材库">
            <div class="flex flex-col gap-4">
                <div class="flex flex-row gap-4">
                    <div class="flex  justify-center items-center relative">
                        <img :src="Sucai" height="200px" width="200px" alt="" srcset="">
                        <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">人物素材1</span>
                    </div>
                    <div class="flex  justify-center items-center relative">
                        <img :src="Sucai" height="200px" width="200px" alt="" srcset="">
                        <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">人物素材1</span>
                    </div>
                    <div class="flex  justify-center items-center relative">
                        <img :src="Sucai" height="200px" width="200px" alt="" srcset="">
                        <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">人物素材1</span>
                    </div>
                </div>
                <div class="flex flex-row gap-4">
                    <div class="flex  justify-center items-center relative">
                        <img :src="Sucai" height="200px" width="200px" alt="" srcset="">
                        <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">人物素材1</span>
                    </div>
                    <div class="flex  justify-center items-center relative">
                        <img :src="Sucai" height="200px" width="200px" alt="" srcset="">
                        <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">人物素材1</span>
                    </div>
                    <div class="flex  justify-center items-center relative">
                        <img :src="Sucai" height="200px" width="200px" alt="" srcset="">
                        <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">人物素材1</span>
                    </div>
                </div>
            </div>
        </NCard>
    </NModal>

    <!-- 预约类的 -->
    <NModal v-model:show="yyShow">
        <NCard style="width: 600px;" title="文物素材库">
            <NForm>
                <NFormItem label="请选择场地">
                    <NSelect placeholder="请选择场地" :options="selectOptions" />
                </NFormItem>
                <NFormItem label="请选择岗位">
                    <NSelect placeholder="请选择岗位" :options="selectOptions" />
                </NFormItem>
                <NFormItem label="请选择时间">
                    <NDatePicker placeholder="请选择时间" type="datetime" clearable />
                </NFormItem>

                <div class="flex justify-end">
                    <NButton type="primary" @click="yyCloseModal">预约</NButton>
                </div>
            </NForm>
        </NCard>

    </NModal>
</template>

<style scoped></style>
