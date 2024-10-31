import { createClass, deleteClass, getClass, getClassList } from "@/api/class";
import { useMessage } from "naive-ui";
import { onMounted, ref } from "vue";

export function useClassHook() {
    const formData = ref({
        name: "",
        pid: "",
        path: ""
    })

    const option = ref([])

    const message = useMessage()

    const getOption = () => {
        getClass().then(res => {
            if (res && res.data.success) {
                option.value = res.data.data
            }
        }).catch(err => { }).finally(() => { })
    }


    const submit = () => {
        createClass(formData.value).then(res => {
            message.success("创建成功")
        }).catch(err => { }).finally(() => { })
    }

    const table = ref([])
    const getList = () => {
        getClassList().then(res => {
            if (res && res.data.success) {
                table.value = res.data.data
            }
        }).catch(err => { }).finally(() => { })
    }

    const deleteCl = (id: string) => {
        deleteClass(id).then(res => {
            getList()
            getClass()
        }).catch(err => { }).finally(() => { })
    }

    onMounted(() => {
        getOption()
        getList()
    })

    return {
        formData,
        getOption,
        option,
        submit,
        table,
        deleteCl
    }
}