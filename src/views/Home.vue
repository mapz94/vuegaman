<template>
  <v-row dense no-gutters>
    <v-col cols="12">
      <callout/>
    </v-col>
    <v-col cols="12">
      <servicesCarrousel/>
    </v-col>
    <v-col cols="12">
    <v-card dark tile color="primary">
      <v-parallax style="transform: scaleX(-1)" src="@/assets/images/half_triangles_linear_gradient.webp">
        <v-row style="transform: scaleX(-1)" align="center" justify="center">
          <v-col cols="12" sm="11">
            <v-row justify="center" align="center">
              <v-col cols="12" sm="4">
                <v-img style="opacity:1" src="@/assets/images/iphone-hand.svg" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-card-text>
                  <div >
                    Nuestros servicios: 
                    Creación y desarrollo de páginas webs
                    Administración de contenido
                    Posicionamiento de tu empresa en el mundo digital
                    Creación de familia de logos
                  </div>
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-parallax>
    </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'App',
  components:{
    callout: () => import('@/components/home/Callout.vue'),
    servicesCarrousel: () => import("@/components/home/ServicesCarrousel")
    //Logo : () => import("@/components/TheLogo")
  },
  data () {
    return{
    }
  },
  created(){
  },
  computed:{
    
  }
};
</script>

<style>




</style>