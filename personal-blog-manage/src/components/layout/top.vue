<template>
    <div class="topContainer">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-houtaiguanli"></use>
            </svg>
            <span class="title">我的博客后台管理</span>
        </div>
        <div class="topRight"></div>
    </div>
</template>

<script setup lang="ts">

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
        }
        .icon{
            font-size: 32px;
        }
    }
}
</style>