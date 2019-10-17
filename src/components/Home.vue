<template>
  <div class="back">
    <div class="row">
      <div class="title col-sm-12 col-md-12 col-12 col-lg-12 col-xl-6">
        <div
          data-aos="up"
          data-aos-delay="200"
          data-aos-duration="2000"
          data-aos-offset="120"
        >
          <div>Profesjonalny salon fryzjerski</div>
          <div class="slupsk">
            w Słupsku
          </div>
          <div class="care">
            Jesteśmy tu by dbać o Twoje włosy
          </div>
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
          alt=""
          srcset=""
        />
        <div class="unsplash">
          Photo by Angelo Pantazis on
          <a href="https://unsplash.com/photos/uIyzZCdCnWc"> Unsplash </a>
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
    height: 60px;
    line-height: 60px;
  }
  .care {
    font-size: 1.2rem;
    padding-top: 20px;
  }
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
  font-size: 1rem;
  padding-top: 200px;
  margin: 100px;
}

@media only screen and (max-width: 900px) {
  .title {
    padding-top: 100px;
    font-size: 1.5rem;
    .slupsk {
      font-size: 4rem;
      height: 40px;
      line-height: 40px;
    }
    .care {
      font-size: 1rem;
      padding-top: 15px;
    }
  }
  .text {
    font-size: 1rem;
    padding-top: 30px;
    margin: 10px;
  }
}
</style>
