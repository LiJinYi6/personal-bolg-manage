<template>
    <div class="headerContainer">
        <div class="title">
            <span>{{props.title}}</span>
        </div>
        <div class="search">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let props=defineProps(['title'])
</script>

<style scoped lang="less"> 
    .headerContainer{
        display: flex;
        justify-content: space-between;
        .title{
            font-size: 20px;
            font-weight: bolder;
        }
        
    }
</style>