import { ref } from "vue";

export function useZhuanYeHook() {
    let tableData = ref([
        { project: "想象力", score: "98", paiming: 90 },
        { project: "模范里", score: "98", paiming: 90 },
        { project: "表现力", score: "98", paiming: 90 },
        { project: "表达力", score: "98", paiming: 90 },
    ])

    return {
        tableData
    }

}