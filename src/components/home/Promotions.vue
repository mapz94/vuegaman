<template>
  <v-row style="margin: 5% 0%" justify="space-around">
    <v-col cols="11" >
      <v-row justify="center">
          <v-data-iterator :items="promotions" :items-per-page.sync="itemsPerPage" hide-default-footer >
            <template v-slot:header>
                <div class="text-h3 text-center">Nuestros Planes</div>
            </template>

            <template v-slot:default="props">
                <v-row>
                    <v-col v-for="promocion in props.items" :key="promocion.name" cols="12" md="4" >
                        <v-card v-ripple>
                            <v-card dark flat color="primary">
                                <v-card-title>
                                    {{promocion.name}}
                                </v-card-title>
                            </v-card>

                            <v-divider></v-divider>

                            <v-list dense>
                                <v-list-item v-for="(item) in promocion.items" :key="item">
                                    <v-list-item-content class="align-end">
                                        {{ item.items_id.item }}
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                        <v-btn block color="primary">Cotizar</v-btn>
                    </v-col>
                </v-row>
            </template>
          </v-data-iterator>
        </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('getPromotions');
    },
    computed:{
        promotions(){
            return this.$store.state.promotions;
        }
    }

}
</script>

<style>

</style>