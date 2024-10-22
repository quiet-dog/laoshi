<script lang='ts' setup>
import { NCard, NDataTable, NIcon, NModal, NRate, NScrollbar, NTable, NTabPane, NTabs } from "naive-ui";
import { useDetailHook } from "."
import { PeopleQueue24Filled } from "@vicons/fluent";
const { info, group, getGroupList, openModal, show, colums, nowLabel, groupList, scoreList, setScore } = useDetailHook();
const getScoreCount = (groupId: number) => {
    for (let i = 0; i < scoreList.value.length; i++) {
        if (scoreList.value[i].group_id == groupId) {
            return Number(scoreList.value[i].score)
        }
    }
    return 0
}


</script>

<template>
    <div class="w-full h-full" style="min-height: 800px;">
        <div style="height: 60px;" class="text-2xl text-center text-white">{{ info?.pk_model?.title }}</div>

        <div style="height: 800px" class="border border-sky-500">
            <NScrollbar style="height: 100%">
                <div class="px-6 py-6 flex flex-col gap-y-4 ">
                    <div v-for="(item, index) in group"
                        class="grid grid-cols-12 justify-center items-center border border-sky-500"
                        style="height: 150px;">
                        <div class="text-center text-2xl">
                            <h1>{{ item.label }}</h1>
                        </div>
                        <div class="col-start-2 col-end-5">
                            <NRate :value="getScoreCount(index + 1)" :count="10"
                                :readonly="getScoreCount(index + 1) != 0"
                                @update:value="(val) => setScore(index + 1, val)" />
                        </div>
                        <div class="col-start-5 col-end-13">
                            <NIcon size="large" class="mb-6">
                                <PeopleQueue24Filled @click="getGroupList(item.value)" style="font-size: 70px;" />
                            </NIcon>
                        </div>
                    </div>
                </div>
            </NScrollbar>
        </div>

        <NModal v-model:show="show" style="width: 800px;">
            <NCard title="人员管理">
                <NTabs type="line">
                    <NTabPane name="第一组" :tab="nowLabel">
                        <NDataTable :columns="colums" :data="groupList" />
                    </NTabPane>
                </NTabs>
            </NCard>
        </NModal>
    </div>
</template>

<style scoped></style>
