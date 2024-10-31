import router from "@/router";
import { useLoginPinaHook } from "@/utils/login";
import { reactive, ref } from "vue";

export function useLoginHook() {
    const classOpt = reactive([
        { label: "数学", value: "数学" },
        { label: "语文", value: "语文" },
    ])

    const banjiOpt = reactive([
        { label: "一班", value: "一班" },
        { label: "二班", value: "二班" },
    ])

    const xiangmuOpt = reactive([
        { label: "作业", value: "作业" },
        { label: "考试", value: "考试" },
    ])

    const classValue = ref("数学")
    const banjiValue = ref("一班")
    const xiangmuValue = ref("作业")


    const submit = () => {
        const loginHook = useLoginPinaHook()
        loginHook.classValue = classValue.value
        loginHook.banjiValue = banjiValue.value
        loginHook.xiangmuValue = xiangmuValue.value
        router.push("/home")
    }

    return {
        classOpt,
        banjiOpt,
        xiangmuOpt, classValue
        , banjiValue
        , xiangmuValue,
        submit
    }
}