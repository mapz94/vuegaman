<template>
  <v-row style="margin:4%" justify="center">
        <v-col cols="11">
          <v-row justify="center">
            <v-col cols="12">
              <div class="text-h2 text-center">
                  
                  </div>
            </v-col>
            <v-col cols="12">
              <v-row align="stretch" justify="space-around">
                <v-col cols="12" :md="12/3" v-for="(feature,i) in features" :key="i" >
                  <v-card flat>
                    <v-row justify="center">
                        <v-lazy>
                          <v-icon transition="scroll-y-transition" color="primary" x-large>{{feature.icon}}</v-icon>
                        </v-lazy>
                        <v-col cols="12">
                          <div style="font-size: 1.3rem;font-weight: bold;text-align:center">{{feature.feature}}</div>
                        </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
</template>

<script>
export default {
    data(){
        return{
            features:[
                {icon: 'mdi-cellphone', feature: 'Diseño responsivos para celulares.'},
                {icon: 'mdi-laptop', feature: 'Optimizados para el desarrollo de tu negocio.'},
                {icon: 'mdi-email-outline', feature: 'Cuentas de correo empresariales.'},
            ]
        }
    }

}
</script>

<style>

</style>