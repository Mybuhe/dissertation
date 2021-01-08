<template>
    <div>
        <img width="50px" height="50px" @click="myclick" src="@/assets/heart.png" v-if="heart" alt="">
        <img width="50px" height="50px" @click="myclick" src="@/assets/heart-black.png" v-else alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            heart: this.a
        }
    },
    props:[
        "a"
    ],
    mounted(){
    },
    methods:{
        myclick(){
            if(this.heart){
                this.$emit("heartChange",false)
                this.heart = false
            } else {
                this.$emit("heartChange",true)
                this.heart = true
            }
        }
    }
}
</script>

<style scoped>

</style>