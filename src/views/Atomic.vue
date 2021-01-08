<template>
  <div>
    <atomic
      :component="element.component"
      :bind="element.bind"
      :elements="element.elements"
      v-for="(element, i) in templates"
      :key="i"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    console.log(this.templates);
  },
  computed: {
    ...mapState(["templates"])
  },
  components: {
    atomic: () => import("@/components/atomic_design/atomic")
  }
};
</script>
