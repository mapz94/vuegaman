<template>
<div id="background">
    <v-app-bar dark flat color="primary" dense app hide-on-scroll> 
        <v-toolbar-title>
            Visita nuestras redes sociales
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model" ></!--v-app-bar-nav-icon-->
        <v-btn text v-for="(social, i) in socialMedia" :key="i">
            <v-icon x-large>{{social.icon}}</v-icon>
        </v-btn>

    </v-app-bar>
</div>
    
</template>

<script>
export default {
  props: {
  },
  data(){
      return{
          socialMedia:[
          {icon: 'mdi-facebook', link: ''},
          {icon: 'mdi-instagram', link: ''},
          {icon: 'mdi-twitter', link: ''},
      ]
      }
  },
}
</script>

<style>


</style>