<template>
  <div class='toast' v-show="show">
    {{message}}
  </div>
</template>

<script>
//导入文件
//import  from '';

export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
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
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
  padding: 8px 10px;
  border-radius: 6px;
  transform: translate(-50%, -50%);
}
</style>