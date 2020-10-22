<template>
  <v-row dense no-gutters>
    <v-col cols="12">
      <callout/>
    </v-col>
    <v-col cols="12">
      <contentFeatures/>
    </v-col>
    <v-col cols="12">
      <contentPromotion/>
    </v-col>
    <v-col cols="12" id="planes">
      <v-lazy>
        <promotions/>
      </v-lazy>
    </v-col>
    <v-col cols="12">
      <v-card color="primary">
        <v-parallax src="@/assets/images/half_triangles_linear_gradient.webp">
          Manejo de contenido
        </v-parallax>
      </v-card>
    </v-col>
    <v-col>
      <v-row justify="center">
        <v-col cols="11">
          <v-row justify="center" align="center">
            <v-col cols="12">
              <div style="text-align: center; font-weight: bold; font-size:1.5rem" >
                Nuestro Equipo
              </div>
            </v-col>
            <v-col cols="12" >
              <v-row justify="center">
                <v-col cols="12" :sm="12/3" v-for="(member,i) in team" :key="i" >
                <v-row justify="center" dense no-gutters>
                  <v-col cols="12">
                    <v-card ripple width="300">
                      <v-img :src="member.image.data.full_url" />
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card-title>
                      {{member.name}}
                    </v-card-title>
                  </v-col>
                </v-row>
                </v-col>
                <v-col cols="12">
                  <v-btn block color="primary">
                    Sobre Nosotros
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-card color="primary">
        <v-parallax style="transform: scaleX(-1)" src="@/assets/images/half_triangles_linear_gradient.webp">
          <div style="transform: scaleX(-1)">
            Manejo de contenido 2
          </div>
        </v-parallax>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="11">
          Carrusel?
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-card color="grey">
        Termino de página
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import client from '@/plugins/directus';
export default {
  name: 'App',
  
  components:{
    callout: () => import('@/components/home/Callout.vue'),
    contentFeatures: () => import('@/components/home/ContentFeatures'),
    contentPromotion: () => import('@/components/home/ContentPromotion'),
    promotions: () => import('@/components/home/Promotions')
    //Logo : () => import("@/components/TheLogo")
  },
  data () {
    return{
      team:[]
    }
  },
  created(){
    let params = {fields: ['*.*.*.*.*']};
    client.getItems('team',params).then(response => {
      this.team = response.data;
    }).catch(error => console.log(error))
  }

};
</script>

<style>




</style>