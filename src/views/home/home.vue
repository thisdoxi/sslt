<template>
  <div id="home">
    <navbar class="home-nav"><template v-slot:center>购物街</template></navbar>
    <tabcontrol :titles="['流行', '新款', '精选']" @tabclick="tabclick" ref="tabcontrol1" class="tabconttop" v-show="istabfix"></tabcontrol>
    <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUp="loadmore">
      <banner v-if="banners.length > 0">
        <homebanner :Bbanner="banners" @bannerimgload="bannerimgload"></homebanner>
      </banner>
      <recommended :recommended="recommends"></recommended>
      <feature></feature>
      <tabcontrol :titles="['流行', '新款', '精选']" @tabclick="tabclick" ref="tabcontrol2"></tabcontrol>
      <goodslist :goods="showgoods"></goodslist>
    </scroll>
    <backtop @click="backClick" v-show="isposition"></backtop>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar"; //头部导航
import banner from "components/common/banner/banner"; //banner图
import homebanner from "./childComps/homebanner"; //banner图

import scroll from "components/common/scroll/scroll"; //scroll滚动

import recommended from "views/home/childComps/recommended"; //推荐
import feature from "views/home/childComps/feature"; //本周流行

import tabcontrol from "components/content/tabcontrol/tabcontrol"; //tab切换
import goodslist from "components/content/goods/goodslist"; //tab显示区
import backtop from "components/content/backtop/backtop"; //tab显示区

import { gethomemultidata, gethomegoods } from "network/home"; //请求

export default {
  components: {
    navbar,
    banner,
    homebanner,
    scroll,
    recommended,
    feature,
    tabcontrol,
    goodslist,
    backtop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isposition: false,
      taboffsettop: 0,
      istabfix: false,
    };
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1.请求多个数据
    this.gethomemultidata();
    // 2请求商品数据
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
  },
  mounted() {},
  destroyed() {
    // console.log("1111111111");
  },
  methods: {
    // 事件监听相关方法
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.cur = index;
      this.$refs.tabcontrol2.cur = index;
    },

    // 网络请求相关代码
    gethomemultidata() {
      gethomemultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1;
      gethomegoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },

    // 返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    // 监听滚动位置进行显示隐藏
    contentScroll(position) {
      // 决定backtop是否显示
      this.isposition = -position.y > 1000;
      // 决定吸顶效果
      this.istabfix = -position.y > this.taboffsettop;
    },

    // 监听下拉加载
    loadmore() {
      this.gethomegoods(this.currentType);
    },

    // 吸顶效果至顶部判断
    bannerimgload() {
      // 所有的组件都有一个属性 $el:用于获取组件中的元素
      this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop;
    },
  },
};
</script>
<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  font-size: 16px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  /* margin-top: 44px; */
}
.tabconttop {
  position: relative;
  z-index: 10;
}
</style>