<template>
  <component :is="component" v-bind="bind">
    <atomic
      :component="element.component"
      :bind="element.bind"
      :elements="element.elements"
      v-for="(element, i) in elements"
      :key="i"
    />
    {{ value }}
  </component>
</template>

<script>
export default {
  name: "atomic",
  components: {
    atomic: () => import("@/components/atomic_design/atomic")
  },
  props: {
    component: {
      type: String,
      default: () => ""
    },
    bind: {
      type: Object,
      default: () => {}
    },
    elements: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style></style>
