<script lang='ts' setup>
import { BorderBox8 as DvBorderBox8 } from '@kjgl77/datav-vue3'
const { containerWidth = "100%", containerHeight = "100%" } = defineProps<{
    containerWidth: string,
    containerHeight: string
}>();
</script>

<template>
    <div demo-bg :style="{ height: containerHeight, width: containerWidth }">
        <dv-border-box8>
            <div dv-bg class="content">
                <slot />
            </div>
        </dv-border-box8>
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
