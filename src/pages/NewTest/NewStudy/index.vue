<template>
    <div>
        <el-button @click="myclick(123)" >默认按钮</el-button>
        <myform :a="dialogVisible" v-on:heart="myheart"  />


       
    </div>
</template>

<script>
import myform from './form.vue'
export default {
  components: { myform },
    data(){
        return {
            dialogVisible:false
        }
    },
    mounted(){
        console.log("网络请求")
    },
    methods:{
        myclick(e){
            this.dialogVisible = true
        },
        myheart(e){
            this.dialogVisible = false
        }
    }
}
</script>


<style scoped>
/* sass less styles */

</style>