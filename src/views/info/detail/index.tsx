import { getEmployInfoApi, getGroupListApi } from "@/api/employ";
import { ref } from "vue";
import { useRoute } from "vue-router";

export function useDetailHook() {
    const info = ref({})

    const id = useRoute().params.id

    getEmployInfoApi(id).then((res) => {
        console.log(res.data);
        if (res.data.success) {
            info.value = res.data.data
        }
    }).catch((err) => { })

    return {
        info
    }
}