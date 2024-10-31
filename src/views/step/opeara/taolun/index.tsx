import { createActive } from "@/api/active";
import { createTaoLun } from "@/api/taolun";
import dayjs from "dayjs";
import { useMessage } from "naive-ui";
import { onMounted, ref } from "vue";
import { useTypeHook } from "../../qiandao/type_hook";

export function useTaoLunHook() {
    const taoLunForm = ref({
        title: "1",
        comment: "",
        time: "20",
        path: ""
    })

    const checkValue = ref(false)
    const paths = ref([])

    const message = useMessage()

    const submit = async (isStart: boolean) => {
        if (!checkValue.value) {
            message.error("请同意协议")
            return
        }

        const path = JSON.stringify(paths.value);
        taoLunForm.value.path = path;
        const res = await createTaoLun(taoLunForm.value).catch((err) => { })
        if (res && res.data.success) {
            const { type } = useTypeHook()
            createActive({
                tao_lun_id: res.data.data.id,
                is_start: isStart,
                type: type
            }).then(res => {
                message.success("创建成功")
            })
        } else {
            message.error("创建失败")
        }
    }

    const showTaoLun = () => {
        taoLunForm.value.title = dayjs().format("YYYY-MM-DD HH:mm:ss") + "的讨论"
    }

    onMounted(() => {
        showTaoLun()
    })

    return {
        taoLunForm,
        submit,
        showTaoLun,
        paths,
        checkValue
    }
}