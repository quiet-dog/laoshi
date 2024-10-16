<script lang='ts' setup>
import { useQianDaoHook } from "."
const { list } = useQianDaoHook();

</script>

<template>
    <div class="grid grid-cols-12 w-full border-2 border-solid rounded-sm py-10 my-4" v-for="item in list">
        <div class="col-span-1">图标</div>
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
        <div class="col-start-11 col-end-13 grid grid-cols-3">
            <div class="flex flex-col items-center text-white justify-center">
                <div>
                    <ElIcon size="large">
                        <VideoPlay />
                    </ElIcon>
                </div>
                <div>
                    开始
                </div>
            </div>
            <div class="flex flex-col items-center text-white justify-center">
                <div>
                    <ElIcon size="large">
                        <VideoPlay />
                    </ElIcon>
                </div>
                <div>
                    查看
                </div>
            </div>
            <div class="flex flex-col items-center text-red-600 justify-center">
                <div>
                    <ElIcon size="large">
                        <Delete />
                    </ElIcon>
                </div>
                <div>
                    删除
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
