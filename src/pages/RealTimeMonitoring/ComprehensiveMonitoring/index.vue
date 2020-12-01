<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
            </div>
            <div>
                <el-select v-model="value" placeholder="学院">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <el-select v-model="value" placeholder="选择系别">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <el-select v-model="value" placeholder="选择年纪">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <el-select v-model="value" placeholder="选择届次">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>检测综合统计</span>
            </div>
            <div>
                <div class="mounted-box">    
                    <el-row class="mounted-data">
                        <div class="mounted-img">
                            <img src="@/assets/mounted.png" alt="">
                        </div>
                        <div class="mounted-font">今天检测数</div>
                    </el-row>
                    <el-row class="mounted-data">
                        <div class="mounted-img">
                            <img src="@/assets/mounted.png" alt="">
                        </div>
                        <div class="mounted-font">昨日检测数</div>
                    </el-row>
                    <el-row class="mounted-data">
                        <div class="mounted-img">
                            <img src="@/assets/mounted.png" alt="">
                        </div>
                        <div class="mounted-font">已检测到学生数</div>
                    </el-row>
                    <el-row class="mounted-data">
                        <div class="mounted-img">
                            <img src="@/assets/mounted.png" alt="">
                        </div>
                        <div class="mounted-font">检测合格学生数</div>
                    </el-row>
                </div>

                <div class="mounted-box m-t-30">
                    <el-row class="mounted-data">
                        <div class="mounted-img">
                            <img src="@/assets/mounted.png" alt="">
                        </div>
                        <div class="mounted-font">今日检测学生数</div>
                    </el-row>
                    <el-row class="mounted-data">
                        <div class="mounted-img">
                            <img src="@/assets/mounted.png" alt="">
                        </div>
                        <div class="mounted-font">昨日检测学生数</div>
                    </el-row>
                    <el-row class="mounted-data">
                        <div class="mounted-img">
                            <img src="@/assets/mounted.png" alt="">
                        </div>
                        <div class="mounted-font">未检测学生数</div>
                    </el-row>
                    <el-row class="mounted-data">
                        <div class="mounted-img">
                            <img src="@/assets/mounted.png" alt="">
                        </div>
                        <div class="mounted-font">检测不合格学生数</div>
                    </el-row>
                </div>

            </div>
        </el-card>
            
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:'',
            options:[]
        }
    }
}
</script>

<style scoped>

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width:95%;
    margin-top: 20px;
    margin-left: 20px;
  }
 .mounted-img{
     width: 200px;
  }
  .mounted-img img{
      width: 100%;
  }
 .mounted-box{
     display: flex;
     justify-content: space-around;
 }
 .m-t-30{
     margin-top: 30px;
 }
 .mounted-data{
     width:22%;
     text-align: center;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
 }
 .mounted-font{
     margin-top: 5px;
 }
</style>