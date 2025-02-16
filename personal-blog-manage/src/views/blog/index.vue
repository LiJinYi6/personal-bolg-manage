<template>
    <div class="localFillContainer">
        <div class="header">
            <myHeader title="本地文件">
                <el-input
                 v-model="searchContent"
                 style="width: 240px"
                 size="small"
                 placeholder="Please Input"
                 :suffix-icon="Search"
                />
            </myHeader>
        </div>
            <div class="category">

            </div>
            <div class="mainContent">

            </div>

    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
let searchContent=ref<string>()
</script>

<style scoped>

</style>