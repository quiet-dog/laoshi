import { ref } from "vue";

export function useKeqianHook() {
    let showKeQiandDaoDu = ref(false)
    const showKeQiandDao = () => {
        showKeQiandDaoDu.value = true
    }
    const hideKeQiandDao = () => {
        showKeQiandDaoDu.value = false
    }

    return {
        showKeQiandDaoDu,
        showKeQiandDao,
        hideKeQiandDao
    }
}