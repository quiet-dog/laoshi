<script lang='ts' setup>
import { NButton, NForm, NFormItem, NInput, NRadio, NRadioGroup, NSpace } from 'naive-ui';
import { useQiandaoHook } from "."
import { onMounted } from 'vue';
const { qianDaoForm, submit, cancel } = useQiandaoHook();

defineEmits(['cancel'])

</script>

<template>
    <div>
        <NForm :model="qianDaoForm" label-placement="left">
            <NFormItem label="签到标题" path="title">
                <NInput v-model:value="qianDaoForm.title" />
            </NFormItem>
            <NFormItem label="是否自动结束" path="is_auto">
                <NRadioGroup v-model:value="qianDaoForm.is_auto">
                    <NSpace>
                        <NRadio label="是" :value="true" />
                        <NRadio label="否" :value="false" />
                    </NSpace>
                </NRadioGroup>
                <span>开启[自动签到],该签到在当天24点自动结束</span>
            </NFormItem>
            <NFormItem label="签到类型">
                <NRadioGroup v-model:value="qianDaoForm.type">
                    <NSpace>
                        <NRadio label="一键签到" :value="'一键签到'" />
                        <NRadio label="扫码签到" :value="'扫码签到'" />
                    </NSpace>
                </NRadioGroup>
            </NFormItem>
        </NForm>

        <div class="flex flex-row justify-center gap-4">
            <NButton strong secondary type="primary" size="small" @click="submit(false)">保存</NButton>
            <NButton strong secondary type="primary" size="small" @click="submit(true)">开始活动</NButton>
            <NButton strong secondary type="primary" size="small" @click="$emit('cancel')">取消</NButton>
        </div>
    </div>
</template>

<style scoped></style>
