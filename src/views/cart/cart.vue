<template>
  <div class='cart'>
    <navbar class="cartnav"><template v-slot:center>购物车<span v-show="length">({{length}})</span></template></navbar>
    <cartList></cartList>
    <cartBottomBar></cartBottomBar>
  </div>
</template>

<script>
//导入文件
import navbar from 'components/common/navbar/navbar';
import cartList from './childComps/cartList';
import cartBottomBar from './childComps/cartBottomBar'
import { mapGetters } from 'vuex'

export default {
  components: {
    navbar,
    cartList,
    cartBottomBar
  },
  data() {
    return {

    }
  },
  computed: {
    // ...mapGetters(['cartlength',])
    // 如果想去另外一个名称用下面这个方式
    ...mapGetters({
      length: 'cartlength',
    })
  },
  watch: {},
  methods: {},
  created() { },
  mounted() { },
  beforeCreate() { },
  beforeMount() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
}
</script>
<style scoped>
.cartnav {
  background: var(--color-tint);
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  position: relative;
  z-index: 9;
}
.cartList {
  height: 100vh;
}
</style>