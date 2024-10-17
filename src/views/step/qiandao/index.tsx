import { useRouter } from "vue-router";

export function useQianDaoIndexHook() {
    const router = useRouter();
    const changeTabs = (tab: string) => {
        router.push(tab)
    }

    return {
        changeTabs
    }
}