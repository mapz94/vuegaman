<template>
  <v-app>
    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-col>
          <v-row>
            <v-card-title class="text-center"
              >Esta página web aun esta en construcción.</v-card-title
            >
            <v-card-text class="text-center"
              >Agradecemos su comprensión.</v-card-text
            >
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center" align="center">
            <v-btn color="error" @click="dialog = false">Cerrar</v-btn>
          </v-row>
        </v-col>
      </v-card>
    </v-dialog>
    <appbar />
    <v-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    appbar: () => import("@/components/TheAppBar")
  },
  data() {
    return {
      dialog: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
