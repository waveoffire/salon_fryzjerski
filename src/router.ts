import Vue from "vue";
import Router, { RouteRecord, RawLocation, Route } from "vue-router";
import AppLayout from "./views/AppLayout.vue";
import Home from "./components/Home.vue";
import Cennik from "./components/Cennik.vue";
import Galeria from "./components/Galeria.vue";
import Kontakt from "./components/Kontakt.vue";
import About from "./components/About.vue";
Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: AppLayout,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "",
          redirect: { name: "Home" }
        },
        {
          path: "home",
          component: Home,
          name: "Home",
          meta: {
            title: "Strona główna"
          }
        },
        {
          path: "cennik",
          component: Cennik,
          name: "Cennik",
          meta: {
            title: "Cennik"
          }
        },
        {
          path: "galeria",
          component: Galeria,
          name: "Galeria",
          meta: {
            title: "Galeria"
          }
        },
        {
          path: "kontakt",
          component: Kontakt,
          name: "Kontakt",
          meta: {
            title: "Kontakt"
          }
        },
        {
          path: "about",
          component: About,
          name: "About",
          meta: {
            title: "O nas"
          }
        }
      ]
    },
    {
      path: "**",
      redirect: { name: "home" }
    }
  ]
});
/* router.beforeEach(
  (
    to: Route,
    from: Route,
    next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
  ) => {
    if (to.matched.some((record: RouteRecord) => record.meta.requiresAuth)) {
      if (!localStorage.getItem("apikey")) {
        let loginUrl = "/login";

        next({
          path: loginUrl,
          query: {
            redirect: to.fullPath
          }
        });
      }
    } else {
      next();
    }
  }
); */
export default router;
