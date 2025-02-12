<template>
    <div class="homeContainer">
        <p class="title">总览</p>
        <div class="cardPart" >
            <el-space :size="12" >
                <card v-for="item in overList" :key="item.name"  :card="item"></card>
            </el-space>
        </div>
        <div class="centerPart">
            
                <div class="echarts">
                    
                        <div class="visitCount">
                            <el-space :size="600">
                                <h3 style="display:inline">访问量</h3>
                            <div style="display:inline">
                                <el-button>近一周</el-button>
                                <el-button>近一月</el-button>
                                <div class="charts" ref="charts1"></div>
                            </div>
                            </el-space>
                            
                        </div>
                        <div class="dataView">
                            <el-space :size="580">
                                <h3 style="display:inline">数据检测</h3>
                            <div style="display:inline">
                                <el-button>近一周</el-button>
                                <el-button>近一月</el-button>
                            </div>
                            </el-space>
                        </div>
                  
                    
                </div>
                <div class="comments">

                </div>
            
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as echarts from 'echarts'
import card from '../../components/card.vue';
import { overList } from '../../utils/overview';
let charts1=ref()
let visitCharts=echarts.init(charts1.value)
</script>

<style scoped lang="less">
.homeContainer{
    width: 100%;
    height: 100%;
    padding:0px 20px;
    display: flex;
    flex-direction: column;
    .title{
        font-weight: bolder;
    }
    .cardPart{
        flex:1.5;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .centerPart{
        flex:5;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .echarts{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 10px;
            flex:2;
            
            .visitCount{
                background: white;
                height: 49%;
                width: 100%;
                padding:10px;
                border-radius: 8px;
            }
            .dataView{
                
                background: white;
                height: 49%;
                width: 100%;
                border-radius: 8px;
                padding:10px;
            }
        }
        .comments{
            background-color: white;
            width: 100%;
            height: 100%;
            margin-left: 10px;
            padding:5px;
            border-radius: 8px;
            flex:1;
            
        }
    }
}

</style>