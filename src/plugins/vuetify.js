import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

let basicTheme = {
  isDark: false,
  primary: "#05CAB6",
  secondary: "#424242",
  accent: "#FFF200",
  error: "#FF5252",
  info: "#2196F3",
  success: "#4CAF50",
  warning: "#FFC107"
};

export default new Vuetify({
  theme: {
    isDark: basicTheme.isDark,
    themes: {
      light: {
        primary: basicTheme.primary,
        secondary: basicTheme.secondary,
        accent: basicTheme.accent,
        error: basicTheme.error,
        info: basicTheme.info,
        success: basicTheme.success,
        warning: basicTheme.warning
      },
      dark: {
        primary: basicTheme.primary,
        secondary: basicTheme.secondary,
        accent: basicTheme.accent,
        error: basicTheme.error,
        info: basicTheme.info,
        success: basicTheme.success,
        warning: basicTheme.warning
      }
    }
  }
});
