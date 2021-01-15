<template>
  <div>
    {{reversedMessage}}
    <el-row class="buttons-row">
      <el-button type="primary" @click="addStudent">添加</el-button>
      <el-button type="primary" @click="deleteStudent" >删除</el-button>
      <el-button type="primary">通知</el-button>
      <el-button type="primary" @click="uploadExcel = true">导入</el-button>
      <el-button type="primary" @click="downLoadExcel">导出</el-button>
      <el-button type="primary">导入课题</el-button>
      <el-button type="primary">分配导师</el-button>
      <el-button type="primary">分配导师2</el-button>
      <el-button type="primary">解除师生配对</el-button>
      <el-button type="primary">导出师生配对</el-button>
      <el-button type="primary">导出师生配对学校格式</el-button>
      <el-button type="primary">批量修改</el-button>
    </el-row>
    <el-row class="select-items-1">
      <el-select v-model="value" placeholder="选择学院">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
        <el-select v-model="value" placeholder="选择系别">
        <el-option
        v-for="(item,index) in options"
        :key="index"
        :label="item.label"
        :value="item.value">
        </el-option>
      </el-select>
          <el-select v-model="value" placeholder="选择专业">
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
    </el-row>
    <el-row class="select-items-2">
      <el-select v-model="value" placeholder="选择班级">
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
      <el-select v-model="value" class="select-number" placeholder="账号">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input class="number-class" v-model="value" placeholder="请输入账号"></el-input>

      <el-button type="primary">搜索</el-button>
    </el-row>
    <el-row class="tables">
      <el-table
      :data="studentData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      >
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          
          <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button @click="EditClass(scope.row)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small" @click="subject(scope.row)">课题设置</el-button>
            </template>
          </el-table-column>
          

          <el-table-column
              prop="name"
              label="姓名"
              width="100">
          </el-table-column>
          <el-table-column
              prop="teacherOne"
              label="老师一">
          </el-table-column>
          <el-table-column
              prop="teacherTwo"
              label="老师二">
          </el-table-column>
          <el-table-column
              prop="grade"
              label="年纪">
          </el-table-column>
          <el-table-column
              prop="faculty"
              label="院系">
          </el-table-column>
          <el-table-column
              prop="profession"
              label="专业">
          </el-table-column>
          <el-table-column
              prop="studentClass"
              label="班级">
          </el-table-column>
          <el-table-column
              prop="session"
              label="届次">
          </el-table-column>
          <el-table-column
              prop="topic"
              label="论文题目">
          </el-table-column>
      </el-table>
    <div class="block">
      <el-pagination
        background
        layout="prev, pager, next"
        @size-change="tableSizeChange"
        @current-change="tableCurrentChange"
        :page-size="pageHelperData.size"
        :page-count="pageHelperData.count"
        :total="pageHelperData.total"
        >
      </el-pagination>
      </div>
    </el-row>
    <form-dialog :visible.sync="dialogVisible" v-on:childFn="submit" :editForm="tableForm" />
    
    <el-dialog
        title="提示"
        :visible.sync="subjectVisible"
        width="30%"
        :before-close="subjectClose">
        <el-form ref="form" :model="subjectForm" label-width="80px">

            <el-form-item label="课题">
              <el-select v-model="subjectForm.topic" placeholder="请选择">
                  <el-option
                      v-for="item in subjectTopicItem"
                      :key="item.id"
                      :label="item.topic"
                      :value="item.topic">
                  </el-option>
              </el-select>
            </el-form-item>

            <el-form-item style="margin-left: 70px !important;">
                <el-button type="primary" @click="subjectOnSubmit">立即创建</el-button>
                <el-button @click="subjectVisible = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>


    <el-dialog
        title="提示"
        :visible.sync="uploadExcel"
        width="30%"
        :before-close="uploadExcelClose">
        <el-form ref="form" :model="subjectForm" label-width="80px">

            <el-form-item label="">
              <el-upload
                drag
                class="upload-demo"
                action=""
                multiple
                :show-file-list="false"
                :http-request="uploadExcelSubmit">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
            </el-form-item>
        </el-form>
    </el-dialog>


  </div>
