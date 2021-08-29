<template>
  <div class='check-button' :class="{Check:ischecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
//导入文件
//import  from '';

export default {
  props: {
    ischecked: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() { return {} },
  computed: {},
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
.CheckButton {
  border-radius: 50%;
  border: 1px solid #aaa;
}
.Check {
  border-color: red;
  background: red;
}
</style>