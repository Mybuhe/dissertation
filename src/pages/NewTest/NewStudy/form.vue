<template>
    <div>
        <img @click="myclick" src="@/assets/heart.png" v-if="heart" alt="">
        <img @click="myclick" src="@/assets/heart-black.png" v-else alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            heart: true
        }
    },
    methods:{
        myclick(){
            if(this.heart){
                this.heart = false
            } else {
                this.heart = true
            }
        }
    }
}
</script>

<style scoped>

</style>