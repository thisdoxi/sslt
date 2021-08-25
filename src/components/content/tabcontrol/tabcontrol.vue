<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{ active: index === cur }" :key="index" @click="titlesClick(index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      cur: 0,
    };
  },
  mounted() {},
  methods: {
    titlesClick(index) {
      this.cur = index;
      this.$emit("tabclick", index);
    },
  },
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.tab-control-item {
  flex: 1;
  background: #fff;
}
.active {
  color: #fff;
  /* border-bottom: 3px solid var(--color-high-text); */
  background: var(--color-high-text);
}
</style>