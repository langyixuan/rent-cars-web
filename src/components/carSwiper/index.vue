<template>
  <div class="car-swiper">
    <swiper :pagination="{ clickable: true }" :options="swiperOption">
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import CarSwiperItem from "../carSwiperItem";
export default {
  name: "CarSwiper",
  components: { Swiper, SwiperSlide, CarSwiperItem },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
/*清除swiper前后按钮默认样式*/
.swiper-button-prev:after {
  display: none;
}
.swiper-button-next:after {
  display: none;
}
</style>
