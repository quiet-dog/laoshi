import { ref } from "vue";

export function useNengliHook() {
    const table = ref([{
        project: "组织协调能力",
        score: "3.3",
        paiming: 60
    }, {
        project: "岗位胜任力",
        score: "100",
        paiming: 1
    }, {
        project: "职业素养测评",
        score: "1",
        paiming: 1
    }, {
        project: "学科竞赛",
        score: "0.5",
        paiming: 1
    }, {
        project: "创新创业比赛",
        score: "0.5",
        paiming: 1
    }, {
        project: "作品创新挑战",
        score: "1",
        paiming: 1
    }])


    return {
        table
    }

}