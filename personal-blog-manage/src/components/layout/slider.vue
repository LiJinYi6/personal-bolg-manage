<template>
    <div class="siliderContainer">
        <el-menu
        default-active="1"
        background-color="linear-gradient(to left, #f7dc6f, @bg-color)"
        text-color="gray"
        active-text-color="#87CEEB"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-menu-item index="/bottom/home">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/bottom/localFile" >
          <el-icon><document /></el-icon>
          <span>本地文件</span>
        </el-menu-item>
        <el-menu-item index="/bottom/blog">
            <el-icon><Promotion /></el-icon>
          <span>博客</span>
        </el-menu-item>
        <el-menu-item index="/bottom/note">
            <el-icon><Notebook /></el-icon>
          <span>随笔笔记</span>
        </el-menu-item>
        <el-menu-item index="/bottom/picture">
            <el-icon><PictureFilled /></el-icon>
          <span>图库</span>
        </el-menu-item>
        <el-menu-item index="/bottom/music">
            <el-icon><Headset /></el-icon>
          <span>音乐</span>
        </el-menu-item>
        <el-menu-item index="/bottom/movie">
            <el-icon><Film /></el-icon>
          <span>影视</span>
        </el-menu-item>
        <el-menu-item index="/bottom/set">
            <el-icon><Setting /></el-icon>
          <span>设置</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script setup lang="ts">
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.siliderContainer{
    width: 100%;
    height: 100%;
    /* background-color:white; */
}
</style>