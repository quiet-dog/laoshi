<script lang='ts' setup>
import { NButton, NFormItem, NFormItemRow, NInput, NScrollbar, NSelect, NSpace, NTabPane, NTabs, NTag } from "naive-ui";
import LieBiao from "./liebiao/index.vue";
import QianDaoDetail from "./detail/index.vue";
import { useQianDaoIndexHook } from ".";
import { provide } from "vue";
import { useTypeHook } from "./type_hook";

const { changeTabs, tabValue, optinons, typeValue } = useQianDaoIndexHook();

const typeHook = useTypeHook();


</script>

<template>
    <div class="h-full w-full flex flex-col px-12">
        <div class="flex-col w-full">
            <div>
                <NSpace vertical>
                    <NSelect v-model:value="typeHook.type" :options="optinons" @update:value="typeHook.changeType" />
                </NSpace>
            </div>
            <div class="flex flex-row">
                <div class="w-full">
                    <NTabs type="line" size="large" justify-content="space-evenly" id="my-tabs"
                        @update:value="changeTabs" v-model:value="tabValue">
                        <NTabPane name="/step/qiandao/keqian" tab="课前">
                        </NTabPane>
                        <NTabPane name="/step/qiandao/kezhong" tab="课中">
                        </NTabPane>
                        <NTabPane name="/step/qiandao/kehou" tab="课后">
                        </NTabPane>
                    </NTabs>
                </div>
            </div>

            <!-- <div class="flex flex-row">
                <div class="text-white text-2xl font-bold"><span class="text-2xl text-blue-400">|</span>活动列表</div>
                <div class="grow"></div>
                <div class="flex-row flex">
                    <NButton>导入课件</NButton>
                    <NButton>合并签到</NButton>
                </div>
            </div> -->
            <NScrollbar style="max-height: 900px;">
                <RouterView />
            </NScrollbar>
            <!-- <NScrollbar style="max-height: 800px;">
                
            </NScrollbar> -->
        </div>
    </div>
</template>

<style scoped>
#my-tabs :deep(.n-tabs-tab) {
    font-size: 30px
}
</style>
