import { getPai, getPaiFour, getPaiThree, getPaiTwo, updateFour, updateThree } from "@/api/paiming";
import { NButton, NInput, useModal } from "naive-ui";
import { h, onMounted, ref } from "vue";

export function useFuwuHook() {
    const table = ref([
        { name: "1111", score: 93 },
    ])

    for (let i = 0; i < 40; i++) {
        table.value.push({
            name: "adsad",
            // 整数
            score: Math.floor(Math.random() * 100)
        })
    }

    const modal = useModal()

    const one = ref([])

    const select = ref()

    function showModel(id, score) {
        select.value = score
        const m = modal.create({
            title: '修改分数',
            content: () => h(NInput, {
                value: select.value,
                "onUpdate:value": (val) => {
                    select.value = Number(val)
                },
                updateValueOnInput: true,

            }),
            preset: 'card',
            style: {
                width: '400px'
            },
            footer: () => h(NButton, {
                type: 'primary',
                onClick: () => {
                    updateFour(id, select.value).then(res => {
                        getPaiFour().then(res => {
                            if (res && res.data.success) {
                                one.value = res.data.data
                            }
                        })
                    });
                    m.destroy()
                }
            }, () => "提交")
        })
    }

    onMounted(() => {
        getPaiFour().then(res => {
            if (res && res.data.success) {
                one.value = res.data.data
            }
        })
    })




    return {
        table,
        one,
        showModel
    }
}