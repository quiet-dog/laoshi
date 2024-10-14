<script lang='ts' setup>
import People from "@/assets/avatar/people.png"
import { NProgress, NSpace, NTag } from "naive-ui";
import PaiMingEchart from "./paiming-echart/index.vue";
import DetailTable from "./table/index.vue";
</script>

<template>
    <div class="w-full h-full grid grid-rows-2">
        <div class="grid grid-rows-2">
            <div class="flex flex-row">
                <img :src="People" width="160px" height="100px" alt="" srcset="">
                <div class="flex-1 grid grid-cols-3 ">
                    <div class="flex flex-col justify-center items-center">
                        <h1>个人信息展示</h1>
                        <NProgress type="circle" :percentage="80" :offset-degree="120" />
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <h1>个人信息展示</h1>
                        <NProgress type="circle" :percentage="80" :offset-degree="120" />
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <h1>个人信息展示</h1>
                        <NProgress type="circle" :percentage="80" :offset-degree="120" />
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div style="width: 160px;" class="flex flex-col items-center">
                    <h1 class="text-2xl">彩礼也</h1>
                    <h1>2021级舞蹈教育1班</h1>
                    <div>
                        <NSpace>
                            <NTag type="success">
                                舞蹈
                            </NTag>
                            <NTag type="warning">
                                舞蹈
                            </NTag>
                            <NTag type="error">
                                舞蹈
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
