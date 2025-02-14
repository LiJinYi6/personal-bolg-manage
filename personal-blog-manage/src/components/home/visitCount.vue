<template>
    <div class="visitCount">
        <div class="title">
            <el-space :size="600">
                <h3 style="display:inline">访问量</h3>
                <div style="display:inline">
                    <el-button>近一周</el-button>
                    <el-button>近一月</el-button>
                </div>
            </el-space>
        </div>
        <div class="charts" ref="charts1"></div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
let charts1=ref()
let ydata=ref<Number[]>([150, 230, 224, 218, 135, 147, 260])
let xdata=ref<string[]>(['周一', '周二', '周三', '周四', '周五', '周六', '周日'])
onMounted(()=>{
    let visitCharts=echarts.init(charts1.value)
    visitCharts.setOption({
       
        tooltip:{
         trigger:'axis'
        },
        xAxis:{
         type:'category',
         data:xdata.value
        },
        yAxis: {
               type: 'value'
             },
             series: [
               {
                 name: '销量',
                 type: 'line',
                 data: ydata.value,
                 smooth: true
               }
             ]
})
})
</script>

<style scoped lang="less">
.visitCount{
            background: white;
            height: 49%;
            width: 100%;
            padding:10px;
            border-radius: 8px;
            align-items: center;
            justify-content: center;
            .charts{
                width: 900px;
                height: 220px;
            }
        }
</style>