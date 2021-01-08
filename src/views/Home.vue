<template>
  <div>
    <v-row dense no-gutters v-for="(callout, i) in callouts" :key="i">
      <v-col v-if="i == 0 || i % 2 == 0" cols="12">
        <calloutLeft :callout="callout" />
      </v-col>
      <v-col v-if="i % 2 == 1" cols="12">
        <calloutRight :callout="callout" />
      </v-col>
      <!-- All white components go here -->
      <v-col v-if="i == 0" cols="12">
        <features />
      </v-col>
      <v-col v-if="i == 1" cols="12" id="promotions">
        <promotions />
      </v-col>
      <v-col v-if="i == 2" cols="12">
        <team />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      content: "# your markdown content"
    };
  },
  name: "App",

  components: {
    calloutLeft: () => import("@/components/home/CalloutLeft.vue"),
    calloutRight: () => import("@/components/home/CalloutRight.vue"),
    features: () => import("@/components/home/ContentFeatures.vue"),
    promotions: () => import("@/components/home/Promotions.vue"),
    team: () => import("@/components/home/Team.vue")
  },
  computed: {
    ...mapState(["callouts"])
  },
  created() {
    this.$store.dispatch("getCallouts");
  }
};
</script>

<style></style>
