<template>
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="banner in Bbanner" :key="banner">
      <img :src="banner" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 2.提供一些默认值
    Bbanner: {
      type: Array,
    },
  },
  data() {
    return {
      // isLoad: false,
    };
  },
  methods: {
    // bannerLoad() {
    //   if (!this.isLoad) {
    //     this.$emit("bannerimgload");
    //     this.isLoad = true;
    //   }
    // },
  },
  mounted() {
    // console.log(Bbanner);
  },
};
</script>

<style scoped>
.swiper-slide {
  background: #000;
}
</style>