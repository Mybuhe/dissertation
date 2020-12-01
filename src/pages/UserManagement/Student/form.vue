<template>
    <el-dialog
        title="提示"
        :visible.sync="visible"
        width="30%"
        :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="老师一">
                <el-select v-model="form.teacherOne" placeholder="请选择">
                    <el-option
                        v-for="item in teacherSelectItem"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="老师二">
                <el-select v-model="form.teacherTwo" placeholder="请选择">
                    <el-option
                        v-for="item in teacherSelectItem"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="年纪">
                <el-input v-model="form.grade"></el-input>
            </el-form-item>

            <el-form-item label="院系">
                <el-input v-model="form.faculty"></el-input>
            </el-form-item>

            <el-form-item label="专业">
                <el-input v-model="form.profession"></el-input>
            </el-form-item>

            <el-form-item label="班级">
                <el-input v-model="form.studentClass"></el-input>
            </el-form-item>

            <el-form-item label="届次">
                <el-input v-model="form.session"></el-input>
            </el-form-item>

            <el-form-item label="论文题目">
                <el-input v-model="form.topic"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="onCancel">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            form: {},
            options: [],
            teacherSelectItem:[]
        }
    },
    watch:{
        editForm(e){
            this.form = e
        }
    },
    mounted(){
        this.findTeacher()
    },
    props:[
        'visible',
        'editForm'
    ],
    methods:{
        findTeacher(){
            this.$axios.get("/api/teacher/findTeacher").then(e=>{
                this.teacherSelectItem = e.data
            })
        },
        onSubmit(){
            this.$axios.defaults.headers['Content-Type'] = 'application/json'
            if(this.form.id === undefined){
                this.$axios.post("/api/student/addStudent",this.form).then(e=>{
                    this.$emit('childFn',false)
                    this.$emit('update:visible',false)
                })
            } else {
                this.$axios.post("/api/student/editStudent",this.form).then(e=>{
                    this.$emit('childFn',false)
                    this.$emit('update:visible',false)
                })
            }
        },
        onCancel(){
            this.$emit('update:visible',false)
        },
        handleClose(done) {
            this.$emit('update:visible',false)
        }
    }
}
</script>

<style scoped>

</style>