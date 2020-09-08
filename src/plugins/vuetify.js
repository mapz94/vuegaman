import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    scrollBarWidth: 32,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
  },
  lang: {
    current: 'es',
  },
  theme: {
    dark: true,
  },
  themes: {
    light: {
      primary: '#1976D2',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
    dark: {
      primary: '#2196F3',
      secondary: '#424242',
      accent: '#FF4081',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }
});
