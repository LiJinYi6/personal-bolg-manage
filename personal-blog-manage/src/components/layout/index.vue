<template>
    <div class="layoutContainer">
        <div class="top">
            <Top></Top>
        </div>
        <div class="bottom">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import Top from './top.vue'
</script>

<style scoped lang="less">
.layoutContainer{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .bottom{
        margin-top:64px;
        height: calc(100% - 64px);
    }
}

</style>