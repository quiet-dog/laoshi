import { SelectMixedOption } from "naive-ui/es/select/src/interface";
import { reactive } from "vue";

export function useCeYanHook() {



    let selectOpt = reactive([])
    for (let i = 1; i <= 11; i++) {
        if (i === 11) {
            selectOpt.push({
                label: "不限次数",
                value: i,
            } as never)
            break
        }
        selectOpt.push({
            label: i,
            value: i,
        } as never)
    }

    return {
        selectOpt
    }
}