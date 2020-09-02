<template>
  <v-app style="background-color: #202030; width:100%; height:100%" dark>
    <home/>
  </v-app>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  components:{
    home:() => import("@/views/Home")
  }

}
</script>

<style>

</style>