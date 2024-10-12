<script setup lang="ts">
import { NModalProvider, NDialogProvider, NMessageProvider, NNotificationProvider } from "naive-ui"

</script>

<template>
    <NMessageProvider>
        <NNotificationProvider>
            <NModalProvider>
                <NDialogProvider>
                    <RouterView />
                </NDialogProvider>
            </NModalProvider>
        </NNotificationProvider>
    </NMessageProvider>
</template>

<style scoped></style>
