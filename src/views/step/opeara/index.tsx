import { ref } from "vue";

export function useQiandaoHook() {
    let qianDaoForm = ref({
        title: "",
        isAuto: false,
        type: "扫码签到",
    })

    const title = ref("")

    const detailInfo = ref("")

    const type = ref(0)

    let qianDaoShow = ref(false)

    function showQianDao() {
        qianDaoShow.value = true
    }

    function hideQianDao() {
        qianDaoShow.value = false
    }

    function openModal(t: number) {
        switch (t) {
            case 0: {
                title.value = "导入课件"
                detailInfo.value = `
                <p>导入课件</p>
                <p class="mt-2">一键导入.实时同步.关联课程设计</p>
                <p class="mt-2">教师先在课程下进行课程设计，再导入课件至课堂教学中。</p>
                <p class="mt-2">如果该课程下没有课件，请到课程设计中进行课程设计，已关闭的课件无法进行引入</p>
                `
                break
            }
            case 1: {
                title.value = "导入课件"
                detailInfo.value = `
                <p>导入课件</p>
                <p>一键导入.实时同步.关联课程设计</p>
                <p>教师先在课程下进行课程设计，再导入课件至课堂教学中。</p>
                <p>如果该课程下没有课件，请到课程设计中进行课程设计，已关闭的课件无法进行引入</p>
                `
                break
            }
            case 2: {
                title.value = "新建签到"
                detailInfo.value = `
                <p>动态展示.形式多样.实时统计.数据分析</p>
                <p class="mt-2" > *一键签到：学生可在网页端和移动端进行参与，进入活动即算签到成功，适用于教师希望快速完成签到的场景。 </p>
                <p class="mt-2" > *扫码签到：学生只能在移动端参与，进入活动后需要扫描签到二维码，教师可实时刷新二维码，掌控签到的节奏结束后可查看数据分析。 </p>
                `
                break
            }
            case 3: {
                title.value = "新建提问"
                detailInfo.value = `
                <p>多种形式.即时评分.实时统计</p>
                <p class="mt-2" >随机提问：在班级内随机选人。</p>
                <p class="mt-2" >点名提问：教师手动选人。</p>
                <p class="mt-2" >抢答：可限制人数，学生自主抢答</p>
                `
                break
            }
            case 4: {
                title.value = "新建讨论"
                detailInfo.value = `
                <p>开放式交流.盖楼互评.点赞鼓励.实时统计。</p>
                <p class="mt-2" >开放式教学，学生可以任意、多次发表讨论内容并对其他人的评论进行回复、点赞，利于同学们交流探讨。</p>
                <p class="mt-2" >讨论过程中动态展示数据，实时统计参与率及获赞最高的精选内容，支持教师单个或结束讨论后批量打分。</p>
                `
                break
            }
            case 5: {
                title.value = "新建测验"
                detailInfo.value = `
                <p>一键调取.实时发布.便捷作答。</p>
                <p class="mt-2" >测验直接调取题库中的客观题，进行发布。</p>
                <p class="mt-2" >教师需要先在题库中建设题目，学生作答后，由系统自动批阅。</p>
                `
                break
            }
            case 7: {
                title.value = "新建小组PK"
                detailInfo.value = `
                <p>一键分组.自由加入</p>
                <p class="mt-2" > 小组PK支持一键随机分组和学生自由加入小组两种形式，分组后线下开展活动，线上打分 </p>
                `
                break
            }
        }
        type.value = t
        showQianDao()
    }

    return {
        qianDaoForm,
        qianDaoShow,
        showQianDao,
        hideQianDao,
        type,
        openModal,
        title,
        detailInfo
    }
}