<template>
    <div class="dataView">
        <div>
            <el-space :size="580">
                <h3 style="display:inline">数据检测</h3>
                <div style="display:inline">
                    <el-button>近一周</el-button>
                    <el-button>近一月</el-button>
                </div>
            </el-space>
        </div>
        <div class="chart">
            <div class="chart1" ref="chart1"></div>
            <div class="chart2" ref="chart2"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
let chart1=ref()
let chart2=ref()
let chartData1=ref<object[]>([
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
            ])
let chartData2=ref<object[]>([
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
            ])
let devTotal=ref<string>(`设备总数为37`)
let count=ref<string>(`访问总数24`)
onMounted(()=>{
    let c1=echarts.init(chart1.value)
    let c2=echarts.init(chart2.value)
    let option1={
        title: {
          text: '环形图示例',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        graphic: [
          {
            type: 'text',
            left: 'center', // 水平居中
            top: 'center', // 垂直居中
            style: {
              text: devTotal.value, // 显示总数
              textAlign: 'center',
              fill: '#000', // 文字颜色
              fontSize: 15, // 文字大小
              fontWeight: 'bold', // 文字加粗
            },
          },
        ],
        // legend: {
        //   orient: 'vertical',
        //   left: 'left',
        //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'], // 内半径和外半径，形成环形
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data:chartData1.value 
        }]
        
    }
    let option2={
        title: {
          text: '环形图示例',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        graphic: [
          {
            type: 'text',
            left: 'center', // 水平居中
            top: 'center', // 垂直居中
            style: {
              text: count.value, // 显示总数
              textAlign: 'center',
              fill: '#000', // 文字颜色
              fontSize: 15, // 文字大小
              fontWeight: 'bold', // 文字加粗
            },
          },
        ],
        // legend: {
        //   orient: 'vertical',
        //   left: 'left',
        //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'], // 内半径和外半径，形成环形
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: chartData2.value
        }]
    }
    c1.setOption(option1)
    c2.setOption(option2)
})
</script>

<style scoped lang="less">
.dataView{    
            background: white;
            height: 49%;
            width: 100%;
            border-radius: 8px;
            padding:10px;
            .chart{
                display: flex;
                flex-direction: row;
            }
            .chart1{
                width: 450px;
                height: 220px;
            }
            .chart2{
                width: 450px;
                height: 220px;
            }
        }
</style>