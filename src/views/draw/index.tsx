import { ref,onMounted } from "vue";
import { getEmployListApi } from "@/api/employ";

export function useDrawHook() {
    const userList = ref();

    onMounted(() => {
        getEmployListApi().then((res) => {
            console.log(res.data);
            if (res.data.success) {
                userList.value = res.data.data;
            }
        }).catch((err) => {});
    })

    return {
        userList
    }
}