<template>
    <div class="topContainer">
        <div class="topLeft">
            <el-space :size="12">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-houtaiguanli"></use>
                </svg>
                <span class="title">我的博客后台管理</span>
            </el-space>
        </div>
        <div class="topRight">
            <el-space :size="22">
                <el-badge is-dot class="item">
                <el-icon :size="20"><Message /></el-icon>
                </el-badge>
                <el-avatar :size="38" :src="avatarUrl"/>
                <el-switch
                  class="mt-2"
                  
                  inline-prompt
                  :active-icon="Moon"
                  :inactive-icon="Sunny"
                />
                <el-button  type="warning" round>退出</el-button>
            </el-space>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Moon, Sunny } from '@element-plus/icons-vue'
let avatarUrl=ref('')
</script>

<style scoped lang="less">
.topContainer{
    position: fixed;
    background: white;
    width: 100%;
    height: 64px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topLeft{
        .title{
            color:black;
            font-weight: bolder;
            font-size:23px;
        }
        .icon{
            font-size: 36px;
        }
    }
    .topRight{
        display:flex;
        justify-content: center;
        align-content: center;
    }
}
</style>