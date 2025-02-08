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
.bottomContainer{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    justify-content: left;
    /* align-content: center; */
}
.slider{
    flex:1;
    
}
.main{
    flex:5;
}
</style>