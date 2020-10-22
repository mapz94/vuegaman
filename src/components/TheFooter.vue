<template>
  <v-footer :inset="footer.inset" app >
      <span class="px-4">Gaman Digital</span>
    </v-footer>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        footer(){
            return this.$store.state.footer;
        }
    }
}
</script>

<style>

</style>