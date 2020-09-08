<template>
  <v-navigation-drawer v-model="primaryDrawer.model" :clipped="primaryDrawer.clipped" :floating="primaryDrawer.floating" :mini-variant="primaryDrawer.mini" :permanent="primaryDrawer.type === 'permanent'" :temporary="primaryDrawer.type === 'temporary'" app overflow>
    </v-navigation-drawer>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        primaryDrawer(){
            return this.$store.state.primaryDrawer;
        }
    }
}
</script>

<style>

</style>