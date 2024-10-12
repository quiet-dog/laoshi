<script lang='ts' setup>
import { FullScreenContainer as DvFullScreenContainer, Decoration5 as DvDecoration5 } from '@kjgl77/datav-vue3'

</script>

<template>
    <div class="header">
        <div class="header-bg">
            <span class="header-title">音乐旅行家</span>
        </div>
        <div class="header-zhuang">
            <div small-bg>
                <dv-decoration5 :dur="2" style="width:300px;height:20px;" />
            </div>
        </div>
    </div>
    <div class="main">
        <slot></slot>
    </div>
</template>

<style scoped>
.header {
    height: 90px;
}

.header-bg {
    margin-top: 10px;
    height: 80%;
    background: url("@/assets/未标题-3.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-zhuang {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main {
    height: calc(100vh - 90px);
    min-height: 1000px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    background-color: #000; */
}

.header-title {
    font-size: 36px;
    color: #fff;
    font-weight: 900;
    text-shadow: 0 0 10px #000;
}
</style>
