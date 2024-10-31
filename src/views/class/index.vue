<script lang='ts' setup>
import { NButton, NCascader, NForm, NFormItem, NInput, NSelect, NUpload } from 'naive-ui';
import { useClassHook } from "."
import { ElTable, ElTableColumn } from 'element-plus';
const { formData, option, submit, table, deleteCl } = useClassHook()

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
            formData.value.path = data.data.path;
        }
    }
}
</script>

<template>
    <div>
        <NForm id="form" label-placement="left" style="width: 400px;">
            <NFormItem label="文件名字">
                <NInput v-model:value="formData.name" />
            </NFormItem>
            <NFormItem label="选择">
                <NCascader :options="option" :check-strategy="'child'" v-model:value="formData.pid" />
            </NFormItem>
            <NFormItem label="文件">
                <NUpload @finish="handleFinish" action="http://localhost:8040/api/v1/class/files">
                    <NButton>上传文件</NButton>
                </NUpload>
            </NFormItem>
        </NForm>

        <NButton @click="submit">提交</NButton>

        <ElTable :data="table">
            <ElTableColumn prop="id" label="id"></ElTableColumn>
            <ElTableColumn prop="name" label="文件名"></ElTableColumn>
            <ElTableColumn prop="path" label="路径"></ElTableColumn>
            <ElTableColumn prop="pid" label="父级"></ElTableColumn>
            <ElTableColumn>
                <template #default="scope">
                    <NButton @click="deleteCl(scope.row.id)">删除</NButton>
                </template>
            </ElTableColumn>
        </ElTable>

    </div>
</template>

<style scoped>
#form :deep(.n-form-item-label__text) {
    color: white
}
</style>
