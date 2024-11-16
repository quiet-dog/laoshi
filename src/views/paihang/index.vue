<script lang='ts' setup>
import LayoutIndex from '@/layout/index.vue'
import Comment from '@/components/comment/Comment.vue';
import Fuwu from "./fuwu/index.vue";
import Fuwu2 from "./fuwu2/index.vue";
import Fuwu3 from "./fuwu3/index.vue";
import Fuwu4 from "./fuwu4/index.vue";
import Fuwu5 from "./fuwu5/index.vue";
import { ElTable } from 'element-plus';
</script>

<template>
    <LayoutIndex>
        <div class="grid grid-cols-5 gap-4" style="height: calc(100% - 110px);">
            <div class="w-full h-full">
                <Comment title="项目一-140火箭架数字化制造" containerHeight="100%" containerWidth="100%" :titleWidth="300"
                    :animate="false">
                    <Fuwu />
                </Comment>
            </div>
            <div class="w-full h-full">
                <Comment title="项目二-480制导弹头数字化" containerHeight="100%" containerWidth="100%" :titleWidth="300"
                    :animate="false">
                    <Fuwu2 />
                </Comment>
            </div>
            <div class="w-full h-full">
                <Comment title="项目三-PHL03式远程火箭炮" containerHeight="100%" containerWidth="100%" :titleWidth="300"
                    :animate="false">
                    <Fuwu3 />
                </Comment>
            </div>
            <div class="w-full h-full">
                <Comment title="项目四-发射车数字化制造" containerHeight="100%" containerWidth="100%" :titleWidth="300"
                    :animate="false">
                    <Fuwu5 />
                </Comment>
            </div>
            <div class="w-full h-full">
                <Comment title="课程资源" containerHeight="100%" containerWidth="100%" :titleWidth="200" :animate="false">
                    <Fuwu4 />
                </Comment>
            </div>
        </div>
    </LayoutIndex>
</template>

<style scoped></style>
