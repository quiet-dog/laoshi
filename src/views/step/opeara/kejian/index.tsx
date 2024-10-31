import { getClass } from "@/api/class";
import { onMounted, ref } from "vue";

export function useKejianHook() {
    const treeData = ref([])

    const show = ref(false)

    const fileUrl = ref("")

    const getTreeData = () => {
        getClass().then(res => {
            if (res && res.data.success) {
                treeData.value = res.data.data
            }
        }).catch(err => { }).finally(() => { })
    }

    onMounted(() => {
        getTreeData()
    })

    return {
        treeData,
        show,
        fileUrl
    }
}