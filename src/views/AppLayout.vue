<template>
  <div id="wrapper">
    <app-header @sbtoggle="sbtoggle"></app-header>
    <app-content :title="title"></app-content>
    <app-footer @sbtoggle="sbtoggle"></app-footer>
  </div>
</template>
<script>
import AppHeader from "./../components/layout/Header";
import AppContent from "./../components/layout/Content";
import AppFooter from "./../components/layout/Footer";
export default {
  name: "AppLayout",
  data() {
    return {
      title: null
    };
  },
  components: {
    AppHeader,
    AppContent,
    AppFooter
  },
  methods: {
    sbtoggle() {
      let body = document.body;
      if (body) {
        if (body.className.indexOf("sidebar-collapse") != -1) {
          body.className = body.className.replace(" sidebar-collapse", "");
          body.className += " sidebar-open";
        } else {
          body.className = body.className.replace(" sidebar-open", "");
          body.className += " sidebar-collapse";
        }
      }
    }
  }
};
</script>