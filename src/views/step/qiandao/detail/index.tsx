import { getActivesById } from "@/api/active";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export function useDetailHook() {
    const list = ref([])

    const { id } = useRoute().params

    const info = ref({})

    const sign_logs = ref([])

    const init = ref(false)

    const search = ref("")

    const getDetailInfo = async () => {
        getActivesById(id).then(res => {
            if (res && res.data.success) {
                info.value = res.data.data
                sign_logs.value = info.value?.not_can_yu
                init.value = true
                if (info.value?.can_yu.length > 0) {
                    option.value.series[0].data[0].value = info.value?.can_yu.length
                }
            }
        }).catch(err => {

        }).finally(() => { })
    }

    const page = ref(1)

    const signTable = computed(() => {
        return sign_logs.value.slice((page.value - 1) * 8, page.value * 8)
    })

    const total = computed(() => {
        return sign_logs.value.length
    })

    const tabValue = ref("未参与学生")

    const searchName = () => {
        if (search.value != "" && tabValue.value == "未参与学生") {
            sign_logs.value = info.value?.not_can_yu.filter((item: any) => item.name.includes(search.value))
            return
        } else if (search.value != "" && tabValue.value == "已参与学生") {
            sign_logs.value = info.value?.can_yu.filter((item: any) => item.name.includes(search.value))
            return
        }

        if (search.value == "" && tabValue.value == "未参与学生") {
            sign_logs.value = info.value?.not_can_yu
            return
        }

        if (search.value == "" && tabValue.value == "已参与学生") {
            sign_logs.value = info.value?.can_yu
            return
        }

    }


    const option = ref({
        title: {
            text: '',
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                type: 'gauge',
                data: [{ name: 'itemA', value: 0 }],
                center: ['50%', '55%'],
                radius: '70%',
                min: 0, // 设置最小值
                max: 40, // 设置最大值
                axisLabel: {
                    formatter: '{value}',
                    color: '#fff'
                },
                axisTick: {
                    show: true,
                    length: 20,
                    splitNumber: 10,
                    lineStyle: {
                        color: '#fff',
                        width: 5,
                        opacity: 1
                    }
                },
                spliteLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        color: '#fff',
                        wdith: 5,
                        opacity: 1
                    }
                },
                pointer: {
                    length: '70%', // 指针长度
                    width: 8 // 指针宽度
                },
                animationCurve: 'easeInOutBack'
            }
        ]
    })

    onMounted(async () => {
        await getDetailInfo()
    })



    return {
        getDetailInfo,
        info,
        sign_logs,
        signTable,
        page,
        total,
        search,
        searchName,
        tabValue,
        option,
    }
}