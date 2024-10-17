<script lang='ts' setup>
import { NButton, NForm, NFormItem, NInput, NRadio, NRadioGroup, NSpace } from 'naive-ui';
import { useQiandaoHook } from "."
const { qianDaoForm } = useQiandaoHook();
</script>

<template>
    <div>
        <NForm :model="qianDaoForm" label-placement="left">
            <NFormItem label="签到标题" path="title">
                <NInput v-model:value="qianDaoForm.title" />
            </NFormItem>
            <NFormItem label="是否自动结束" path="isAuto">
                <NRadioGroup v-model:value="qianDaoForm.isAuto">
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
                        <NRadio label="是" :value="'扫码签到'" />
                    </NSpace>
                </NRadioGroup>
            </NFormItem>
        </NForm>

        <div class="flex flex-row justify-center gap-4">
            <NButton strong secondary type="primary" size="small">保存</NButton>
            <NButton strong secondary type="primary" size="small">开始活动</NButton>
            <NButton strong secondary type="primary" size="small">取消</NButton>
        </div>
    </div>
</template>

<style scoped></style>
