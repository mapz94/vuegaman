<template>
  <v-row dense justify="center">
    <v-col cols=9>
      <v-card flat color="transparent">
          <v-row dense justify="center">
            <v-col cols="8">
              <div :style=darkBorder>
                <v-card-title>Gaman Digital</v-card-title>
                <v-card-title style="text-align: justify !important">Esta es una prueba de contenido para Gaman Digital</v-card-title>
                <v-card-title style="text-align: justify !important">Esta es una prueba de contenido para Gaman Digital 2</v-card-title>
                <v-card-title style="text-align: justify !important">Esta es una prueba de contenido para Gaman Digital 3</v-card-title>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-img :style=noColor max-width="280" src="@/assets/logo_gaman_horse.svg"></v-img>
            </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'App',
  data () {
    return{

    }
  },
  components:{
    //Logo : () => import("@/components/TheLogo")
  },
  computed:{
    noColor(){
      return this.$vuetify.theme.dark ? "filter: saturate(0) brightness(100)" : "filter: saturate(0) brightness(0)"
    },
    darkBorder(){
      return this.$vuetify.theme.dark ? "border-style:solid; border-color:white" : "border-style:solid; border-color:black"
    },
      invert(){
        return this.$vuetify.theme.dark ? "filter: invert(100); box-shadow: inset 0 0 50px #fff, inner white */ inset 20px 0 80px #f0f, inner left magenta short inset -20px 0 80px #0ff,   inner right cyan short inset 20px 0 300px #f0f,  inner left magenta broad  inset -20px 0 300px #0ff,  inner right cyan broad  0 0 50px #fff,   outer white  -10px 0 80px #f0f,  outer left magenta  10px 0 80px #0ff;  outer right cyan " : "filter: invert(0); box-shadow: inset 0 0 50px #fff, inner white */ inset 20px 0 80px #f0f, inner left magenta short inset -20px 0 80px #0ff,   inner right cyan short inset 20px 0 300px #f0f,  inner left magenta broad  inset -20px 0 300px #0ff,  inner right cyan broad  0 0 50px #fff,   outer white  -10px 0 80px #f0f,  outer left magenta  10px 0 80px #0ff;  outer right cyan "
      }
  }
  
};
</script>

<style>
.synth-horse{
  display: relative;
  left: 40%;
  filter: saturate(0) brightness(100);

}



</style>