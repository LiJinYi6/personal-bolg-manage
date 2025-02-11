<template>
    <div class="homeContainer">
        <p class="title">总览</p>
        <div class="cardPart" >
            <el-space :size="12" >
                <card v-for="item in overList" :key="item.name"  :card="item"></card>
            </el-space>
        </div>
        <div class="centerPart">
            展示部分
        </div>
    </div>
</template>

<script setup lang="ts">
import card from '../../components/card.vue';
import { overList } from '../../utils/overview';
</script>

<style scoped lang="less">
.homeContainer{
    width: 100%;
    height: 100%;
    padding:0px 20px;
    display: flex;
    flex-direction: column;
    .title{
        font-weight: bolder;
    }
    .cardPart{
        flex:1.5;
        border: 1px black solid;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
       
    }
    .centerPart{
        flex:5;
        border: 1px black solid;
    }
}

</style>