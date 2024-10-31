import { defineStore } from "pinia"
import { ref } from "vue"

export const useLoginPinaHook = defineStore('login', () => {
    const classValue = ref("数学")
    const banjiValue = ref("一班")
    const xiangmuValue = ref("作业")

    return {
        classValue,
        banjiValue,
        xiangmuValue
    }

})