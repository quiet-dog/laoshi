import { ref } from "vue";

export function useTableHook() {
    const table = ref([{
        yixiu: "43",
        daixiu: "121",
        yixiuX: "1",
        daixiuX: "14",
        tongguo: "40",
        daishen: "0",
        canyu: "14",
        qiandao: "92"
    }])


    return {
        table
    }

}