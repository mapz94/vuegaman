<template>
  <v-app>
    <img class="filter-green" src="@/assets/logo_gaman_horse.svg"/>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style>
.filter-green{
      filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
    }

</style>