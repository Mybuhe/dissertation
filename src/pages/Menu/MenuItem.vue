<template>
    <div>
      <template v-if="checkMenu(item)">
          <router-link v-if="checkItemTitle(item.meta)" tag="div" :to="resolvePath(item.path)">
              <el-menu-item >
                 <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">{{checkItemTitle(item.meta)}}</span>
                 </template>
              </el-menu-item>
          </router-link>
      </template>
      <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" :key="item.path" popper-append-to-body>
         <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">{{checkItemTitle(item.meta)}}</span>
        </template>
        <menu-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(item.path)"
          class="nest-menu"
        />
      </el-submenu>
    </div>
</template>

<script>
import path from 'path'
export default {
    name:"MenuItem",
    data() {
      this.onlyOneChild = null
      return {
        value:[],
        isCollapse: true
      };
    },
    props: [
      'item',
      'basePath'
    ],
    mounted(){
    },
    computed:{
    },
    methods: {
      resolvePath(routePath) {
        return path.resolve(this.basePath, routePath)
      },
      checkMenu(e){
        if(e.children == undefined){
          return true
        }
        if(e.children.length == 0 && e.children == []){
          return true
        }
        return false
      },
      checkItemTitle(e){
        if(e == undefined){
          return null;
        }else {
          return e.title
        }
      },
      handleChange(){

      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      collapse(e){
        if(this.isCollapse){
          this.isCollapse = false
        } else {
          this.isCollapse = true
        }
      }
    }
}
</script>

<style scoped>

</style>