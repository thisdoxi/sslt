<template>
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="banner in Bbanner" :key="banner">
      <a :href="banner.link">
        <img :src="banner.image" alt="" @load="bannerLoad" />
      </a>
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
      isLoad: false,
    };
  },
  methods: {
    bannerLoad() {
      if (!this.isLoad) {
        this.$emit("bannerimgload");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
</style>