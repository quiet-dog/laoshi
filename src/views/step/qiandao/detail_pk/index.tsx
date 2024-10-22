import { getActivesById } from "@/api/active";
import { getGroupListApi } from "@/api/employ";
import { getScoreApi, setScoreApi } from "@/api/score";
import { useMessage } from "naive-ui";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

export function useDetailHook() {
    const list = ref([])

    const { id } = useRoute().params

    const info = ref({})

    const show = ref(false)

    const scoreList = ref([])

    const message = useMessage()


    const group = reactive([
        { label: "红箭组", value: 1 },
        { label: "血型组", value: 2 },
        { label: "信仰组", value: 3 },
        { label: "冲锋组", value: 4 },
        { label: "奋斗组", value: 5 },
        { label: "军魂组", value: 6 },
        { label: "忠诚组", value: 7 },
        { label: "铁技组", value: 8 },
    ])

    const colums = reactive([
        {
            title: '序号',
            render: (row: any, index: number) => {
                return index + 1
            }
        },
        {
            title: '学号',
            key: 'username',
        },
        {
            title: '姓名',
            key: 'name',
        },
    ])

    const groupList = ref([])

    const getDetailInfo = () => {
        getActivesById(id).then(res => {
            if (res && res.data.success) {
                info.value = res.data.data
            }
            console.log("info.value", info.value)
        }).catch(err => {

        }).finally(() => { })
    }

    const nowLabel = ref("火箭组")
    const getGroupList = (val: number) => {
        getGroupListApi(val).then(res => {
            if (res && res.data.success) {
                groupList.value = res.data.data
                console.log("groupList.value", groupList.value)
                openModal()
            }
            nowLabel.value = group.find(item => item.value === val)?.label || "火箭组"
        }).catch(err => {
        })
    }

    const openModal = () => {
        show.value = true
    }

    const cloenModal = () => {
        show.value = false
    }

    const getScore = () => {

        getScoreApi(id).then(res => {
            if (res && res.data.success) {
                scoreList.value = res.data.data
            }
        })
    }


    const setScore = (groupId: number, score) => {
        setScoreApi({
            active_id: id,
            group_id: groupId,
            score: String(score)
        }).then(res => {
            getScore()
            message.success("打分成功")
        }).catch((err) => {
            message.error("打分失败")
        })
    }

    onMounted(() => {
        getDetailInfo()
        getScore()
    })

    return {
        getDetailInfo,
        info,
        group,
        getGroupList,
        show,
        openModal,
        cloenModal,
        colums,
        nowLabel,
        groupList,
        scoreList,
        setScore
    }
}