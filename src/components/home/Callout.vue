<template>
  <v-card ripple dark tile color="primary">
    <v-parallax src="@/assets/images/half_triangles_linear_gradient.webp">
      <v-row align="center" justify="center">
        <v-col cols="11">
          <v-row justify="center">
            <v-col cols="12" md="5">
              <v-card flat color="transparent">
                <div class="text-h3" style="font-weight:bold">Diseño de páginas web y manejo de contenido.</div>
                <p style="margin-top: 3%">Diseña con nosotros tu página web</p>
                <v-btn x-large text color="accent">
                  Comenzar
                </v-btn>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-img contain height="300" src="@/assets/images/GAMANDIGITAL.svg" />
            </v-col>
          </v-row>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
    </v-parallax>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      body: 'Impulsores de cambios',
      
    }
  }
}
</script>

<style>

</style>