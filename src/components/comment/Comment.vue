<script lang='ts' setup>
import { BorderBox11 as DvBorderBox11 } from '@kjgl77/datav-vue3'
const { title = "content", animate = false, titleWidth = 400, containerWidth = "100%", containerHeight = "100%" } = defineProps<{
    title: string,
    titleWidth: number,
    animate: boolean,
    containerWidth: string,
    containerHeight: string
}>();

</script>

<template>
    <div demo-bg :style="{ width: containerWidth, height: containerHeight }">
        <dv-border-box11 :title="title" :title-width="titleWidth" :animate="animate">
            <div dv-bg class="content">
                <slot></slot>
            </div>
        </dv-border-box11>
    </div>
</template>

<style scoped>
.content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
