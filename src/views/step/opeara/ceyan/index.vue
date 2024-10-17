<script lang='ts' setup>
import { NButton, NCheckbox, NForm, NFormItem, NInput, NRadio, NRadioGroup, NSelect, NSpace, NUpload } from 'naive-ui';
import { useCeYanHook } from "."
const { selectOpt } = useCeYanHook()
</script>

<template>
    <div>
        <NForm label-placement="left">
            <NFormItem label="测验名称">
                <NInput />
            </NFormItem>
            <NFormItem label="出题方式">
                <NRadioGroup>
                    <NSpace>
                        <NRadio value="手动出题">手动出题</NRadio>
                        <NRadio value="随机出题">随机出题</NRadio>
                    </NSpace>
                </NRadioGroup>
            </NFormItem>
            <NFormItem label="作答次数">
                <NSelect :options="selectOpt" />
            </NFormItem>
            <NFormItem label="题目乱序">
                <NRadioGroup>
                    <NSpace>
                        <NRadio :value="true">是</NRadio>
                        <NRadio :value="false">否</NRadio>
                    </NSpace>
                </NRadioGroup>
            </NFormItem>
            <NFormItem label="选项乱序">
                <NRadioGroup>
                    <NSpace>
                        <NRadio :value="true">是</NRadio>
                        <NRadio :value="false">否</NRadio>
                    </NSpace>
                </NRadioGroup>
            </NFormItem>

            <NFormItem
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                <NCheckbox>我已阅读并同意
                    <NButton text type="info">上传须知</NButton>
                </NCheckbox>
            </NFormItem>

        </NForm>
    </div>
</template>

<style scoped></style>
