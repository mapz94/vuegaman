<template>
  <v-row style="margin: 5% 0%" justify="space-around">
    <v-col cols="11">
      <v-row justify="space-around">
        <v-data-iterator
          style="width: 100% !important"
          :items="promotions"
          hide-default-footer
        >
          <template v-slot:header>
            <div class="text-h3 text-center">Nuestros Planes</div>
          </template>
          <template v-slot:default="props">
            <v-row align="center" justify="center">
              <v-col
                v-for="(promocion, i) in props.items"
                :key="i"
                cols="12"
                md="4"
              >
                <v-card v-ripple @click="setSelected(i)">
                  <v-card
                    v-if="i == selected"
                    height="100"
                    dark
                    flat
                    color="primary"
                  >
                    <v-row align="center" justify="center">
                      <v-col cols="8">
                        <div
                          style="font-weight: bold;text-decoration: underline; font-size: 1.5rem; text-align: center"
                        >
                          Plan {{ promocion.name }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-card no-gutters dense v-else dark flat color="primary">
                    <v-row align="center" justify="center">
                      <v-col cols="8">
                        <div
                          style="font-weight: bold; font-size: 1.3rem; text-align: center"
                        >
                          Plan {{ promocion.name }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-divider></v-divider>
                  <v-list dense>
                    <v-list-item v-for="item in promocion.items" :key="item.id">
                      <v-list-item-content class="align-end">
                        {{ item.items_id.item }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-row justify="center">
                  <div style="font-size: 1.5rem; text-align: center">
                    {{ selectedMessage }}
                  </div>

                  <div
                    style="font-weight: bold; font-size: 1.5rem; text-align: center"
                  >
                    {{ promotions[selected].name }}
                  </div>
                </v-row>
              </v-col>
              <v-col class="text-center" cols="12">
                <v-btn x-large color="primary">Cotizar</v-btn>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    setSelected(i) {
      this.selected = i;
    }
  },
  data() {
    return {
      selected: 1,
      selectedMessage: "Plan seleccionado: "
    };
  },

  created() {
    this.$store.dispatch("getPromotions");
  },
  computed: {
    ...mapState(["promotions"])
  }
};
</script>

<style></style>
