import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/atomic",
    name: "Atomic",
    component: () => import("@/views/Atomic"),
    beforeEnter(to, from, next) {
      if (store.state.templates.length > 0) {
        next();
      } else {
        store
          .dispatch("getAtomic")
          .then(() => next())
          .catch(e => console.log(e));
      }
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
