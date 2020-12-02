<template>
    <div class="Main">
        <menu-list class="menu" />

        <navibar class="navibar" />
        <keep-alive>
          <router-view class="content" />
        </keep-alive>

    </div>
</template>

<script>
import MenuList from './Menu/MenuList'
import Navibar from './Navibar'
export default {
  components: { 
    MenuList,
    Navibar
  },
    name: 'Main',
    comments: {
        MenuList
    },
    methods: {
      toggleClick(e){
        console.log(e)
      }
    }
    
}
</script>

<style scoped>
.navibar{
  height: 50px;
  margin-left: 220px;
  overflow: hidden;
}
.Main{
  height: 100%;
}
.menu{
  position: fixed;
}
.content{
  margin-left: 220px;
  overflow: hidden;
}
</style>