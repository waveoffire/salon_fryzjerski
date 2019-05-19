<template>
  <div class="container">

    <div class="row">
      <div class="col-12 head">
        <h1> Salon Fryzjerski Damsko-Męski Małgorzata Wasilewska-Smilgin</h1>
        <span class="line"></span>
      </div>
    </div>
    <div class="row content">
      <div class="col-12 col-md-4 address">
        <h3>Adres</h3>
        <i
          class="fa fa-location-arrow"
          aria-hidden="true"
        ></i> ul. Stanisława Leszczyńskiego 1b <br>
        <i
          class="fa fa-map-marker"
          aria-hidden="true"
        ></i> 76-200 Słupsk<br>

        <i
          class="fa fa-phone"
          aria-hidden="true"
        ></i> tel: (59) 845-71-34<br>
      </div>
      <div class="col-12 col-md-8 open">
        <div class="row">

          <h3>Godziny otwarcia</h3>
        </div>
        <div class="row">

          <div class="col-6"><b class="date">PONIEDZIAŁEK</b><br>
            <b class="date">WTOREK</b><br>
            <b class="date">ŚRODA</b><br>
            <b class="date">CZWARTEK</b><br>
            <b class="date"> PIĄTEK</b><br>
            <b class="date">SOBOTA</b><br>
            <b class="date">NIEDZIELA</b><br>
          </div>
          <div class="col-6"> 10:00 – 18:00<br>
            10:00 – 18:00<br>
            10:00 – 18:00<br>
            10:00 – 18:00<br>
            10:00 – 18:00<br>
            09:00 – 14:00<br>
            Zamknięte<br>
          </div>
        </div>
      </div>
    </div>

    <div class="row map">
      <div style="overflow:hidden;width: 100%;position: relative;height:500px;">
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=700&amp;height=500&amp;hl=pl&amp;q=leszczy%C5%84skiego%201b%2C%20S%C5%82upsk%2CPoland+(Salon%20Fryzjerski%20Damsko-M%C4%99ski%20Ma%C5%82gorzata%20Wasilewska-Smilgin)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.head {
  width: 100%;
}
.address {
  font-size: 1.3em;
}
.open {
  font-size: 1.2em;
}
.line {
  width: 70%;
  height: 1px;
  border: 2px solid rgb(255, 113, 113);
  display: block;
  margin: auto;
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  margin-bottom: 30px;
}
.map {
  position: absolute;
  left: 0;
  right: 0;
  height: 500px;
  border-top: 1px solid rgba(128, 128, 128, 0.212);
}
#gmap_canvas img {
  max-width: none !important;
  background: none !important;
}
.container {
  padding-bottom: 490px;
}
.content {
  padding-bottom: 50px;
  padding-top: 30px;
}
@media (max-width: 576px) {
  .head h1 {
    font-size: 1.5rem;
  }
}
</style>
