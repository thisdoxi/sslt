<template>
  <div class="swiper-container">
    <slot></slot>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  data() {
    return {};
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, //循环
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      pagination: {
        //分页器
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        //自动播放
        delay: 2500,
        disableOnInteraction: false,
      },
      // autoHeight: true,
      effect: "fade",
    });
  },
  methods: {},
};
</script>

<style>
.swiper-container {
  box-sizing: border-box;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: auto;
}
.swiper-slide img {
  width: 100%;
}
.swiper-pagination-bullet-active {
  background: var(--color-tint);
}
</style>