<template>
    <div>
        <el-button @click="myclick(123)" >默认按钮</el-button>

        <!-- 如果 值为true 那么现实，如果false 那么不显示 -->
        <div v-if="dialogVisible">
            1111
        </div>
        
        <!-- <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:false
        }
    },
    methods:{
        myclick(e){
            if(this.dialogVisible){
                this.dialogVisible = false
            } else {
                this.dialogVisible = true
            }
        },
        handleClose(){
            console.log("---")
        }
    }
}
</script>


<style scoped>
/* sass less styles */

</style>