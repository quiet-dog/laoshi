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
import ShuKong from "@/assets/ke/normal_u187.png";
import { useKechengModalHook } from '@/components/kecheng-modal/index';
import { NModal, NCard, NForm, NFormItem, NSelect, NDatePicker, NButton } from 'naive-ui';
import Sucai from "@/assets/sucai/img1-CoMqH3MY.png";
import { useRouter } from 'vue-router';
import { useYuYueModalHook } from "./yuyue";
import ZhuanYeJiaoXueZiyuanKu from "@/assets/list/normal_u197.png";
import KechengZiyuan from "@/assets/list/normal_u198.png";
import BingGongJingShen from "@/assets/list/normal_u213.png";
import QiYeAnLiZiYuan from "@/assets/list/normal_u199.png";
import JinJieXiTi from "@/assets/list/normal_u200.png";
import XueXiJinDu from "@/assets/list/normal_u207.png";
import JieGouSheJi from "@/assets/list/normal_u208.png";
import KeYanNengLi from "@/assets/list/normal_u52.png";
import SheHuiShiJian from "@/assets/list/normal_u51.png";
import XueShengHuaXiang from "@/assets/list/normal_u202.png";
import PaiHangBang from "@/assets/list/normal_u201.png";
import ZhiHuiKeTang from "@/assets/list/normal_u203.png";
import KeTangZhiBo from "@/assets/list/normal_u204.png";
import QiYeYuYue from "@/assets/list/normal_u205.png";
import XiangMuYuYue from "@/assets/list/normal_u206.png";
import ShuZi from "@/assets/ke/normal_u206.png";
import JiQi from "@/assets/ke/normal_u207.png";
import BgText from "@/assets/list/normal_u161.png";
import GuanKanShiChang from "@/assets/login/watch.png";
import WenDa from "@/assets/login/2.png";
import TaoLun from "@/assets/login/3.png";
import TiJiao from "@/assets/login/4.png";
import CanYuCeShi from "@/assets/login/5.png";
import QianDao from "@/assets/login/6.png";
import { use } from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from "vue-echarts";

use([GridComponent, BarChart, CanvasRenderer, LineChart])



const { closeModal, openModal, show } = useKechengModalHook();

