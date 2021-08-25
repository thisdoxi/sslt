<template>
  <div class="goodsitem" @click="itemgoods">
    <img :src="goodsitem.show.img" alt="" />
    <div class="itemtextBox">
      <p class="itemtext">{{ goodsitem.title }}</p>
      <p class="price">
        &yen; {{ goodsitem.price }}
        <span class="collect">{{ goodsitem.cfav }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    itemgoods() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    },
  },
};
</script>

<style>
.goodsitem {
  width: 46%;
  border-radius: 6px;
  background: #f4f4f4;
  display: inline-block;
  font-size: 14px;
  overflow: hidden;
  margin: 10px 0 0;
}

.goodsitem img {
  width: 100%;
  margin-bottom: 10px;
}
.itemtextBox {
  padding: 0 5px;
}
.itemtext {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.price {
  color: var(--color-tint);
  margin: 10px 0;
}
.collect {
  position: relative;
  color: #000;
  margin-left: 70px;
}
.collect::before {
  content: "";
  position: absolute;
  right: 40px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>