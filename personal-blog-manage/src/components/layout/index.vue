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

<style scoped>

</style>