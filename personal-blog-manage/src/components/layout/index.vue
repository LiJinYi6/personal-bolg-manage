<template>
    <div class="layoutContainer">
        <div class="top">
            <Top @transe-drawer="handleTranse"></Top>
        </div>
        <div class="bottom">
            <router-view></router-view>
        </div>
        <el-drawer size="27%" v-model="drawer" title="私信" direction="rtl" @close="handleClose">
            <template #default>
                <div v-for="item in messageList" :key="item.id">
                    <messageItem :messageData="item"></messageItem>
                </div>
            </template>
            <template #footer>
                <div class="card-footer">
                    <el-pagination size="small" background layout="prev, pager, next" :total="50" class="mt-4" />
                </div>
            </template>
        </el-drawer>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Top from './top.vue'
import messageItem from './messageItem.vue';
let messageList=reactive([{
    id:'sdkfjl',
    user:'sldfja',
    moment:'2004-08-25-11:20:22',
    content:'sdflsdjkf',
},{
    id:'sdkfj4l',
    user:'sldfja',
    moment:'2004-0825-11:20',
    content:'sdflsdjkf',
}])
let handleTranse = (data: boolean) => {
    drawer.value = data
}
let drawer = ref<boolean>(false)
const handleClose = () => {
    drawer.value = false
}
</script>

<style scoped lang="less">
.layoutContainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .bottom {
        margin-top: 64px;
        height: calc(100% - 64px);
    }
}
</style>