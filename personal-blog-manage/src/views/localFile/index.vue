<template>
    <div class="localFillContainer">
        <div class="header">
            <myHeader title="本地文件">
                <span style="font-size: 10px; margin-right: 5px;">文件大小不得超过20M</span>
                <el-button type="primary">上传</el-button>
            </myHeader>
        </div>
            <div class="category">

            </div>
            <div class="mainContent">

            </div>

    </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
import myHeader from '../../components/layout/myHeader.vue';
import { ref } from 'vue';
const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
</script>

<style lang="less">
.localFillContainer {
    width: 100%;
    height: 100%;
    padding: 10px 20px;

    .header {
        width: 100%;
        height: 5%;
    }

    .category {
        width: 100%;
        height: 5%;
        background-color: white;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
    }

    .mainContent {
        width: 100%;
        height: 85%;
        background-color: white;
        margin-top: 10px;
    }
}
</style>