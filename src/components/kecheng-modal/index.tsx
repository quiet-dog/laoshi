import { ref } from "vue";

export function useKechengModalHook() {
    let show = ref(false);
    const openModal = () => {
        console.log("openModal");

        show.value = true;
        console.log(show.value);
    }

    const closeModal = () => {
        show.value = false;
    }
    return {
        show,
        openModal,
        closeModal
    }
}