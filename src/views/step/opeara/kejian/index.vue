<script lang='ts' setup>
import { h } from "vue";
import { useKejianHook } from ".";
import { NButton, NCard, NModal, NTree, TreeOption } from "naive-ui";
const { treeData, show, fileUrl } = useKejianHook();
function renderLabel(a: { option: TreeOption }) {
    // 是否有isEnd字段
    if (a.option.pid != "" && a.option.children == null) {
        return h('div', {
            class: ["flex", "flex-row", "text-2xl"],
            style: {
                width: "100%"
            }
        }, [h("div", {
            class: ["bg-gray-400", "w-96"]
        }, a.option.label), h("div", { class: ["grow"] }), h(NButton, {
            type: "info",
            size: "small",
            class: ["text-2xl"],
            quaternary: true,
            onClick: () => {
                // console.log("导入");
                fileUrl.value = "http://127.0.0.1:8040/" + a.option.path;
                show.value = true;
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
    <div class="w-full" style="height: 600px;">
        <NTree :render-switcher-icon="renderSwitcherIcon" :data="treeData" :default-expand-all="true"
            :render-label="renderLabel" />

        <NModal v-model:show="show">
            <NCard style="width: 1200px;align-items: center">
                <iframe width=" 1200px" height="900px" :src="fileUrl" frameborder="0"></iframe>
            </NCard>
        </NModal>

    </div>
</template>

<style scoped></style>
