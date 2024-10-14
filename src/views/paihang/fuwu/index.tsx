import { ref } from "vue";

export function useFuwuHook() {
    const table = ref([
        { name: "1111", score: 93 },
    ])

    for (let i = 0; i < 40; i++) {
        table.value.push({
            name: "adsad",
            score: Math.random()
        })
    }
    return {
        table
    }
}