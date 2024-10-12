<script lang='ts' setup>
import { NModal, NCard } from 'naive-ui';
import { useKechengModalHook } from "./index";
const { show } = useKechengModalHook();
</script>

<template>
    <NModal v-model:show="show">
        <NCard>
            <template #header-extra>
                噢！
            </template>
            <div class="grid grid-col-3">
                <div>
                    1
                </div>
                <div>
                    1
                </div>
                <div>
                    1
                </div>
                <div>
                    1
                </div>
            </div>

            <template #footer>
                尾部
            </template>
        </NCard>
    </NModal>
</template>

<style scoped></style>
