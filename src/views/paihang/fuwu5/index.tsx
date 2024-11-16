import { getPai, getPaiFive, getPaiThree, getPaiTwo, updateFive, updateThree } from "@/api/paiming";
import { NButton, NInput, useModal } from "naive-ui";
import { h, onMounted, ref } from "vue";
import { useIntervalFn } from "@vueuse/core";

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
                    updateFive(id, select.value).then(res => {
                        getPaiFive().then(res => {
                            console.log(res)
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
        getPaiFive().then(res => {
            console.log(res)
            if (res && res.data.success) {
                one.value = res.data.data
            }
        })
    })


    const scorll = ref();

    const { pause, resume, isActive } = useIntervalFn(() => {
        // 慢慢滚动
        scorll.value.scrollTop += 1;
        // 如果到底了，就回到顶部
        if (scorll.value.scrollTop >= scorll.value.scrollHeight - scorll.value.clientHeight) {
            scorll.value.scrollTop = 0;
        }

    }, 10)

    const mouseEnter = () => {
        pause()
    }
    const mouseLeave = () => {
        resume()
    }




    return {
        table,
        one,
        showModel,
        scorll,
        mouseEnter,
        mouseLeave
    }
}