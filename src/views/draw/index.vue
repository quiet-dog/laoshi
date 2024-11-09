<script lang='ts' setup>
import { useDrawHook } from ".";
import LayoutIndex from '@/layout/index.vue' // Adjusted path if the file is in the parent directory
import { NCard,NScrollbar } from 'naive-ui'

const { userList } = useDrawHook();
</script>

<template>
  <LayoutIndex>
    <NScrollbar  style="max-height: 1200px;">
      <div class="flex flex-wrap gap-x-12 gap-y-12 px-12" >
        <template v-for="item in userList" >
          <NCard style="width:150px;--n-color:unset" v-if="!item?.is_teacher" >
          <template #cover>
             <img style="width:200px"  :src="'http://127.0.0.1:8040/'+item.avatar" />
          </template>
          <div class="text-2xl pt-4" style="text-align:center;color: #22f2ff" >{{item.name}}</div>
        </NCard>   
        </template>
        </div>
      </NScrollbar>
    
  </LayoutIndex>

</template>

<style scoped>

</style>
