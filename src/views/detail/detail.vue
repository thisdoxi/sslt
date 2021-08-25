<template>
  <div id="detail">
    <detailnavba class="detailnavba"></detailnavba>
    <scroll class="content" :pullUpLoad="true" ref="scroll">
      <banner v-if="topImages.length > 0">
        <detailbanner :Bbanner="topImages"></detailbanner>
      </banner>
      <detailBaseInfo :goodsInfo="goodsInfo"></detailBaseInfo>
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></detailGoodsInfo>
    </scroll>
  </div>
</template>

<script>
import detailnavba from "./childComps/detailnavba.vue";
import banner from "components/common/banner/banner"; //banner图
import detailbanner from "./childComps/detailbanner"; //轮播定义图
import detailBaseInfo from "./childComps/detailBaseInfo"; //商品信息
import detailShopInfo from "./childComps/detailShopInfo"; //店铺信息
import detailGoodsInfo from "./childComps/detailGoodsInfo"; //商品详情信息

import scroll from "components/common/scroll/scroll";

import { getDetail, goodsInfo, shop } from "network/detail";
export default {
  name: "detail",
  components: {
    detailnavba,
    banner,
    detailbanner,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
    };
  },
  created() {
    // 1.保存存入的iid
    this.iid = this.$route.params.iid;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      // 1.顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goodsInfo = new goodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.获取店铺信息
      this.shop = new shop(data.shopInfo);
      // 4.获取商品详细数据
      this.detailInfo = data.detailInfo;
    });
  },
  mounted() {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh;
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.detailnavba {
  position: relative;
  z-index: 10;
  background: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>