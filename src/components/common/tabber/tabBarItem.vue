<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-test"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#FF5777",
    },
  },
  data() {
    return {
      // isActive:true
    };
  },
  computed: {
    isActive() {
      // 判断当前活跃状态找到传过来的path时，找不到就会返回-1，
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active{
      color: red;
  } */
</style>