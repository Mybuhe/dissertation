<template>
    <div>
        <el-row class="student-template">
            <el-card shadow="never" class="student-list" >
                 <div class="clearfix">
                    <span >学生列表</span>
                    <el-upload
                        class="upload-student-list"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="handleChange">
                        <div size="small" type="" class="upload-btn" >点击上传</div>
                    </el-upload>
                </div>
            </el-card>
            <span class="download-student-template">
                下载待分配学生模板
            </span>
        </el-row>
        
        <el-row class="student-template">
            <el-card shadow="never" class="student-list" >
                 <div class="clearfix">
                    <span >导师列表</span>
                    <el-upload
                        class="upload-student-list"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="handleChange">
                        <div size="small" type="" class="upload-btn" >点击上传</div>
                    </el-upload>
                </div>
            </el-card>
            <span class="download-student-template">
                下载待分配学生模板
            </span>
        </el-row>

        <el-row class="m-l-30 m-t-10">
            <el-button>
                执行随机分配
            </el-button>
            
            <el-button>
                导入分配结果
            </el-button>
        </el-row>

    </div>
</template>

<script>
export default {
    data(){
        return {
            fileList:[]
        }
    },
    methods:{
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        }
    }
}
</script>

<style scoped>
    .student-template{
        display: flex;
        overflow: hidden;
        margin-left: 30px;
        height: 60px;
        margin-top: 10px;
    }
    .m-t-10{
        margin-top: 10px;
    }
    .m-l-30{
        margin-left: 30px;   
    }
    .student-list{
        height: 97%;
        width: 350px;
        display: flex;
    }
    .download-student-template{
        margin-left: 30px;
        align-self: center;
    }
    .student-template >>> .el-card__body{
        align-self: center;
    }
    .clearfix{
        align-self: center;
        display: flex;
    }
    .clearfix span {
        align-self: center;
    }
    .upload-student-list{
        margin-left: 40px;
        align-self: center;
        border-left: 1px solid black;
        padding-left: 10px;
    }
    .upload-btn{
         color: #67C23A;
    }

</style>