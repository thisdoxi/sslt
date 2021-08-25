<template>
  <div class="detailnavba">
    <navbar>
      <template v-slot:left>
        <div class="back" @click="backbtn">
          <img src="~assets/img/common/back.svg">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(title,index) in titles" :key="title" class="titleItem" :class="{active:index===currentIndex}" @click="isactive(index)">
            {{title}}
          </div>
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar";

export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  mounted() {},
  methods: {
    isactive(index) {
      this.currentIndex = index;
    },
    backbtn() {
      this.$router.back();
    },
  },
  components: {
    navbar,
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.titleItem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 10px;
  margin-left: 5px;
}
</style>