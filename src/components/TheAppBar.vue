<template>
<div id="background">
    <v-app-bar flat color="primary" app hide-on-scroll>
        <v-row>
            <v-col cols="5" >
                <v-img v-if="typeof appbar.logo.data.full_url != 'undefined'" :src="appbar.logo.data.full_url" :alt="appbar.branding" ></v-img>
            </v-col>
        </v-row>
        
        <v-spacer></v-spacer>
        <!--v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model" ></!--v-app-bar-nav-icon-->
        

    </v-app-bar>
</div>
    
</template>

<script>
export default {
  props: {
  },
    data(){
        return{

        }
    },
    created(){
        this.$store.dispatch("getAppbar");
    },
    computed:{
        appbar(){
            return this.$store.state.appbar;
        },
        primaryDrawer(){
            return this.$store.state.primaryDrawer;
        },
        branding(){
            return this.$store.state.branding;
        }
    }
}
</script>

<style>


</style>