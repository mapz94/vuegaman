<template>
  <v-app>
    <navigationDrawer/>
    <appBar/>
    <v-main >
      <v-container fluid>
        <transition name="fade" mode="out-in"> <!-- Curve -->
          <router-view/>
        </transition>
      </v-container>
    </v-main>
  <theFooter/>
  </v-app>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    components:{
      navigationDrawer: () => import ("@/components/TheNavigationDrawer"),
      appBar: () => import ("@/components/TheAppBar"),
      theFooter: () => import("@/components/TheFooter")
    },
    mounted(){
    },
    computed:{
      invert(){
        return this.$vuetify.theme.dark ? "filter: invert(0)" : "filter: invert(100)"
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@600&display=swap');
.fade-enter-active,
.face-leave-active{
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}


.gradient-fill{
  background: rgb(255,0,200);
  background: linear-gradient(270deg, rgba(255,0,200,0.75) 0%, rgba(255,50,128,1) 100%);
}

.item-vector{
  position: relative; 
  width:100%
}


</style>