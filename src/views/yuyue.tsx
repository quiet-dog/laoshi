import { reactive, ref } from "vue";

export function useYuYueModalHook() {
    let yyShow = ref(false);
    const yyOpenModal = () => {
        console.log("openModal");

        yyShow.value = true;
        console.log(yyShow.value);
    }

    const yyCloseModal = () => {
        yyShow.value = false;
    }

    const selectOptions = reactive([
        {
            label: "机舱车间",
            value: "机舱车间"
        }, {
            label: "数控中心",
            value: "数控中心"
        }, {
            label: "仓段智能车间",
            value: "仓段智能车间"
        }, {
            label: "工艺研究所",
            value: "工艺研究所"
        }, {
            label: "工具车间",
            value: "工具车间"
        },
    ])

    return {
        yyShow,
        yyOpenModal,
        yyCloseModal,
        selectOptions
    }
}