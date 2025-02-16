<template>
    <div class="itemContainer" @mouseenter="hoverHandle" @mouseleave="hoverHandle">
            <div class="main">
                <div>
                    <el-space :size="250">
                        <span class="username">{{ props.messageData.user }}</span>
                         <span><el-button v-show="isButtonVisible" style="border:none" :icon="Delete"></el-button></span>
                    </el-space>
                </div>
                <div class="moment">{{ props.messageData.moment }}</div>
                <div class="content">{{ props.messageData.content }}</div>
               
            </div>
            
        
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Delete } from '@element-plus/icons-vue';
const props=defineProps(['messageData'])
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
    .main{
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