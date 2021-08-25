<template>
  <div class="recommended">
    <div v-for="rec in recommended" class="recommended-item" :key="rec">
      <a :href="rec.link">
        <img :src="rec.image" alt="" />
        <div>{{ rec.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommended: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.recommended {
  display: flex;
  text-align: center;
  font-size: 13px;
  padding: 20px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommended-item {
  flex: 1;
}
.recommended-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>