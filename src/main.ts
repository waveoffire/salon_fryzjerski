import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      throttleDelay: 200,
      offset: 300,
      once: true
    });
  },
  router,
  render: h => h(App)
}).$mount("#app");
