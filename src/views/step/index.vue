<script lang='ts' setup>
import LayoutIndex from '@/layout/index.vue' // Adjusted path if the file is in the parent directory
import Opeara from "./opeara/index.vue"
</script>

<template>
    <LayoutIndex>
        <div class="grid grid-cols-4 h-full">
            <div class="col-span-3">
                <RouterView />
            </div>
            <div>
                <Opeara />
            </div>
        </div>
    </LayoutIndex>
</template>

<style scoped></style>
