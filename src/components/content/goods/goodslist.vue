<template>
  <div class="goods">
    <gooditem
      v-for="goodsitem in goods"
      :key="goodsitem"
      :goodsitem="goodsitem"
    ></gooditem>
  </div>
</template>

<script>
import gooditem from "./goodsitem";
export default {
  props: {
    goods: {
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
  components: {
    gooditem,
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>