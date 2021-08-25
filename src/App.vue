<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from "components/content/mainTabbar/mainTabbar.vue";
export default {
  components: {
    mainTabbar,
  },
};
</script>

<style>
@import url("~assets/css/base.css");
</style>