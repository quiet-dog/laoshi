import { ref } from "vue";

export function useQiandaoHook() {
    let qianDaoForm = ref({
        title: "",
        isAuto: false,
        type: "扫码签到",
    })

    const type = ref(0)

    let qianDaoShow = ref(false)

    function showQianDao() {
        qianDaoShow.value = true
    }

    function hideQianDao() {
        qianDaoShow.value = false
    }

    return {
        qianDaoForm,
        qianDaoShow,
        showQianDao,
        hideQianDao,
        type
    }
}