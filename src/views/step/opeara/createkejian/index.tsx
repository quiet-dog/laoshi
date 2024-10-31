import { createActive } from "@/api/active";
import { createSign } from "@/api/sign";
import dayjs from "dayjs";
import { useMessage } from "naive-ui";
import { onDeactivated, onMounted, ref } from "vue";
import { useTypeHook } from "../../qiandao/type_hook";

export function useQiandaoHook() {

    let qianDaoForm = ref({
        title: "",
        is_auto: false,
        type: "扫码签到",
    })


    const message = useMessage()

    const type = ref(0)

    let qianDaoShow = ref(false)

    function showQianDao() {
        qianDaoForm.value.title = dayjs().format("YYYY-MM-DD HH:mm:ss") + "的签到"
        qianDaoShow.value = true
    }

    function hideQianDao() {
        qianDaoShow.value = false
    }

    async function submit(isStart: boolean) {
        const res = await createSign(qianDaoForm.value).catch(err => {
            console.log("err", err)
        }).finally(() => {

        })
        if (res && res.data.success) {
            const { type } = useTypeHook()
            createActive({
                sign_id: res.data.data.id,
                is_start: isStart,
                type: type
            }).then(() => {
                message.success("创建成功")
            }).catch(() => {
                message.error("创建失败")
            }).finally(() => {
                hideQianDao()
            })

        } else {
            message.error("创建失败")
        }

    }

    function cancel() {

    }

    onMounted(() => {
        showQianDao()
    })

    onDeactivated(() => {
        hideQianDao()
    })

    return {
        qianDaoForm,
        qianDaoShow,
        showQianDao,
        hideQianDao,
        type,
        submit,
        cancel,
    }
}