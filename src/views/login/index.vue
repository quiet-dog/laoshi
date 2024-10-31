<script lang='ts' setup>
import { NButton, NForm, NFormItem, NSelect } from 'naive-ui';
import headerBg from "@/assets/login/title-483a095b.png";
import { useLoginHook } from '.';
const { classOpt, banjiOpt, xiangmuOpt, classValue, banjiValue, xiangmuValue, submit } = useLoginHook();

</script>

<template>
    <div id="login">
        <div style="position: relative;">
            <img :src="headerBg" alt="" srcset="">
            <div style="position: relative; left: 1100px;color: white;top: -100px;font-size: 60px;">登录系统</div>

        </div>
        <NForm style="width: 400px;" class="px-12 mx-auto">
            <h1>登录</h1>
            <NFormItem label="">
                <NSelect v-model:value="classValue" :options="classOpt" />
            </NFormItem>
            <NFormItem label="">
                <NSelect v-model:value="banjiValue" :options="banjiOpt" />
            </NFormItem>
            <NFormItem label="">
                <NSelect v-model:value="xiangmuValue" :options="xiangmuOpt" />
            </NFormItem>
            <NButton @click="submit">登陆</NButton>
        </NForm>
    </div>
</template>

<style scoped>
#login {
    background-image: url('@/assets/login/img-fee76815.png');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
