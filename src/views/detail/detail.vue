<template>
  <div id="detail">
    <detailnavba class="detailnavba" @titleClick="titleClick"></detailnavba>
    <scroll class="content" :pullUpLoad="true" ref="scroll">
      <banner v-if="topImages.length > 0">
        <detailbanner :Bbanner="topImages"></detailbanner>
      </banner>
      <detailBaseInfo :goodsInfo="goodsInfo"></detailBaseInfo>
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></detailGoodsInfo>
      <detailParamInfo :paramInfo="paramInfo" ref="detailParamInfo"></detailParamInfo>
      <detailcomments :commentInfo="commentInfo" ref="detailcomments"></detailcomments>
      <goodsList :goods="recommends" ref="goodsList"></goodsList>
    </scroll>
  </div>
</template>

<script>
import detailnavba from "./childComps/detailnavba.vue";
import banner from "components/common/banner/banner";

import detailbanner from "./childComps/detailbanner"; //轮播定义图
import detailBaseInfo from "./childComps/detailBaseInfo"; //商品信息
import detailShopInfo from "./childComps/detailShopInfo"; //店铺信息
import detailGoodsInfo from "./childComps/detailGoodsInfo"; //商品详情信息
import detailParamInfo from "./childComps/detailParamInfo"; //商品参数
import detailcomments from "./childComps/detailcomments"; //商品评论
import goodsList from "components/content/goods/goodslist"; //推荐

import scroll from "components/common/scroll/scroll";

import {
  getDetail,
  goodsInfo,
  shop,
  goodsParam,
  getRecommend,
} from "network/detail";
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
    detailParamInfo,
    detailcomments,
    goodsList,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
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
      //获取参数信息
      this.paramInfo = new goodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 3.请求推荐数据
    getRecommend().then((res) => {
      // console.log(res.data.list);
      this.recommends = res.data.list;
    });
  },
  updated() {},
  mounted() {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh;
      setTimeout(() => {
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.detailParamInfo.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.detailcomments.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.goodsList.$el.offsetTop - 44);
      }, 2000);
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
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