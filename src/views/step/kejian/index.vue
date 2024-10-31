<script lang='ts' setup>
import { NButton, NModal, NTree, TreeOption } from 'naive-ui';
import { useKejianHook } from "./index";
import { h } from 'vue';
const { treeData, show } = useKejianHook();


function renderLabel(a: { option: TreeOption }) {
    // 是否有isEnd字段
    if (a.option.pid != "" && a.option.children == null) {
        return h('div', {
            class: ["flex", "flex-row", "text-2xl"],
            style: {
                width: "700px"
            }
        }, [h("div", {
            style: {
                width: "500px"
            },
            class: ["bg-blue-400"]
        }, a.option.label), h("div", { class: ["grow"] }), h(NButton, {
            type: "info",
            size: "small",
            class: ["text-2xl"],
            quaternary: true,
            onClick: () => {
                // console.log("导入");
                show.value = true
            }
        }, "查看")]);
    }
    return h('span', {
        class: ["text-2xl"],
    }, a.option.label);
}

function renderSwitcherIcon() {
    return h("span")
}

</script>

<template>
    <div class="h-full w-full flex flex-col">
        <div class="grid grid-cols-6">
            <div>项目1</div>
            <div>课后拓学</div>
            <div>课中产学</div>
            <div>课后拓学</div>
            <div>按创建时间排序</div>
            <div>课件</div>
        </div>
        <div>1</div>
        <div class="grid grid-cols-3 h-full">
            <div class="px-2">
                <h1 class="text-2xl">导入课件</h1>
                <div>
                    dasfafnkabgkajbgkabgkabgkjabgkjasbkgbakjbs
                    kbgakjbgkajbgkagbdasfafnkabgkajbgkabgkabgkjabgkjasbkgbakjbs
                    kbgakjbgkajbgkagbdasfafnkabgkajbgkabgkabgkjabgkjasbkgbakjbs
                    kbgakjbgkajbgkagbdasfafnkabgkajbgkabgkabgkjabgkjasbkgbakjbs kbgakjbgkajbgkagb
                </div>
            </div>
            <div class="col-span-2" style="background-color: red;">
                <NTree :render-switcher-icon="renderSwitcherIcon" :data="treeData" :default-expand-all="true"
                    :render-label="renderLabel" />
            </div>
        </div>
        <NModal v-model:show="show">
            asdasda
        </NModal>
    </div>
</template>

<style scoped></style>
