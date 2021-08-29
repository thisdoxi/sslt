<template>
  <div class='cartList'>
    <scroll class="content" ref="scroll" :pullUpLoad="true">
      <cartListItem v-for="(item,index) in cartList" :key="index" :iteminfo="item"></cartListItem>
    </scroll>
  </div>
</template>

<script>
//导入文件
import { mapGetters } from 'vuex'
import scroll from 'components/common/scroll/scroll'
import cartListItem from './cartListItem'


export default {
  components: {
    scroll,
    cartListItem
  },
  data() { return {} },
  computed: {
    ...mapGetters(['cartList'])
  },
  watch: {},
  methods: {},
  created() { },
  mounted() { },
  beforeCreate() { },
  beforeMount() { },
  beforeUpdate() { },
  updated() {
  },
  beforeDestroy() { },
  destroyed() { },
  activated() {
    // console.log(111);
    this.$refs.scroll.refresh;
  },
}
</script>
<style scoped>
.content {
  height: calc(100% - 44px - 58px - 58px);
}
</style>