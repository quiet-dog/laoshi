<script lang='ts' setup>
import LayoutIndex from '@/layout/index.vue'
import Comment2 from "@/components/comment2/index.vue";
import DuiBi from "./content/duibi.vue";
import Lewaitongji from './content/kewaitongji.vue';
import Shichang from './content/shichang.vue';
import GongJiang from "./content/gongjiang.vue";
import Canu from './content/canu.vue';
import Huizhang from './content/huizhang.vue';
import Pingjun from './content/pingjun.vue';
</script>

<template>
    <LayoutIndex>
        <div class="flex flex-col h-full pb-12 px-4">
            <div class="h-3/7">
                <div class="grid grid-cols-8 h-full gap-x-4">
                    <div class="col-start-1 col-end-3 grid grid-rows-2">
                        <div style="height: 300px;">
                            <Comment2 :animate="false" containerHeight="100%" containerWidth="100%" :titleWidth="100"
                                title="asdsa">
                                <DuiBi />
                            </Comment2>
                        </div>
                        <div>
                            <Comment2 :animate="false" containerHeight="100%" containerWidth="100%" :titleWidth="100"
                                title="asdsa">
                                <Lewaitongji />
                            </Comment2>
                        </div>
                    </div>
                    <div class="col-start-3 col-end-6 grid grid-rows-2">
                        <div style="height: 300px;">
                            <Comment2 :animate="false" containerHeight="100%" containerWidth="100%" :titleWidth="100"
                                title="asdsa">
                                <Shichang />
                            </Comment2>
                        </div>
                        <div>
                            <Comment2 :animate="false" containerHeight="100%" containerWidth="100%" :titleWidth="100"
                                title="asdsa">
                                <GongJiang />
                            </Comment2>
                        </div>
                    </div>
                    <div class="col-start-6 col-end-9">
                        <Comment2 :animate="false" containerHeight="100%" containerWidth="100%" :titleWidth="100"
                            title="asdsa">
                            <Canu />
                        </Comment2>
                    </div>
                </div>
            </div>
            <div class="h-4/7">
                <div class="grid grid-cols-2 h-full w-full">
                    <div class="h-full mt-12" style="height: 300px;">
                        <Comment2 :animate="false" containerHeight="100%" containerWidth="100%" :titleWidth="100"
                            title="asdsa">
                            <Huizhang />
                        </Comment2>
                    </div>
                    <div class="h-full mt-12" style="height: 300px;">
                        <Comment2 :animate="false" containerHeight="100%" containerWidth="100%" :titleWidth="100"
                            title="asdsa">
                            <Pingjun />
                        </Comment2>
                    </div>
                </div>
            </div>
        </div>
    </LayoutIndex>
</template>

<style scoped></style>
