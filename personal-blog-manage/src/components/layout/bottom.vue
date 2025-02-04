<template>
    <div class="bottomContainer">
        <div class="slider">
            <Slider></Slider>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import Slider from './slider.vue'
</script>

<style scoped>

</style>