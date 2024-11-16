<script setup lang="ts">
import axios from "axios";
import { darkTheme } from 'naive-ui'
import { NModalProvider, NDialogProvider, NMessageProvider, NNotificationProvider, NConfigProvider } from "naive-ui"

darkTheme.common.textColorBase = '#fff'
</script>

<template>
    <NConfigProvider :theme="darkTheme">
        <NMessageProvider>
            <NNotificationProvider>
                <NModalProvider>
                    <NDialogProvider>
                        <RouterView />
                    </NDialogProvider>
                </NModalProvider>
            </NNotificationProvider>
        </NMessageProvider>
    </NConfigProvider>
</template>

<style scoped></style>
