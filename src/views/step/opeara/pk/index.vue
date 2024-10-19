<script lang='ts' setup>
import { NButton, NForm, NFormItem, NInput, NInputNumber } from 'naive-ui';
import { usePkHook } from "."
const { pkModel, submit } = usePkHook();

defineEmits(['cancel'])
</script>

<template>
    <div class="w-full">
        <NForm label-placement="left" :model="pkModel">
            <NFormItem label="小组PK标题:" path="title">
                <NInput v-model:value="pkModel.title" />
            </NFormItem>
            <NFormItem label="小组数量:" path="count">
                <NInputNumber v-model:value="pkModel.count" />
            </NFormItem>
            <div class="flex flex-row justify-center gap-4">
                <NButton strong secondary type="primary" size="small" @click="submit(false)">保存</NButton>
                <NButton strong secondary type="primary" size="small" @click="submit(true)">开始活动</NButton>
                <NButton strong secondary type="primary" size="small" @click="$emit('cancel')">取消</NButton>
            </div>
        </NForm>
    </div>
</template>

<style scoped></style>
