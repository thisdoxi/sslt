<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.backtop {
  position: fixed;
  z-index: 1;
  bottom: 55px;
  right: 8px;
  width: 45px;
}
.backtop img {
  width: 100%;
}
</style>