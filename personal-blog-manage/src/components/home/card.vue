<template>
    <div :style="{background:props.card.bgColor}" class="cardContainer">
        <div class="left">
            <p class="text">{{ props.card.name }}</p>
            <h3>{{ props.card.total }}</h3>
        </div>
        <div class="right">
            <el-button type="info" plain :icon="Plus">
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Plus } from '@element-plus/icons-vue';


const props = defineProps(['card'])
</script>

<style scoped lang="less">
.cardContainer{
    width:200px;
    height: 120px;
    border-radius: 8px;
    border:1px black solid;
    position: relative;
    display: flex;
    flex-direction: row;

    .left{
        flex:1
    }
    .right{
        flex:1;
        position:absolute;
        right:5px;
        top: calc(120px / 2 - 10px);
    }
    .text{
        
        color:gray;
        font-size: small;
        position:absolute;
        left:5px;
        top: 0px;
    }
    h3{
        position:absolute;
        left:5px;
        bottom: 0px;
    }
}
</style>