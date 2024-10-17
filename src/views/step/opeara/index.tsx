import { ref } from "vue";

export function useQiandaoHook() {
    let qianDaoForm = ref({
        title: "",
        isAuto: false,
        type: "扫码签到",
    })

    const title = ref("")

    const detailInfo = ref("")

    const type = ref(0)

    let qianDaoShow = ref(false)

    function showQianDao() {
        qianDaoShow.value = true
    }

    function hideQianDao() {
        qianDaoShow.value = false
    }

    function openModal(t: number) {
        switch (t) {
            case 0: {
                title.value = "导入课件"
                detailInfo.value = "dasdassds"
            }
            case 1: {
                title.value = "导入课件"
                detailInfo.value = "dasddasdasdasdsadassds"
            }
            case 2: {
                title.value = "新建签到"
                detailInfo.value = "dasdassds"
            }
            case 3: {
                title.value = "新建提问"
                detailInfo.value = "das大苏打大师dassds"
            }
            case 4: {
                title.value = "新建讨论"
                detailInfo.value = "das大苏打大师dassds"
            }
            case 5: {
                title.value = "新建测验"
                detailInfo.value = "das大苏打大师dassds"
            }
        }
        type.value = t
        showQianDao()
    }

    return {
        qianDaoForm,
        qianDaoShow,
        showQianDao,
        hideQianDao,
        type,
        openModal,
        title,
        detailInfo
    }
}