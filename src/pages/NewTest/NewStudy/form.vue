<template>
    <div>
        <!-- <img width="50px" height="50px" @click="myclick" src="@/assets/heart.png" v-if="heart" alt="">
        <img width="50px" height="50px" @click="myclick" src="@/assets/heart-black.png" v-else alt=""> -->
         <el-dialog
            title="提示"
            :visible.sync="heart"
            width="60%"
            :before-close="close">
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
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            heart: this.a,
            input:null,
            time:'',
            value: '',
            options:[
                {label:"1",value:"10"}
            ]
        }
    },
    // watch 如果值一改变那么他就会被监听到，a(这里是形参)是你要监听的变量名
    watch:{
        a(e){
           this.heart = e
        }
    },
    props:[
        "a"
    ],
    mounted(){
    },
    methods:{
        myclick(){
            
        },
        close(){
            this.$emit("heart",false)
        }
    }
}
</script>

<style scoped>

</style>