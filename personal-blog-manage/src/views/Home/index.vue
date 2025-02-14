<template>
    <div class="homeContainer">
        <p class="title">总览</p>
        <div class="cardPart" >
            <el-space :size="12" >
                <card v-for="item in overList" :key="item.name"  :card="item"></card>
            </el-space>
        </div>
        <div class="centerPart">
                <div class="echarts">
                    <visitCount></visitCount>
                    <dataView></dataView>
                </div>
                <comment></comment>
        </div>
    </div>
</template>

<script setup lang="ts">
import comment from '../../components/home/comment.vue';
import card from '../../components/home/card.vue';
import { overList } from '../../utils/overview';
import visitCount from '../../components/home/visitCount.vue';
import dataView from '../../components/home/dataView.vue';
</script>

<style scoped lang="less">
.homeContainer{
    width: 100%;
    height: 100%;
    padding:5px 20px;
    display: flex;
    flex-direction: column;
    .title{
        font-weight: bolder;
    }
    .cardPart{
        flex:1.5;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .centerPart{
        flex:5;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 10px;
        .echarts{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-right: 10px;
            flex:2;
        }
    }
}

</style>