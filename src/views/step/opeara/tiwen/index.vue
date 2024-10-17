<script lang='ts' setup>
import { NButton, NForm, NFormItem, NInput, NRadioGroup, NSpace, NRadio } from 'naive-ui';

</script>

<template>
    <div>
        <NForm label-placement="left">
            <NFormItem label="提问标题" path="tiwen">
                <NInput />
            </NFormItem>
            <NFormItem label="提问内容" path="tiwen">
                <NInput type="textarea" />
            </NFormItem>
            <NFormItem
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                <NButton ghost>引入题目</NButton>
            </NFormItem>
            <NFormItem label="选择是否过滤未签到学生:">
                <NRadioGroup>
                    <NSpace>
                        <NRadio :value="true">是</NRadio>
                        <NRadio :value="false">否</NRadio>
                    </NSpace>
                </NRadioGroup>
            </NFormItem>
            <NFormItem label="活动类型:">
                <NRadioGroup>
                    <NSpace>
                        <NRadio :value="1">随机提问(摇一摇)</NRadio>
                        <NRadio :value="2">点名提问</NRadio>
                        <NRadio :value="3">抢答</NRadio>
                    </NSpace>
                </NRadioGroup>
            </NFormItem>
            <div class="flex flex-row justify-center gap-4">
                <NButton strong secondary type="primary" size="small">保存</NButton>
                <NButton strong secondary type="primary" size="small">开始活动</NButton>
                <NButton strong secondary type="primary" size="small">取消</NButton>
            </div>
        </NForm>
    </div>
</template>

<style scoped></style>