</template>

<script>
import { GetAllStudentData } from '@/api/student'
import FormDialog from "./form";
import qs from 'qs'
import download from '@/pages/component/download'
export default {
data(){
  return {
    pageHelperData:{
      count:1,
      size:7
    },
    subjectTopicItem: [],
    subjectForm:{},
    subjectVisible: false,
    uploadExcel: false,
    studentIds: [],
    dialogVisible:false,
    studentData: [],
    tableForm:{},
    value: "",
    options: [
        {value: "11", label: "11"},
         {value: "22", label: "22"},
          {value: "33", label: "22"},
    ]
  }
},
mounted(){
  // 页面一开始加载，只加载一次
  alert("这里开始渲染了")
  this.getStudent()
  this.getSubjectTopic()
},
// watch 比较灵活一点
watch:{
  // 如果 值相同不会触发，如果值改变了才会触发
  value:function(e){
    console.log(e)
  }
},
// 如果 值相同不会触发，如果值改变了才会触发
computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.value.split('').reverse().join('')
    }
},
methods:{
  uploadExcelClose(){
    this.uploadExcel = false
  },
  tableSizeChange(e){    
    this.pageHelperData.size = e
     this.getStudent()
  },
  tableCurrentChange(e){
    this.pageHelperData.count = e
    this.getStudent()
  },
  uploadExcelSubmit(e){
    var formData = new FormData()
    formData.append('excleFile', e.file)
    this.$axios.post("/api/student/importStudent",formData).then(e=>{
      this.uploadExcel = false
    })
  },
  downLoadExcel(){
    window.location.href ="/api/student/exportStudentInfo"
  },
  getSubjectTopic(){
    this.$axios.get("/api/topic/findTopic").then(e=>{
      this.subjectTopicItem = e.data
    })
  },
  subject(e){
    this.subjectForm.id = e.id
    this.subjectVisible = true
  },
  subjectOnSubmit(){
    this.$axios.defaults.headers['Content-Type'] = 'application/json'
    this.$axios.post("/api/student/editEssayTopic",this.subjectForm).then(e=>{
      this.getStudent();
      this.subjectVisible = false
    })
  },
  subjectClose(){
    this.subjectVisible = false
  },
  deleteStudent(){
      const h = this.$createElement;
      this.$msgbox({
          title: '删除',
          message: h('p', null, [
            "是否删除"
          ]),
          showCancelButton: true,confirmButtonText: '确定',cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              this.$axios.defaults.headers['Content-Type'] = 'application/json'
              this.$axios.post("/api/student/deleteStudent", {ids:this.studentIds}).then(e=>{
                done();
                instance.confirmButtonLoading = false;
                this.getStudent()
              })
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: '删除成功'
          });
        });
  },
  submit(e){
    if(e === false){
      this.getStudent()
    }
  },
  EditClass(e){
    this.dialogVisible = true
    this.tableForm = e
  },
  getStudent(){
    
    // this.$axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    GetAllStudentData({currentPage: this.pageHelperData.count, pageSize: this.pageHelperData.size}).then(e=>{
      this.studentData = e.data.data.rows
      this.pageHelperData.total = e.data.data.total
    })
  },
  addStudent(){
    this.dialogVisible = true
  },
  handleSelectionChange(e){
    let ids = e.map(e=>{
      return e.id
    })
    this.studentIds = ids
    
  }
},
components: {
    FormDialog
}
}
</script>

<style scoped>
.buttons-row  >>> .el-button{
  margin-left:  0;
}
.buttons-row{
    margin-top: 10px;
    margin-left: 20px;

}
.select-items-1{
    margin-top: 10px;
    margin-left: 20px;
}
.select-items-2{
    margin-top: 10px;
    margin-left: 20px;
}
.tables{
    margin-top: 10px;
    margin-left: 20px;
}
.number-class{
  width: 180px;
}
.select-number{
  width: 100px;
}
.el-form >>>.el-form-item__content{
  margin-left: 0px !important;
}
</style>