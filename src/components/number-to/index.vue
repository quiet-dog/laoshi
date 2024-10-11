<script lang='ts' setup>
import { reactive, watch } from 'vue'
import gsap from 'gsap'
const tweened = reactive({
    number: 0
})

const { number = 100 } = defineProps<{ number: number }>()
watch(() => number, (n) => {
    gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
}, { immediate: true })

</script>

<template>
    <span>{{ tweened.number.toFixed(0) }}</span>
</template>

<style scoped></style>
