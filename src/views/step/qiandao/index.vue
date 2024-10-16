<script lang='ts' setup>
import { NButton, NFormItem, NFormItemRow, NInput, NScrollbar, NTabPane, NTabs, NTag } from "naive-ui";
import LieBiao from "./liebiao/index.vue";
import QianDaoDetail from "./detail/index.vue";
</script>

<template>
    <div class="h-full w-full flex flex-col">
        <div class="flex-col w-full">
            <div class="flex flex-row">
                <div class="w-full">
                    <NTabs type="line" size="large" justify-content="space-evenly">
                        <NTabPane name="sigin" tab="课前">
                        </NTabPane>
                        <NTabPane name="1" tab="课后">
                        </NTabPane>
                        <NTabPane name="2" tab="课中">
                        </NTabPane>

                    </NTabs>
                </div>
            </div>

            <div class="flex flex-row">
                <div class="text-white text-2xl font-bold"><span class="text-2xl text-blue-400">|</span>活动列表</div>
                <div class="grow"></div>
                <div class="flex-row flex">
                    <NButton>导入课件</NButton>
                    <NButton>合并签到</NButton>
                </div>
            </div>
            <RouterView />
            <!-- <NScrollbar style="max-height: 800px;">
                
            </NScrollbar> -->
        </div>
    </div>
</template>

<style scoped></style>
