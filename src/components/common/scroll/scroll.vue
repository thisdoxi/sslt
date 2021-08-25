<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    setTimeout(() => {
      // 创建bscroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true,
        observeImage: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      // 监听滚动的位置
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      // 监听scroll滚到底部
      this.scroll.on("pullingUp", (position) => {
        this.$emit("pullingUp");
      });
    }, 500);
  },
  methods: {
    scrollTo(x, y, time = 800) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
</style>