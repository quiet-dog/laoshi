import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTypeHook = defineStore('type', () => {
    const type = ref("3")

    const changeType = (types: string) => {
        type.value = types
    }

    return {
        type,
        changeType
    }
})