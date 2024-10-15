import { ref } from "vue";

export function useKejianHook() {
    const treeData = ref([
        {
            label: "项目一: 140火箭架数字化制造",
            key: "项目一: 140火箭架数字化制造",
            children: [
                {
                    label: "任务1: 140火箭架数字化工艺设计",
                    key: "任务1: 140火箭架数字化工艺设计",
                    children: [
                        { label: "PPT1或PDF1", key: "PPT1或PDF1", isEnd: true },
                        { label: "PPT2或PDF2", key: "PPT2或PDF2", isEnd: true },
                    ]
                },
            ]
        },
        {
            label: "项目二: 480火箭架数字化制造",
            key: "项目二: 480火箭架数字化制造",
            children: [
                {
                    label: "任务2: 480火箭架数字化工艺设计",
                    key: "任务2: 480火箭架数字化工艺设计",
                    children: [
                        { label: "PPT1或PDF1", key: "PPT1或PDF1", isEnd: true },
                        { label: "PPT2或PDF2", key: "PPT2或PDF2", isEnd: true },
                    ]
                },
            ]
        },
        {
            label: "项目二: 480火箭架数字化制造",
            key: "项目二: 480火箭架数字化制造",
            children: [
                {
                    label: "任务2: 480火箭架数字化工艺设计",
                    key: "任务2: 480火箭架数字化工艺设计",
                    children: [
                        { label: "PPT1或PDF1", key: "PPT1或PDF1", isEnd: true },
                        { label: "PPT2或PDF2", key: "PPT2或PDF2", isEnd: true },
                    ]
                },
            ]
        }
    ])

    return {
        treeData
    }
}