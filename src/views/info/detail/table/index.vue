<script lang='ts' setup>
import { NProgress } from 'naive-ui';
import { useDetaiTableHoot } from '.';
const { oneTable } = useDetaiTableHoot();
</script>

<template>
    <div class="flex flex-col text-center text-white text-2xl">
        <div class="grid grid-cols-10 w-full text-3xl border-b-2 border-indigo-500">
            <div class="col-span-3">项目</div>
            <div class="col-span-3">得分</div>
            <div class="col-span-3">专业排名</div>
            <div class="col-span-1">1</div>
        </div>

        <div class="grid grid-row-3 gap-y-3 grid-cols-10 w-full  border-b-2 border-indigo-500">
            <template v-for="item in oneTable">
                <div class="col-span-3">{{ item.project }}</div>
                <div class="col-span-3">{{ item.score }}</div>
                <div class="col-span-3">
                    <NProgress :percentage="item.paiming" type="line">
                        <template #default>
                            {{ item.paiming }}
                        </template>
                    </NProgress>
                </div>
            </template>

            <div class="row-start-1 row-end-4 col-start-10 text-upright px-5" style="writing-mode: vertical-rl;">职业能力
            </div>
        </div>

        <!-- 创新能力 -->
        <div class="grid grid-row-3 gap-y-3 grid-cols-10 w-full  border-b-2 border-indigo-500 mt-3">
            <template v-for="item in oneTable">
                <div class="col-span-3">{{ item.project }}</div>
                <div class="col-span-3">{{ item.score }}</div>
                <div class="col-span-3">
                    <NProgress :percentage="item.paiming" type="line">
                        <template #default>
                            {{ item.paiming }}
                        </template>
                    </NProgress>
                </div>
            </template>

            <div class="row-start-1 row-end-4 col-start-10 text-upright px-5" style="writing-mode: vertical-rl;">创新能力
            </div>
        </div>

        <!-- 发展能力 -->
        <div class="grid grid-row-3 gap-y-3 grid-cols-10 w-full  border-b-2 border-indigo-500 mt-3">
            <template v-for="item in oneTable">
                <div class="col-span-3">{{ item.project }}</div>
                <div class="col-span-3">{{ item.score }}</div>
                <div class="col-span-3">
                    <NProgress :percentage="item.paiming" type="line">
                        <template #default>
                            {{ item.paiming }}
                        </template>
                    </NProgress>
                </div>
            </template>

            <div class="row-start-1 row-end-4 col-start-10 text-upright px-5" style="writing-mode: vertical-rl;">发展能力
            </div>
        </div>
    </div>
</template>

<style scoped></style>
