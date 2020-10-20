<template>
  <v-app>
    <v-main >
      <v-container fluid style="padding: 0% !important;">
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
    created(){
      this.$store.dispatch("getThemeColors", this.$vuetify);
      this.$store.dispatch("getServices");
    },
    components:{
      theFooter: () => import("@/components/TheFooter")
    },
    mounted(){
    },
    computed:{
      themeColors(){
        return this.$store.state.themeColors;
      },
    }
  }
</script>

<style>
.fade-enter-active,
.face-leave-active{
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}

</style>