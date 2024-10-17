<script lang='ts' setup>
import { h } from "vue";
import { useKejianHook } from ".";
import { NButton, NTree, TreeOption } from "naive-ui";
const { treeData } = useKejianHook();
function renderLabel(a: { option: TreeOption }) {
    // 是否有isEnd字段
    if (a.option.isEnd) {
        return h('div', {
            class: ["flex", "flex-row", "text-2xl"],
            style: {
                width: "100%"
            }
        }, [h("div", {
            class: ["bg-blue-400", "w-96"]
        }, a.option.label), h("div", { class: ["grow"] }), h(NButton, {
            type: "info",
            size: "small",
            class: ["text-2xl"],
            quaternary: true,
            onClick: () => {
                console.log("导入");
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
    </div>
</template>

<style scoped></style>
