<template>
  <v-card dark tile color="primary">
    <v-parallax src="@/assets/images/half_triangles_linear_gradient.webp">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="11">
          <v-row align="center">
            <v-col cols="12" sm="6">
              <v-img max-width="600" src="@/assets/images/logoGaman.webp" ></v-img>
              <div style="margin:1%" class="text-h5 text-center">
                {{ body }}
              </div>
              <v-row justify="center" >
                <v-btn light>
                    ver planes
                </v-btn>
              </v-row>
              <v-row align="end">
                <v-col v-for="(social,i) in socialMedia" :key="i">
                    <v-btn  x-large text>
                        <v-icon large>
                          {{social.icon}}
                        </v-icon>
                    </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      body: 'Crea tu página web con nosotros',
      socialMedia:[
          {icon: 'mdi-facebook', link: ''},
          {icon: 'mdi-instagram', link: ''},
          {icon: 'mdi-twitter', link: ''},
      ]
    }
  }
}
</script>

<style>

</style>