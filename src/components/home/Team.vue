<template>
  <v-row justify="center">
    <v-col cols="11">
      <v-row>
        <v-col cols="12">
          <div style="text-align: center; font-weight: bold; font-size:1.5rem">
            Nuestro Equipo
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-around" align="">
        <v-col cols="12" :sm="12 / 4" v-for="(member, i) in team" :key="i">
          <v-card ripple>
            <v-img :src="member.image.data.full_url" />
          </v-card>
          <div style="font-weight: Bold; font-size: 1.3rem; text-align: center">
            {{ member.name }}
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["team"])
  },
  created() {
    this.$store.dispatch("getTeam");
  }
};
</script>

<style></style>
