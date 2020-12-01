<template>
  <div class="menu-list">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu 
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            text-color="#fff"
            background-color="#545c64"
            active-text-color="#ffd04b"
        >
          <menu-item v-for="item of route" :key="item.path" :item="item"/>
        </el-menu>
      </el-scrollbar>
  </div>
</template>

<script>
import Axios from 'axios'
import MenuItem from './MenuItem'
 export default {
   name:"MenuList",
   data() {
     return {
       route: [],
       isCollapse: false
     }
   },
   components:{
     MenuItem
   },
    mounted(){
      this.route = this.$router.options.routes
    },
    methods: {
      collapse(){
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-list{
  height: 100%;
  /* width: 64px; */
  width: 220px;
  background: #545c64;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  height: 100%;
  /* min-height: 400px; */
  width: 100%;
}
.scrollbar-wrapper{
  height: 100%;
}
.menu-list >>> .el-scrollbar{
  height: 100%;
  /* background: #545c64; */
  width: 100%;
}
.menu-list >>> .el-menu{
  border-right: none !important;
}
</style>
