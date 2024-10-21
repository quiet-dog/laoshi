import { getActivesById } from "@/api/active";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export function useDetailHook() {
    const list = ref([])

    const { id } = useRoute().params

    const info = ref({})

    const getDetailInfo = () => {
        getActivesById(id).then(res => {
            if (res && res.data.success) {
                info.value = res.data.data
            }
            console.log("info.value", info.value)
        }).catch(err => {

        }).finally(() => { })
    }


    onMounted(() => {
        console.log("iddasdasdas")
        getDetailInfo()
    })

    return {
        getDetailInfo,
        info
    }
}