<template>
  <div class="container-flex">

    <div class="row">
      <div class="col-12 head">
        <h1
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="600"
        > Salon Fryzjerski Damsko-Męski Małgorzata Wasilewska-Smilgin</h1>
        <span
          data-aos="fade-right"
          data-aos-delay="100"
          class="line"
        ></span>
      </div>
    </div>
    <div class="row content">
      <div
        data-aos="zoom-in-right"
        data-aos-delay="100"
        data-aos-duration="600"
        class="col-12 col-md-4 address"
      >
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
      <div
        class="col-12 col-md-8 open"
        data-aos="zoom-in-left"
        data-aos-duration="600"
        data-aos-delay="100"
      >
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.36183163501386!2d17.00703635141033!3d54.47534800168742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe1752570a23e1%3A0x7943704cb2276fb3!2sWasilewska-Smilgin+Ma%C5%82gorzata.+Salon+fryzjerski!5e0!3m2!1spl!2sus!4v1558285232281!5m2!1spl!2sus"
          width="100%"
          height="500"
          frameborder="0"
          allowfullscreen
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
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    rgba(209, 230, 177, 0.699),
    rgba(87, 50, 189, 0.226)
  );
  -webkit-clip-path: polygon(0 20%, 100% 0, 100% 50%, 0 90%);
  clip-path: polygon(0 20%, 100% 0, 100% 50%, 0 90%);
  height: 350px;

  padding-top: 110px;
  background-size: 100%;
}
.address {
  font-size: 1.3em;
  padding-bottom: 30px;
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
  height: 502px;
  width: 105%;
  border-top: 1px solid rgba(128, 128, 128, 0.212);
  border-bottom: 1px solid rgba(128, 128, 128, 0.212);
}
#gmap_canvas img {
  max-width: none !important;
  background: none !important;
}
.content {
  padding-bottom: 50px;
  padding-top: 30px;
  padding-left: 200px;
}
@media (max-width: 576px) {
  .head h1 {
    font-size: 1.5rem;
  }
  .content {
    padding-left: 30px;
  }
}
</style>
