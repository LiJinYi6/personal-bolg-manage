<template>
    <div class="itemContainer" @mouseenter="hoverHandle" @mouseleave="hoverHandle">
            <div class="img">
                <el-avatar circle>
                </el-avatar>
            </div>
            <div class="main">
                <div>
                    <el-space :size="150">
                        <span class="username">{{ props.commentData.userName }}</span>
                         <span><el-button v-show="isButtonVisible" style="border:none" :icon="Delete"></el-button></span>
                    </el-space>
                </div>
                <div class="moment">{{ props.commentData.moment }}</div>
                <div class="content">{{ props.commentData.content }}</div>
                <div class="tag">
                    <el-tag :style="{ marginRight: '6px' }">Tag 1</el-tag>
                </div>
            </div>
            
        
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Delete } from '@element-plus/icons-vue';
const props=defineProps(['commentData'])
let isButtonVisible=ref<boolean>(false)
const hoverHandle=()=>{
    isButtonVisible.value=!isButtonVisible.value
}
</script>

<style scoped lang="less">
.itemContainer{
    display: flex;
    flex-direction: row;
    align-items:flex-start;
    padding-bottom: 15px;
    width: 100%;
    .img{
        flex:1;
    }
    .main{
        flex:5;
        padding-bottom: 5px;
        width: 100%;
        height: 100%;
        border-bottom: 0.2px gray solid;
        .username{
            font-weight: bolder;
        }
        .moment{
            font-size:10px;
            color:gray;
            padding:5px 0;
        }
        .tag{
            padding:5px 0;
        }
        .content{
            display: block;
        }
    }
    
}
</style>