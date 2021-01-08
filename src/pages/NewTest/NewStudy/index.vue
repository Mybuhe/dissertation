<template>
    <div>
        <el-button @click="myclick(123)" >
            <myform />默认按钮</el-button>


    

        <!-- <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="60%">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <template style="margin-top:20px">
                <el-time-picker
                    v-model="time"
                    range-separator="至"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                        }"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                </el-time-picker>
            </template>

            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            {{value}}
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog> -->
    </div>
</template>

<script>
import myform from './form.vue'
export default {
  components: { myform },
    data(){
        return {
            dialogVisible:false,
            input:null,
            time:'',
            value: '',
            options:[
                {label:"1",value:"10"}
            ]
        }
    },
    mounted(){
        console.log("网络请求")
    },
    methods:{
        myclick(e){
            this.dialogVisible = true
        }
    }
}
</script>


<style scoped>
/* sass less styles */

</style>