import Vue from 'vue'
import Vuex from 'vuex'
import client from '@/plugins/directus'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    branding: "",
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
    services:[]
  },
  mutations: {      
    updatePages(state, pages){
      state.pages = pages;
    },
    updateServices(state, services){
      state.services = services;
    }
  },
  actions: {
    async getPages({commit}){
      let params = {fields: ['*.*.*.*.*']};
      let pages = await client.getItems("pages", params);
      console.log(pages.data);
      commit("updatePages", pages.data);
    },
    getServices({commit}){
      client.getItems("services").then(response => {
        console.log(response.data);
        commit("updateServices", response.data);
      }).catch(error => console.log(error));
    },
    getThemeColors({commit}, vuetify){ //Vuetify theme!!!
      commit;
      client.getItem("theme_colors", "1").then(response =>{
        let theme = response.data;
        vuetify.theme.isDark = theme.dark;
        vuetify.theme.themes.dark.primary = theme.primary;
        vuetify.theme.themes.light.primary = theme.primary;
        vuetify.theme.themes.dark.secondary = theme.secondary;
        vuetify.theme.themes.light.secondary = theme.secondary;
        vuetify.theme.themes.dark.accent = theme.accent;
        vuetify.theme.themes.light.accent = theme.accent;
        vuetify.theme.themes.dark.error = theme.error;
        vuetify.theme.themes.light.error = theme.error;
        vuetify.theme.themes.dark.info = theme.info;
        vuetify.theme.themes.light.info = theme.info;
        vuetify.theme.themes.dark.success = theme.success;
        vuetify.theme.themes.light.success = theme.success;
        vuetify.theme.themes.dark.warning = theme.warning;
        vuetify.theme.themes.light.warning = theme.warning;
      });
    },
    
  },
  modules: {

  }
})
