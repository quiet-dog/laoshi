import { createActive } from "@/api/active";
import { createPk } from "@/api/pk";
import dayjs from "dayjs";
import { useMessage } from "naive-ui";
import { onMounted, ref } from "vue";
import { useTypeHook } from "../../qiandao/type_hook";

export function usePkHook() {

    const message = useMessage()
    const pkModel = ref({
        title: "",
        count: 0,
        paths: []
    })

    const paths = ref([])

    const showPk = () => {
        pkModel.value.title = dayjs().format("YYYY-MM-DD HH:mm:ss") + "的PK"
    }

    const submit = async (isStart: boolean) => {

        const res = await createPk({
            ...pkModel.value,
            paths: JSON.stringify(paths.value)
        }).catch(err => {

        })
        if (res && res.data.success) {
            const { type } = useTypeHook()
            createActive({
                is_start: isStart,
                pk_id: res.data.data.id,
                type: type
            }).then(() => {
                message.success("创建成功")
            }).catch(() => {
                message.error("创建失败")
            })
        } else {
            message.error("创建失败")
        }
    }

    onMounted(() => {
        showPk()
    })

    return {
        pkModel,
        showPk,
        submit,
        paths
    }
}