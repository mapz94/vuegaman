import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brandName: "Gaman",
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: false,
      type: 'default (no property)',
      clipped: false,
      floating: false,
      mini: false,
    },
    footer: {
      inset: false,
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
