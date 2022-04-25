<template>
  <div class="car-swiper">
    <swiper
      :pagination="{ clickable: true }"
      :options="swiperOption"
      class="swiper-wrap"
    >
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <swiper-slide><CarSwiperItem /></swiper-slide>
      <div
        class="swiper-button-prev iconfont icon-jiantou_xiangzuo_o"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next iconfont icon-jiantou_xiangyou_o"
        slot="button-next"
      ></div>
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
        spaceBetween: 40,
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

.swiper-wrap {
  padding: 100px;
}

.swiper-button-next {
}

.iconfont {
  color: rgb(45, 35, 35);
  font-size: 34px;
  font-weight: 700;
  transition: all ease-in-out 0.4s;

  &:hover {
    color: orangered;
  }
}
</style>
