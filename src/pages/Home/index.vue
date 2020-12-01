<template>
    <div class="Home">
        aaaaaaaaaaaa
    </div>
</template>

<script>
import MenuList from '../Menu/MenuList'
export default {
    name:'Home',
    components:{
        MenuList
    },
    computed: {
        routePath(){
            console.log(this.$route)
            return this.$route.path
        }
    },
    methods:{
       
    }
}
</script>

<style scoped>
    .Home{
        height: 100%;
    }
    .app-main{
        min-height: 100%;
        width: 100%;
        position: relative;
    }
</style>