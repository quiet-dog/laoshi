<script lang='ts' setup>
import LayoutIndex from '@/layout/index.vue'
import Comment from '@/components/comment/Comment.vue';
import Fuwu from "./fuwu/index.vue";
</script>

<template>
    <LayoutIndex>
        <div class="grid grid-cols-4 gap-4" style="height: calc(100% - 110px);">
            <div class="w-full h-full">
                <Comment title="课程资源" containerHeight="100%" containerWidth="100%" :titleWidth="200" :animate="false">
                    <Fuwu />
                </Comment>
            </div>
            <div class="w-full h-full">
                <Comment title="课程资源" containerHeight="100%" containerWidth="100%" :titleWidth="200" :animate="false">
                </Comment>
            </div>
            <div class="w-full h-full">
                <Comment title="课程资源" containerHeight="100%" containerWidth="100%" :titleWidth="200" :animate="false">
                </Comment>
            </div>
            <div class="w-full h-full">
                <Comment title="课程资源" containerHeight="100%" containerWidth="100%" :titleWidth="200" :animate="false">
                </Comment>
            </div>
        </div>
    </LayoutIndex>
</template>

<style scoped></style>
