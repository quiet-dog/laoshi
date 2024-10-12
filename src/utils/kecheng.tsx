import { NButton, useMessage, useModal } from "naive-ui";
import { createVNode, h, render, renderList } from "vue";
import sucaiBg from "@/assets/sucai/img1-CoMqH3MY.png"

export function useModalHook() {
    const modal = useModal();
    const message = useMessage();

    const showDialogPreset = () => {
        // const m = modal.create({
        //     title: 'Dialog 预设',
        //     preset: 'dialog',
        //     content: '内容'
        // })
        // message.info('三秒钟后关闭')
        // setTimeout(() => {
        //     m.destroy()
        // }, 3000)
    }



    const showCardPreset = (title: string = "虚拟人物素材") => {
        const m = modal.create({
            title: title,
            preset: 'card',
            style: {
                width: '800px'
            },
            content: h("div", { class: "flex flex-col" }, [
                h("div", {}, h("div", { class: "flex flex-row" }, [h("div", { class: "flex-1" }, "1"), h("div", { class: "flex-1" }, "2"), h("div", { class: "flex-1" }, "2")]),),
                h("div", {}, h("div", { class: "flex flex-row" }, [h("div", { class: "flex-1" }, "1"), h("div", { class: "flex-1" }, "2"), h("div", { class: "flex-1" }, "2")]),),

            ])
        })
    }
    return {
        showDialogPreset,
        showCardPreset
    }
}