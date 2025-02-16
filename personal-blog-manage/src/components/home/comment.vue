<template>
    <el-card class="comments" style="max-width: 480px">
        <template #header>
          <div class="card-header">
            <span style="font-weight: bolder;">{{`评论 ${totalComment}`}}</span>
          </div>
        </template>
        <template v-for="item in commentList" :key="item.id">
            <commentItem :commentData="item"></commentItem>
        </template>
        <template #footer>
            <div class="card-footer">
                <el-pagination
                size="small"
                background
                layout="prev, pager, next"
                :total="50"
                class="mt-4"
             />
            </div>
        </template>
    </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import commentItem from './commentItem.vue';
let totalComment=ref<number>(1234)
let commentList=reactive([{
    id:'sdkfjl',
    avatarUrl:'sdfsd',
    userName:'sldfja',
    moment:'2004-08-25-11:20:22',
    content:'sdflsdjkf',
    source:'sdfjlk',
    // 举报次数
    count:'02',
},{
    id:'sdkfjl',
    avatarUrl:'sdfsd',
    userName:'sldfja',
    moment:'2004-0825-11:20',
    content:'sdflsdjkf',
    source:'sdfjlk',
    // 举报次数
    count:'02',
}])
</script>

<style scoped lang="less">
 .comments{
            background-color: white;
            width: 100%;
            height: 100%;
            padding-left: 10px;
            padding:5px;
            border-radius: 8px;
            flex:1;
        }
</style>