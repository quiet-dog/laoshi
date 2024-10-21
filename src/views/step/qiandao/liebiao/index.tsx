import { deleteActive, editActive, getActives } from "@/api/active";
import { useNetwork } from "@vueuse/core";
import { useDialog, useMessage } from "naive-ui";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

type Active = {
    id: string
    sign_id: string
    is_start: boolean
    is_end: boolean
    created_at: string
    updated_at: string
    sign_model: Sign | null
    pk_model: Pk | null
    tao_lun_model: TaoLun | null
}

type Sign = {
    id: string
    title: string
    is_auto: boolean
    type: string
    created_at: string
    updated_at: string
}

type Pk = {
    id: string
    title: string
    count: number
    created_at: string
    updated_at: string
}

type TaoLun = {
    id: string
    title: string
    path: string
    created_at: string
    updated_at: string
}

export function useQianDaoHook() {
    let list = ref<Active[]>([])
    const dialog = useDialog()
    const message = useMessage()
    const showQr = ref(false)
    const showUrl = ref("")
    const router = useRouter()

    const getTableList = () => {
        getActives().then(res => {
            console.log("res", res)
            if (res.data.success) {
                list.value = res.data.data
            }
        })
    }

    const deleteA = (id: string) => {
        dialog.warning({
            title: "系统提示",
            content: "确定删除吗？",
            positiveText: '确认',
            onPositiveClick: () => {
                deleteActive(id).then(res => {
                    getTableList()
                })
            }
        })
    }


    const startActive = (id: string, data) => {
        editActive(id, { ...data, is_start: true }).then(res => {
            getTableList()
            message.success("操作成功")
        }).catch(err => {
            message.error("操作失败")
        })
    }

    const endActive = (id: string, data) => {
        editActive(id, { ...data, is_end: true }).then(res => {
            getTableList()
            message.success("操作成功")
        }).catch(err => {
            message.error("操作失败")
        })
    }

    const showQrCode = (id: string) => {
        showQr.value = true
        showUrl.value = "http://192.168.1.141:5173" + "/#/step/qiandao/kezhong"
    }

    const goRouter = (item) => {
        if (item.pk_model != null) {
            router.push(`/step/qiandao/detailpk/${item.id}`)
        } else {
            router.push(`/step/qiandao/detail/${item.id}`)
        }
    }

    onMounted(() => {
        getTableList()
    })

    return {
        list,
        getTableList,
        deleteA,
        startActive,
        endActive,
        showQr,
        showQrCode,
        showUrl,
        goRouter
    }
}