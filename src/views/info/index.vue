<script lang='ts' setup>
import LayoutIndex from '@/layout/index.vue'
import Header from "./header/index.vue"
import Comment from '@/components/comment/Comment.vue';
import NengLi from "./nengli/index.vue";
import Huojiang from "./huojiang/index.vue";
import Detail from "./detail/index.vue";
import ShiYing from "./shiying/index.vue";
import YuJing from "./yujing/index.vue";
</script>

<template>
    <LayoutIndex>
        <div class="flex flex-col h-full">
            <div style="height: 10%;">
                <Header />
            </div>
            <div style="height: 90%;">
                <div class="w-full grid grid-cols-3 h-full">
                    <div class="grid grid-rows-2">
                        <div>
                            <NengLi />
                        </div>
                        <div>
                            <Huojiang />
                        </div>
                    </div>
                    <div>
                        <Detail />
                    </div>
                    <div class="h-full flex flex-col">
                        <div class="basis-1/2">
                            <ShiYing />
                        </div>
                        <div class="basis-1/2">
                            <YuJing />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LayoutIndex>
</template>

<style scoped></style>
