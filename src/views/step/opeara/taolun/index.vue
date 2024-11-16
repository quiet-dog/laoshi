<script lang='ts' setup>
import { NButton, NCheckbox, NForm, NFormItem, NInput, NUpload, UploadFileInfo } from 'naive-ui';
import { useTaoLunHook } from "."
const { submit, taoLunForm, paths, checkValue } = useTaoLunHook();
import { baseURL } from "@/utils/http";
defineEmits(["cancel"])

function handleFinish({
    file,
    event
}: {
    file: UploadFileInfo
    event?: ProgressEvent
}) {
    if (event?.target.response) {
        let data = JSON.parse(event?.target.response)
        if (data.success) {
            paths.value.push(data.data.id);
        }
    }
}


function handleRemove(options: { file: UploadFileInfo, fileList: Array<UploadFileInfo>, index: number }) {
    paths.value.splice(options.index, 1);
}
</script>

<template>
    <div>
        <NForm label-placement="left" :model="taoLunForm">
            <NFormItem label="讨论标题">
                <NInput v-model:value="taoLunForm.title" />
            </NFormItem>
            <NFormItem label="讨论内容">
                <NInput type="textarea" v-model:value="taoLunForm.comment" />
            </NFormItem>
            <NFormItem label="讨论时长">
                <NInput v-model:value="taoLunForm.time" />
            </NFormItem>
            <NFormItem
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                <NUpload :action="baseURL + 'api/v1/class/files'" @remove="handleRemove" @finish="handleFinish">
                    <NButton>上传文件</NButton>
                </NUpload>
            </NFormItem>
            <NFormItem
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                <NCheckbox v-model:checked="checkValue">我已阅读并同意
                    <NButton text type="info">上传须知</NButton>
                </NCheckbox>
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
