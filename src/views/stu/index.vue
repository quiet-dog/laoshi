<script lang='ts' setup>
import LayoutIndex from '@/layout/index.vue'
import TableMy from "@/views/stu/table/index.vue"
import Comment1 from '@/components/comment1/index.vue';
import RenZhi from "./renzhi/index.vue";
import Info from "./info/index.vue";
import TeDian from "./tedian/index.vue";
import JiChu from "./jichu/index.vue";
import YuJing from "./yujing/index.vue";
import ZhuanYe from "./zhuanye/index.vue";


</script>

<template>
    <LayoutIndex>
        <div class="flex flex-col h-full">
            <div style="height: 10%;">
                <TableMy />
            </div>
            <div style="height: 50%;" class="mb-4 bg-red">
                <div class="flex flex-row h-full">
                    <div class="basis-1/4 w-full">
                        <div class="bg-yellow w-full h-full">
                            <Comment1 container-width="100%" container-height="100%">
                                <RenZhi />
                            </Comment1>
                        </div>
                    </div>
                    <div class="basis-1/2 w-full">
                        <Comment1 container-width="100%" container-height="100%">
                            <Info />
                        </Comment1>
                    </div>
                    <div class="basis-1/4 w-full">
                        <Comment1 container-width="100%" container-height="100%">
                            <TeDian />
                        </Comment1>
                    </div>
                </div>

            </div>
            <div style="height: calc(100vh - 60%);" class="bg-blue">
                <div class="flex flex-row h-5/6">
                    <div class="basis-1/4 w-full">
                        <div class="bg-yellow w-full h-full">
                            <Comment1 container-width="100%" container-height="100%">
                                <JiChu />
                            </Comment1>
                        </div>
                    </div>
                    <div class="basis-1/2 w-full">
                        <Comment1 container-width="100%" container-height="100%">
                            <YuJing />
                        </Comment1>
                    </div>
                    <div class="basis-1/4 w-full">
                        <Comment1 container-width="100%" container-height="100%">
                            <ZhuanYe />
                        </Comment1>
                    </div>
                </div>
            </div>
        </div>
    </LayoutIndex>
</template>

<style scoped></style>
