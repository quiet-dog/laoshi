<script lang='ts' setup>
import { NButton, NCheckbox, NForm, NFormItem, NInput, NUpload } from 'naive-ui';

</script>

<template>
    <div>
        <NForm label-placement="left">
            <NFormItem label="讨论标题">
                <NInput />
            </NFormItem>
            <NFormItem label="讨论内容">
                <NInput type="textarea" />
            </NFormItem>
            <NFormItem label="讨论时长">
                <NInput />
            </NFormItem>
            <NFormItem
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                <NUpload>
                    <NButton>上传文件</NButton>
                </NUpload>
            </NFormItem>
            <NFormItem
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                <NCheckbox>我已阅读并同意
                    <NButton text type="info">上传须知</NButton>
                </NCheckbox>
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
