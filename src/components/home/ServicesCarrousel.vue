<template>
  <v-card tile flat height="500">
      Servicios
      <v-row justify="center" align="center">
        <v-col cols="12" sm="11">
          <v-carousel v-if="services" light cycle hide-delimiter-background show-arrows-on-hover> 
            <v-carousel-item v-for="(i) in Math.floor(services.length/2)" :key="i" > <!--debiese basta como esta, no cambiar -->
                <v-row align="center">
                  <v-col cols="11" sm="5" v-for="(j) in 2" :key="j">
                      <v-row justify="center">
                          <v-col cols="12">
                              <div flat v-html="services[((i-1)*2)+j-1].content" />
                          </v-col>
                      </v-row>
                  </v-col>                
                </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        services(){
            return this.$store.state.services;
        }
    },
    created(){
        this.$store.dispatch("getServices");
    }

}
</script>

<style>

</style>