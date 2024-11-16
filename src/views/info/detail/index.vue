<script lang='ts' setup>
import People from "@/assets/avatar/people.png"
import { NProgress, NSpace, NTag } from "naive-ui";
import PaiMingEchart from "./paiming-echart/index.vue";
import DetailTable from "./table/index.vue";
import { useDetailHook } from ".";
import { baseURL } from "@/utils/http";
const { info } = useDetailHook();
</script>

<template>
    <div class="w-full h-full grid grid-rows-2 border-2 rounded-sm" style="color: white;border-color:  #2cf8f9">
        <div class="grid grid-rows-2">
            <div class="flex flex-row">
                <img :src="baseURL + info?.avatar" width="160px" height="100px" alt="" srcset="">
                <div class="flex-1 grid grid-cols-3 text-2xl" style="color: white;">
                    <div class="flex flex-col justify-center items-center">
                        <h1>综合素质得分</h1>
                        <NProgress type="circle" :percentage="80" :offset-degree="120" />
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <h1>平均绩点</h1>
                        <NProgress type="circle" :percentage="80" :offset-degree="120" />
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <h1>专业排名</h1>
                        <NProgress type="circle" :percentage="80" :offset-degree="120" />
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div style="width: 160px;" class="flex flex-col items-center">
                    <h1 class="text-2xl">{{ info.name }}</h1>
                    <h1>2021级舞蹈教育1班</h1>
                    <div>
                        <NSpace>
                            <NTag type="success">
                                唱歌
                            </NTag>
                            <NTag type="warning">
                                运动
                            </NTag>
                            <NTag type="error">
                                乒乓球
                            </NTag>
                        </NSpace>
                    </div>
                </div>
                <div class="flex-1">
                    <PaiMingEchart />
                </div>
            </div>
        </div>
        <div>
            <DetailTable />
        </div>
    </div>
</template>

<style scoped></style>
