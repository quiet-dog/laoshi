import { watch } from "fs";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export function useQianDaoIndexHook() {
    const router = useRouter();
    const route = useRoute();
    const changeTabs = (tab: string) => {
        router.push(tab)
    }

    const tabValue = computed(() => {
        if (route.path.includes("/step/qiandao/keqian")) {
            return "/step/qiandao/keqian"
        }
        if (route.path.includes("/step/qiandao/kehou")) {
            return "/step/qiandao/kehou"
        }
        return "/step/qiandao/kezhong"
    })

    const optinons = [
        {
            value: '1',
            label: '140火箭架数字化制造'
        },
        {
            value: '2',
            label: '480制导弹头数字化制造'
        },
        {
            value: '3',
            label: 'PHL03式远程火箭炮数字化制造'
        },
        {
            value: "4",
            label: "发射车数字化制造"
        }
    ]

    const typeValue = ref("1")
    const changeValue = (val: string) => {
        typeValue.value = val
    }




    return {
        changeTabs,
        tabValue,
        optinons,
        changeValue,
        typeValue
    }
}