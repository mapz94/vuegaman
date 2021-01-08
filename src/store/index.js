import Vue from "vue";
import Vuex from "vuex";
import client from "@/plugins/directus";
const params = { fields: ["*.*.*.*.*"] };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    branding: "",
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: false,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },
    callouts: [],
    features: [],
    promotions: [],
    team: [],
    templates: []
  },
  mutations: {
    updatePromotions(state, promotions) {
      state.promotions = promotions;
    },
    updateCallouts(state, callouts) {
      state.callouts = callouts;
    },
    updateFeatures(state, features) {
      state.features = features;
    },
    updateTeam(state, team) {
      state.team = team;
    },
    updateTemplate(state, templates) {
      state.templates = templates;
    }
  },
  actions: {
    async getPromotions({ commit }) {
      try {
        let response = await client.getItems("promotions", params);
        commit("updatePromotions", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCallouts({ commit }) {
      try {
        let response = await client.getItems("callouts", params);
        commit("updateCallouts", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getFeatures({ commit }) {
      try {
        let response = await client.getItems("features", params);
        commit("updateFeatures", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getTeam({ commit }) {
      try {
        let response = await client.getItems("team", params);
        commit("updateTeam", response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getAtomic({ commit }) {
      try {
        let response = await client.getItems("template", {
          fields: [
            "*",
            "elements.organisms_id.elements.molecules_id.elements.atoms_id.*",
            "elements.organisms_id.*",
            "elements.organisms_id.elements.molecules_id.*"
          ]
        });
        let templates = response.data;
        let new_templates = [];
        for (let template of templates) {
          let organisms = [];
          for (let organism of template.elements) {
            let molecules = [];
            for (let molecule of organism.organisms_id.elements) {
              let atoms = [];
              for (let atom of molecule.molecules_id.elements) {
                atoms.push(atom.atoms_id);
              }
              molecule.molecules_id.elements = atoms;
              molecules.push(molecule.molecules_id);
            }
            organism.organisms_id.elements = molecules;
            organisms.push(organism.organisms_id);
          }
          template.elements = organisms;
          new_templates.push(template);
        }
        commit("updateTemplate", new_templates);
      } catch (e) {
        console.log(e);
      }
    }
  },
  modules: {}
});
