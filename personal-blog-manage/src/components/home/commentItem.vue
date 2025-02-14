<template>
    <div class="itemContainer">
            <div class="img">
                <el-avatar circle>
                </el-avatar>
            </div>
            <div class="main">
                <div>
                    <span class="username">{{ props.commentData.userName }}</span>
                    <span></span>
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
import { defineProps } from 'vue';
const props=defineProps(['commentData'])
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