const { yyCloseModal, yyOpenModal, yyShow, selectOptions, kechengShow, kechengShowCloseModal, kechengShowOpenModal, shiChangShow, shiChangShowCloseModal, shiChangShowOpenModal, shichangData, taoLunShow, taoLunShowCloseModal, taoLunShowOpenModal, taoLunData,
    ciShuShow, ciShuShowCloseModal, ciShuShowOpenModal, ciShuData, zuoYeData, zuoYeShow, zuoYeShowOpenModal, zuoYeShowCloseModal, canYuData, canYuShow, canYuShowCloseModal, canYuShowOpenModal } = useYuYueModalHook();


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
                                <div class="" style="position: relative;width: 100%;height: 100%">
                                    <div style="position: absolute;left: 0px;top: 40px;width: 40%;" class="">
                                        <div class="flex flex-col justify-center items-center relative top-5"
                                            @click="openModal">
                                            <img :src="ZhuanYeJiaoXueZiyuanKu" width="40%">
                                            <h1 class="text-2xl font-bold" style="color: #30ffaf;">
                                                专业教学资源库
                                            </h1>
                                            <p style="color: #f59a23" class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p style="color: #f59a23" class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                    <div style="position: absolute;right: 0px;top: 40px;width: 40%;">
                                        <div class="flex flex-col justify-center items-center  relative top-5"
                                            @click="kechengShowOpenModal">

                                            <img :src="KechengZiyuan" width="40%">
                                            <h1 class="text-2xl font-bold" style="color: #30ffaf;">课程资源库</h1>
                                            <p style="color: #f59a23" class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p style="color: #f59a23" class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                    <div style="position: absolute;left: 30%;top: 150px;width: 40%;">
                                        <div class="flex flex-col justify-center items-center">

                                            <img :src="BingGongJingShen" width="40%">
                                            <h1 class="text-2xl font-bold" style="color: #30ffaf;">"兵工精神"思政库</h1>
                                            <p style="color: #f59a23" class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p style="color: #f59a23" class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                    <div style="position: absolute;left: 0;bottom: 0px;width: 40%;">
                                        <div class="flex flex-col justify-center items-center  relative -top-5">

                                            <img :src="QiYeAnLiZiYuan" width="40%">
                                            <h1 class="text-2xl font-bold" style="color: #30ffaf;">企业案例资源库</h1>
                                            <p style="color: #f59a23" class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p style="color: #f59a23" class="text-sm">使用人次:
                                                <NumberTo :number="number" />次
                                            </p>
                                        </div>
                                    </div>
                                    <div style="position: absolute;right: 0;bottom: 0px;width: 40%;">
                                        <div class="flex flex-col justify-center items-center relative -top-5">

                                            <img :src="JinJieXiTi" width="40%">
                                            <h1 class="text-2xl font-bold" style="color: #30ffaf;">进阶习题资源库</h1>
                                            <p style="color: #f59a23" class="text-sm">资源数量:
                                                <NumberTo :number="number" /> 个
                                            </p>
                                            <p style="color: #f59a23" class="text-sm">使用人次:
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
                            <Comment title="学习监测" containerHeight="90%" containerWidth="100%" :titleWidth="200"
                                :animate="false">

                                <div style="color: #30ffaf "
                                    class="w-full h-full px-6 grid grid-cols-3 pt-24 text-center font-bold">
                                    <div @click="shiChangShowOpenModal">
                                        <div class="jiance">
                                            <img class="mx-auto" :src="GuanKanShiChang" width="80px" alt="" srcset="">
                                        </div>
                                        <h1 class="text-2xl mt-2">观看视频时长</h1>
                                    </div>
                                    <div @click="taoLunShowOpenModal">
                                        <div class="jiance">
                                            <img class="mx-auto" :src="TaoLun" width="80px" alt="" srcset="">
                                        </div>
                                        <h1 class="text-2xl mt-2">主题讨论次数</h1>
                                    </div>
                                    <div @click="ciShuShowOpenModal">
                                        <div class="jiance">
                                            <img class="mx-auto" :src="WenDa" width="80px" alt="" srcset="">
                                        </div>
                                        <h1 class="text-2xl mt-2">回答问题次数</h1>
                                    </div>
                                    <div @click="zuoYeShowOpenModal">
                                        <div class="jiance">
                                            <img class="mx-auto" :src="TiJiao" width="80px" alt="" srcset="">
                                        </div>
                                        <h1 class="text-2xl mt-2">提交作业次数</h1>
                                    </div>
                                    <div @click="canYuShowOpenModal">
                                        <div class="jiance">
                                            <img class="mx-auto" :src="CanYuCeShi" width="80px" alt="" srcset="">
                                        </div>
                                        <h1 class="text-2xl mt-6">参与测试次数</h1>
                                    </div>
                                    <div>
                                        <div class="jiance">
                                            <img class="mx-auto" :src="QianDao" width="80px" alt="" srcset="">
                                        </div>
                                        <h1 class="text-2xl mt-2">参与签到次数</h1>
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
                                            <div class="w-full flex flex-col justify-center items-center"
                                                @click="$router.push('/draw')">
                                                <img :src="XueShengHuaXiang" style="width: 200px;" alt="" srcset="">
                                                <h1 class="text-yellow-500 text-2xl font-bold">学生画像</h1>
                                            </div>
                                            <div class="w-full flex flex-col justify-center items-center"
                                                @click="$router.push('/paihang')">
                                                <img :src="PaiHangBang" style="width: 200px;" alt="" srcset="">
                                                <h1 class="text-yellow-500 text-2xl font-bold">排行榜</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-row h-1/2  text-white text-2xl font-bold">
                                    <div class="basis-1/2 h-full">
                                        <div class="flex flex-col justify-center items-center ">
                                            <div class="flex flex-row">
                                                <img :src="XueXiJinDu" height="100px" width="100px" alt="">
                                                <div class="pt-5">
                                                    <span>学习进度</span><br>
                                                    <div>12
                                                        <span class="text-red-500">↑ 1.5%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-row">
                                                <img :src="JieGouSheJi" height="100px" width="100px" alt="">
                                                <div class="pt-5">
                                                    结构设计<br>
                                                    <div>
                                                        12
                                                        <span class="text-yellow-500">↑1.5%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="basis-1/2">
                                        <div class="flex flex-col justify-center items-center">
                                            <div class="flex flex-row">
                                                <img :src="KeYanNengLi" height="100px" width="100px" alt="">
                                                <div class="pt-5">
                                                    科研能力<br>
                                                    <div>12
                                                        <span style="color:  #00948f;">↑1.5%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-row">
                                                <img :src="SheHuiShiJian" height="100px" width="100px" alt="">
                                                <div class="pt-5">
                                                    社会实践<br>
                                                    <div>
                                                        12
                                                        <span style="color:  #00ffff;">↑1.5%</span>
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
                                    <div class="flex flex-row h-1/2 gap-x-12  justify-center items-center ">
                                        <div class="flex flex-col justify-center items-center"
                                            @click="$router.push('/step/qiandao/kezhong')">
                                            <img :src="ZhiHuiKeTang" height="150px" width="150px" alt="" srcset="">
                                            <h1 class="text-bg text-3xl font-bold">智慧课堂</h1>
                                        </div>
                                        <div class="flex flex-col justify-center items-center">
                                            <img :src="KeTangZhiBo" height="150px" width="150px" alt="" srcset="">
                                            <h1 class="text-bg text-3xl font-bold">课堂直播</h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-row h-1/2 gap-x-12  justify-center items-center "
                                        @click="yyOpenModal">
                                        <div class="flex flex-col justify-center items-center">
                                            <img :src="QiYeYuYue" height="150px" width="150px" alt="" srcset="">
                                            <h1 class="text-bg text-3xl font-bold">企业预约</h1>
                                        </div>
                                        <div class="flex flex-col justify-center items-center">
                                            <img :src="XiangMuYuYue" height="150px" width="150px" alt="" srcset="">
                                            <h1 class="text-bg text-3xl font-bold">项目预约</h1>
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

    <NModal v-model:show="kechengShow">
        <NCard style="width: 800px;" title="文物素材库">
            <div class="flex flex-col gap-4">
                <div class="flex flex-row gap-4">
                    <div class="flex  justify-center items-center relative">
                        <img :src="ShuKong" height="400px" width="400px" alt="" srcset="">
                    </div>
                    <div class="flex  justify-center items-center relative">
                        <img :src="ShuZi" height="400px" width="400px" alt="" srcset="">
                    </div>
                    <div class="flex  justify-center items-center relative">
                        <img :src="JiQi" height="400px" width="400px" alt="" srcset="">
                    </div>
                </div>
                <!-- <div class="flex flex-row gap-4">
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
                </div> -->
            </div>
        </NCard>
    </NModal>

    <!-- 视频时长 -->
    <NModal v-model:show="shiChangShow">
        <NCard style="width: 800px;" title="视频时长统计">
            <div style="height: 400px;">
                <VChart :option="shichangData" />
            </div>
        </NCard>
    </NModal>

    <NModal v-model:show="taoLunShow">
        <NCard style="width: 800px;" title="主题讨论次数统计">
            <div style="height: 400px;">
                <VChart :option="taoLunData" />
            </div>
        </NCard>
    </NModal>

    <NModal v-model:show="ciShuShow">
        <NCard style="width: 800px;" title="回答问题次数">
            <div style="height: 400px;">
                <VChart :option="ciShuData" />
            </div>
        </NCard>
    </NModal>

    <!-- 视频时长 -->
    <NModal v-model:show="zuoYeShow">
        <NCard style="width: 800px;" title="提交作业次数">
            <div style="height: 400px;">
                <VChart :option="zuoYeData" />
            </div>
        </NCard>
    </NModal>

    <!-- 视频时长 -->
    <NModal v-model:show="canYuShow">
        <NCard style="width: 800px;" title="参与测试次数">
            <div style="height: 400px;">
                <VChart :option="canYuData" />
            </div>
        </NCard>
    </NModal>
</template>

<style scoped>
.text-bg {
    position: relative;
    color: #22f2ff;
}

.text-bg::after {
    position: absolute;
    top: 0;
    left: 0;
    background: url(@/assets/list/normal_u161.png);
    width: 110%;
    height: 70px;
    left: -2%;
    content: "";
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.jiance {
    position: relative;
    height: 120px;
}

.jiance>img {
    /* 内容放在底部 */
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.jiance::after {
    position: absolute;
    top: 0;
    left: 0;
    background: url(@/assets/login/normal_u44.png);
    width: 110%;
    height: 100%;
    left: -2%;
    content: "";
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
