<template>
  <v-app>
    <loading-screen :is-loading="isLoading"></loading-screen>
    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-col>
          <v-row>
            <v-card-title class="text-center">Esta página web aun esta en construcción.</v-card-title>
            <v-card-text class="text-center">Agradecemos su comprensión.</v-card-text>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center" align="center">
            <v-btn color="error" @click="dialog = false">Cerrar</v-btn>
          </v-row>
        </v-col>
      </v-card>
    </v-dialog>
    <theAppbar/>
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
        dialog :true,
        isLoading: true
      }
    },
    created(){
      this.$store.dispatch("getThemeColors", this.$vuetify);
    },
    components:{
      theAppbar: () => import("@/components/TheAppBar"),
      theFooter: () => import("@/components/TheFooter")
    },
    mounted(){
      setTimeout(() => {
        this.isLoading = false
      }, 5000)
    },
    methods:{
      
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