<template>
  <div class="back">
    <!--     <vue-particles
      color="#fff"
      :particleOpacity="0.8"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="3"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="false"
      :clickEffect="false"
    ></vue-particles>-->
    <div class="row">
      <div class="title col-sm-12 col-md-12 col-12 col-lg-12 col-xl-6">
        <div data-aos="up" data-aos-delay="200" data-aos-duration="2000" data-aos-offset="120">
          <h2 class="salon">Profesjonalny</h2>
          <h1 class="slupsk">Salon Fryzjerski</h1>
          <h3 class="care">Małgorzata Wasilewska-Smilgin</h3>
          <h3>Słupsk ul. leszczyńskiego 1b</h3>
        </div>
        <div
          class="text"
          data-aos="left"
          data-aos-delay="200"
          data-aos-duration="2000"
          data-aos-offset="120"
        >
          Jeśli nadal nie jesteś przekonany, sprawdź w sieci opinie innych
          klientów o naszym salonie – zobaczysz, że wielu z nich poleca Salon
          Fryzjerski Małgorzata Wasilewska-Smilgin jako miejsce szczególnie
          godne zaufania! Przekonaj się, czy mają rację i odwiedź nas i sprawdź
          jak pracuje dobry fryzjer! Zapraszamy!
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/Salon-Fryzjerski-Ma%C5%82gorzata-Wasilewska-Smilgin-w-S%C5%82upsku-2044069099235550/"
            >
              <i class="fa fa-fw fa-5x fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a
              target="_blank"
              href="https://www.google.com/search?rlz=1C1GCEA_enPL855PL855&sxsrf=ACYBGNSNZtjHXC0tqbwFblmXP_wNhfzgxw%3A1571338293414&ei=NbioXf_vGOGkrgSp46DgCg&q=fryzjer+ma%C5%82gorzata+wasilewska+smilgin&oq=fryzjer+ma%C5%82gorzata+wasilewska+smilgin&gs_l=psy-ab.3..35i39.9451.10791..10999...0.0..0.85.574.8......0....1..gws-wiz.......35i304i39.odH0oNRu4j4&ved=0ahUKEwi_3rOm-6PlAhVhkosKHakxCKwQ4dUDCAs&uact=5#lrd=0x46fe1752570a23e1:0x7943704cb2276fb3,1,,,"
            >
              <i class="fa fa-fw fa-5x fa-google" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-12 col-lg-12 col-xl-6">
        <img
          data-aos="right"
          data-aos-delay="200"
          data-aos-duration="2000"
          data-aos-offset="120"
          class="woman"
          src="/img/womenblack.jpg"
          alt="Women"
          srcset
        />
        <div class="unsplash">
          Photo by Angelo Pantazis on
          <a href="https://unsplash.com/photos/uIyzZCdCnWc">Unsplash</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scooped>
[data-aos="up"] {
  transform: translateY(300px);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}
[data-aos="left"] {
  transform: translateX(-600px);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: translateX(0);
    opacity: 1;
  }
}
[data-aos="right"] {
  transform: translateX(300px);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: translateX(0);
    opacity: 1;
  }
}
.unsplash {
  text-align: center;
}
.title {
  text-align: center;
  font-size: 2rem;
  padding-top: 250px;
  .slupsk {
    font-size: 6rem;
    height: 50px;
    line-height: 50px;
  }
  .care {
    font-size: 2rem;
    padding-top: 12px;
  }
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.woman {
  width: 100%;
  padding-top: 20px;
}
.back {
  background-image: linear-gradient(
    to bottom,
    rgb(205, 205, 207),
    rgb(182, 179, 174)
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.text {
  font-size: 1.5rem;
  padding-top: 150px;
  margin: 100px;
}

@media only screen and (max-width: 900px) {
  .title {
    .salon {
      font-size: 1.7rem;
    }
    padding-top: 100px;
    font-size: 1.7rem;
    .slupsk {
      font-size: 4rem;
      height: 30px;
      line-height: 30px;
    }
    .care {
      font-size: 1.6rem;
      padding-top: 10px;
    }
  }
  .text {
    font-size: 1.1rem;
    padding-top: 30px;
    margin: 10px;
  }
  #particles-js {
    display: none;
  }
}
</style>
