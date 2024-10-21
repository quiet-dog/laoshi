<script lang='ts' setup>
import { NButton, NForm, NFormItem, NInput, NInputNumber, NUpload, UploadFileInfo } from 'naive-ui';
import { usePkHook } from "."
const { pkModel, submit, paths } = usePkHook();

defineEmits(['cancel'])

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
    <div class="w-full">
        <NForm label-placement="left" :model="pkModel">
            <NFormItem label="小组PK标题:" path="title">
                <NInput v-model:value="pkModel.title" />
            </NFormItem>
            <NFormItem label="小组数量:" path="count">
                <NInputNumber v-model:value="pkModel.count" />
            </NFormItem>
            <NFormItem
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                <NUpload action="http://localhost:8040/api/v1/class/files" @remove="handleRemove"
                    @finish="handleFinish">
                    <NButton>上传文件</NButton>
                </NUpload>
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
