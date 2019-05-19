<template class="header">
  <!-- Navbar -->

  <!-- Right navbar links -->
  <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom retro">
    <div class="underline"></div>
    <!--     <div class="underline"></div>
    <div class="underline"></div> -->
    <a v-on:click="ul(0,'Home')">Główna</a>
    <a v-on:click="ul(1,'Cennik')">Cennik</a>
    <a v-on:click="ul(2,'Galeria')">Galeria</a>
    <a v-on:click="ul(3,'Kontakt')">Kontakt</a>
    <a v-on:click="ul(4,'About')">O nas</a>
  </nav>

  <!-- /.navbar -->
</template>

<script>
export default {
  name: "Header",
  methods: {
    ul(index, name) {
      var underlines = document.querySelectorAll(".underline");

      for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
      }
      this.$router.push({ name: name });
    }
  }
};
</script>

<style scoped>
.header {
  font-family: system-ui, sans-serif;
  background: whitesmoke;
  min-height: 100vh;
}

nav.retro {
  position: relative;
  white-space: nowrap;
  background: white;
  padding: 0.5em 0;
  margin: 0 0;
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.05);
}

.underline {
  display: block;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  height: 0.5em;
  width: 20%;
  background: black;
  pointer-events: none;

  transition: -webkit-transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
}

a {
  display: inline-block;
  z-index: 10;
  width: 20%;
  padding: 1em 10px;
  text-align: center;
  cursor: pointer;
}
nav.retro .underline {
  border-radius: 100% 100% 0 0;
}
nav.retro .underline:nth-child(1) {
  background: rgb(252, 140, 140);
}
nav.retro .underline:nth-child(2) {
  background: pink;
}
nav.retro .underline:nth-child(3) {
  background: red;
}
</style>
