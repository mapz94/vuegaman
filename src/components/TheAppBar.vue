<template>
<div id="background">
    <v-app-bar flat color="transparent" app hide-on-scroll>
        <v-toolbar-title>{{brandName}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model" ></v-app-bar-nav-icon>
    </v-app-bar>
</div>
    
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
        },
        brandName(){
            return this.$store.state.brandName;
        }
    }
}
</script>

<style>


</style>