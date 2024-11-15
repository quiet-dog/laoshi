<script lang='ts' setup>
import DynamicWordCloudVue3 from "dynamic-word-cloud-vue3";
import { reactive } from "vue";
import Vue3WordCloud from 'vue3-word-cloud';

const words = reactive([['超级好沟通', 19], ['自律', 3], ['自豪', 7], ['团队写作', 3],
['很专业', 12], ['人工智能', 4], ['数据驱动制造', 15], ['智能制造', 19], ['认真负责', 40], ['认真负责', 30]])
</script>

<template>
    <div class="h-full w-full flex flex-col" style="color: white;">
        <div class="text-2xl mt-4 ml-5">课外活动统计</div>
        <div class="flex-grow">
            <div style="width: 100%;" class="px-4">
                <vue3-word-cloud style="height: 280px;width: 100%;" :words="words"
                    :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
                    font-family="Roboto" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
